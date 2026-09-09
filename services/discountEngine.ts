import { prisma } from '@/lib/prisma';
import { MembershipTier } from '@prisma/client';

export interface ClassDiscountResult {
  classId: string;
  className: string;
  slug: string;
  orderSequence: number;
  originalPrice: number;
  activeMembership: MembershipTier | null;
  discountPercentage: number;
  discountAmount: number;
  finalAmount: number;
  isEligible: boolean;
  reason?: string;
}

/**
 * Fetch active successful membership for a user
 */
export async function getActiveMembership(userId: string) {
  const membership = await prisma.membership.findFirst({
    where: {
      userId,
      status: 'SUCCESS',
    },
    orderBy: { createdAt: 'desc' },
  });

  return membership;
}

/**
 * Check if user is eligible to enroll/buy a specific class by slug
 * Enforces sequential progression: Ayangara -> Pandava -> Amirtha -> Anandha -> Amoha -> Advaitha
 */
export async function getClassEligibility(userId: string, classSlug: string) {
  let targetClass = await prisma.class.findUnique({
    where: { slug: classSlug },
  });

  if (!targetClass && classSlug === 'all-in-one') {
    targetClass = {
      id: 'all-in-one',
      name: 'All-in-One Master Bundle',
      slug: 'all-in-one',
      price: 52500,
      orderSequence: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any;
  }

  if (!targetClass) {
    return { isEligible: false, reason: 'Class not found', targetClass: null };
  }

  // Check if user already purchased/completed this class
  const existingEnrollment = await prisma.classEnrollment.findUnique({
    where: {
      userId_classId: {
        userId,
        classId: targetClass.id,
      },
    },
  });

  if (existingEnrollment && (existingEnrollment.status === 'PURCHASED' || existingEnrollment.status === 'COMPLETED' || existingEnrollment.status === 'IN_PROGRESS')) {
    return {
      isEligible: false,
      reason: `You have already ${existingEnrollment.status.toLowerCase()} this class.`,
      targetClass,
      existingEnrollment,
    };
  }

  // Special rules for All-in-One Master Pass
  if (targetClass.slug === 'all-in-one') {
    const activeMembership = await getActiveMembership(userId);
    if (!activeMembership) {
      return {
        isEligible: false,
        reason: 'All-in-One Master Pass offer is NOT APPLICABLE for Non-Members. Active Gold, Platinum, or Diamond Membership is required to unlock All-in-One Master Pass.',
        targetClass,
      };
    }

    // Check if user has already started individual class progression
    const anyIndividualEnrollment = await prisma.classEnrollment.findFirst({
      where: {
        userId,
        classItem: {
          orderSequence: { in: [1, 2, 3, 4, 5, 6] },
        },
        status: { in: ['PURCHASED', 'COMPLETED', 'IN_PROGRESS'] },
      },
    });

    if (anyIndividualEnrollment) {
      return {
        isEligible: false,
        reason: 'All-in-One Master Pass is NOT APPLICABLE because individual class progression has already been started.',
        targetClass,
      };
    }

    return { isEligible: true, targetClass, existingEnrollment };
  }

  // Class Sequence 1 (Ayangara) is always eligible for purchase (Non-members and Members alike)
  if (targetClass.orderSequence === 1) {
    return { isEligible: true, targetClass, existingEnrollment };
  }

  // For Sequence N (> 1), check if Sequence N-1 is COMPLETED, PURCHASED, or IN_PROGRESS
  const previousSequence = targetClass.orderSequence - 1;
  const previousClass = await prisma.class.findUnique({
    where: { orderSequence: previousSequence },
  });

  if (!previousClass) {
    return { isEligible: true, targetClass, existingEnrollment };
  }

  const previousEnrollment = await prisma.classEnrollment.findUnique({
    where: {
      userId_classId: {
        userId,
        classId: previousClass.id,
      },
    },
  });

  if (!previousEnrollment || (previousEnrollment.status !== 'COMPLETED' && previousEnrollment.status !== 'PURCHASED' && previousEnrollment.status !== 'IN_PROGRESS')) {
    return {
      isEligible: false,
      reason: `You must complete or purchase the previous class (${previousClass.name}) before unlocking ${targetClass.name}.`,
      targetClass,
      requiredPreviousClass: previousClass.name,
    };
  }

  return { isEligible: true, targetClass, existingEnrollment };
}

/**
 * Calculate class price, discount, and eligibility from backend single source of truth
 */
export async function calculateClassDiscount(
  userId: string,
  classSlug: string
): Promise<ClassDiscountResult> {
  const eligibility = await getClassEligibility(userId, classSlug);
  let targetClass = eligibility.targetClass;

  if (!targetClass && classSlug === 'all-in-one') {
    targetClass = {
      id: 'all-in-one',
      name: 'All-in-One Master Bundle',
      slug: 'all-in-one',
      price: 52500,
      orderSequence: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any;
  }

  if (!targetClass) {
    throw new Error('Class not found');
  }

  const activeMembership = await getActiveMembership(userId);

  let discountPercentage = 0;

  if (targetClass.slug === 'all-in-one') {
    if (!activeMembership || !eligibility.isEligible) {
      return {
        classId: targetClass.id,
        className: targetClass.name,
        slug: targetClass.slug,
        orderSequence: targetClass.orderSequence,
        originalPrice: targetClass.price,
        activeMembership: activeMembership ? activeMembership.level : null,
        discountPercentage: 0,
        discountAmount: 0,
        finalAmount: targetClass.price,
        isEligible: false,
        reason: eligibility.reason || 'All-in-One Master Pass is NOT APPLICABLE for Non-Members. Active Membership is required.',
      };
    }

    // All-in-One Master Pass Discounts: Diamond 50%, Platinum 30%, Gold 10%
    if (activeMembership.level === MembershipTier.DIAMOND) {
      discountPercentage = 50;
    } else if (activeMembership.level === MembershipTier.PLATINUM) {
      discountPercentage = 30;
    } else if (activeMembership.level === MembershipTier.GOLD) {
      discountPercentage = 10;
    }
  } else {
    // Individual Sequential Class Discounts: Diamond 20%, Platinum 10%, Gold 5%, Non-Member 0%
    if (activeMembership) {
      if (activeMembership.level === MembershipTier.DIAMOND) {
        discountPercentage = 20;
      } else if (activeMembership.level === MembershipTier.PLATINUM) {
        discountPercentage = 10;
      } else if (activeMembership.level === MembershipTier.GOLD) {
        discountPercentage = 5;
      }
    }
  }

  const originalPrice = targetClass.price;
  const discountAmount = Math.round((originalPrice * discountPercentage) / 100);
  const finalAmount = originalPrice - discountAmount;

  return {
    classId: targetClass.id,
    className: targetClass.name,
    slug: targetClass.slug,
    orderSequence: targetClass.orderSequence,
    originalPrice,
    activeMembership: activeMembership ? activeMembership.level : null,
    discountPercentage,
    discountAmount,
    finalAmount,
    isEligible: eligibility.isEligible,
    reason: eligibility.reason,
  };
}
