/**
 * Product 1 — Divya Yoga Maala Service
 * Price: ₹1,000
 * Date Range Validity: August 15 to December 1
 * Backend enforced.
 */
export function validateMaalaPurchaseDate(): { valid: boolean; reason?: string } {
  const now = new Date();
  const year = now.getFullYear();

  // August 15 (Month index 7) to December 1 (Month index 11)
  const startDate = new Date(year, 7, 15, 0, 0, 0); // Aug 15
  const endDate = new Date(year, 11, 1, 23, 59, 59); // Dec 1

  if (now < startDate) {
    return {
      valid: false,
      reason: `Divya Yoga Maala purchase opens on August 15, ${year}.`,
    };
  }

  if (now > endDate) {
    return {
      valid: false,
      reason: `Divya Yoga Maala purchase closed on December 1, ${year}.`,
    };
  }

  return { valid: true };
}

/**
 * Product 2 — Shambala Contribution Service
 * Options: ₹1,000, ₹2,000, ₹5,000, ₹10,000
 * Custom Amount: MUST be greater than ₹10,000
 * Validity Window: Upto December 21
 * Backend enforced.
 */
export function validateContributionDate(): { valid: boolean; reason?: string } {
  const now = new Date();
  const year = now.getFullYear();

  // August 15 (Month index 7) to December 21 (Month index 11)
  const startDate = new Date(year, 7, 15, 0, 0, 0); // Aug 15
  const endDate = new Date(year, 11, 21, 23, 59, 59); // Dec 21

  if (now < startDate) {
    return {
      valid: false,
      reason: `Shambala Contribution window opens on August 15, ${year}.`,
    };
  }

  if (now > endDate) {
    return {
      valid: false,
      reason: `Shambala Contribution window for ${year} closed on December 21.`,
    };
  }

  return { valid: true };
}

export function validateContributionAmount(
  amount: number,
  isCustom: boolean
): { valid: boolean; finalAmount: number; reason?: string } {
  const numericAmount = Number(amount);

  if (isNaN(numericAmount) || numericAmount <= 0) {
    return { valid: false, finalAmount: 0, reason: 'Invalid contribution amount.' };
  }

  const standardPresets = [1000, 2000, 5000, 10000];

  if (!isCustom) {
    if (!standardPresets.includes(numericAmount)) {
      return {
        valid: false,
        finalAmount: 0,
        reason: 'Please select a valid preset contribution amount (₹1,000, ₹2,000, ₹5,000, ₹10,000) or choose Custom.',
      };
    }
    return { valid: true, finalAmount: numericAmount };
  }

  // Custom Amount rule: MUST be greater than ₹10,000
  if (numericAmount <= 10000) {
    return {
      valid: false,
      finalAmount: 0,
      reason: 'Custom contribution amount must be greater than ₹10,000.',
    };
  }

  return { valid: true, finalAmount: numericAmount };
}

/**
 * Product 3 — Divya Yogam Membership Tiers
 * Gold: ₹1,000 (0% discount)
 * Platinum: ₹2,000 (10% discount)
 * Diamond: ₹5,000 (20% discount)
 */
export const MEMBERSHIP_TIER_PRICES: Record<string, { name: string; price: number; discountPercent: number }> = {
  gold: { name: 'Gold', price: 1000, discountPercent: 5 },
  platinum: { name: 'Platinum', price: 2000, discountPercent: 10 },
  diamond: { name: 'Diamond', price: 5000, discountPercent: 20 },
};
