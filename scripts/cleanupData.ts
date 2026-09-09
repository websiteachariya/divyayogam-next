import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanup() {
  console.log('Starting DB cleanup: deleting non-admin users, orders, and payment logs...');

  // 1. Delete all Payment logs
  const deletedPayments = await prisma.payment.deleteMany({});
  console.log(`Deleted ${deletedPayments.count} Payment logs.`);

  // 2. Delete all Webhook events
  const deletedWebhooks = await prisma.webhookEvent.deleteMany({});
  console.log(`Deleted ${deletedWebhooks.count} Webhook events.`);

  // 3. Delete all Contributions
  const deletedContributions = await prisma.contribution.deleteMany({});
  console.log(`Deleted ${deletedContributions.count} Contributions.`);

  // 4. Delete all Maala Purchases
  const deletedMaalaPurchases = await prisma.maalaPurchase.deleteMany({});
  console.log(`Deleted ${deletedMaalaPurchases.count} Maala Purchases.`);

  // 5. Delete all Memberships
  const deletedMemberships = await prisma.membership.deleteMany({});
  console.log(`Deleted ${deletedMemberships.count} Memberships.`);

  // 6. Delete all Class Enrollments
  const deletedEnrollments = await prisma.classEnrollment.deleteMany({});
  console.log(`Deleted ${deletedEnrollments.count} Class Enrollments.`);

  // 7. Delete all Order Items
  const deletedOrderItems = await prisma.orderItem.deleteMany({});
  console.log(`Deleted ${deletedOrderItems.count} Order Items.`);

  // 8. Delete all Orders
  const deletedOrders = await prisma.order.deleteMany({});
  console.log(`Deleted ${deletedOrders.count} Orders.`);

  // 9. Delete all Members
  const deletedMembers = await prisma.member.deleteMany({});
  console.log(`Deleted ${deletedMembers.count} Members.`);

  // 10. Delete Password Reset Tokens for non-admin users
  const deletedTokens = await prisma.passwordResetToken.deleteMany({
    where: {
      user: {
        role: {
          not: Role.ADMIN,
        },
      },
    },
  });
  console.log(`Deleted ${deletedTokens.count} Password Reset Tokens for non-admin users.`);

  // 11. Delete all non-admin users
  const deletedUsers = await prisma.user.deleteMany({
    where: {
      role: {
        not: Role.ADMIN,
      },
    },
  });
  console.log(`Deleted ${deletedUsers.count} non-admin User accounts.`);

  console.log('DB cleanup completed successfully! Admin account preserved.');
}

cleanup()
  .catch((e) => {
    console.error('Cleanup error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
