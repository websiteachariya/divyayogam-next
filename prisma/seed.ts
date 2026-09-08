import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Divya Yogam database...');

  // 1. Seed Classes
  const classes = [

    {
      slug: 'all-in-one',
      name: 'All-in-One Master Class Bundle',
      price: 52500,
      orderSequence: 7,
      description: 'Complete 6-Class Master Bundle (Ayangara, Pandava, Amirtha, Anandha, Amoha, Advaitha). Unlocks all classes at once.',
    },
    {
      slug: 'ayangara',
      name: 'Ayangara',
      price: 2500,
      orderSequence: 1,
      description: 'First level of divine yoga awakening focusing on body alignment and breath control.',
    },
    {
      slug: 'pandava',
      name: 'Pandava',
      price: 5000,
      orderSequence: 2,
      description: 'Second level deepening inner strength, focus, and energy balance.',
    },
    {
      slug: 'amirtha',
      name: 'Amirtha',
      price: 7500,
      orderSequence: 3,
      description: 'Third level unlocking vital energy nectar and emotional harmony.',
    },
    {
      slug: 'anandha',
      name: 'Anandha',
      price: 10000,
      orderSequence: 4,
      description: 'Fourth level introducing bliss consciousness and advanced meditation.',
    },
    {
      slug: 'amoha',
      name: 'Amoha',
      price: 12500,
      orderSequence: 5,
      description: 'Fifth level transcending illusion and mental clarity.',
    },
    {
      slug: 'advaitha',
      name: 'Advaitha',
      price: 15000,
      orderSequence: 6,
      description: 'Sixth and ultimate level of non-dual spiritual union and mastery.',
    },
    
  ];

  for (const cls of classes) {
    await prisma.class.upsert({
      where: { slug: cls.slug },
      update: {
        name: cls.name,
        price: cls.price,
        orderSequence: cls.orderSequence,
        description: cls.description,
      },
      create: cls,
    });
  }
  console.log('Classes seeded successfully.');

  // 2. Seed Default Admin
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@divyayogam.org';
  const adminPassword = process.env.ADMIN_PASSWORD || 'divyayogam@26';
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      password: hashedPassword,
      role: Role.ADMIN,
    },
    create: {
      name: 'Divya Yogam Admin',
      email: adminEmail,
      mobile: '9999999999',
      age: 35,
      gender: 'Other',
      occupation: 'Administrator',
      organisation: 'Divya Yogam Foundation',
      password: hashedPassword,
      role: Role.ADMIN,
    },
  });
  console.log('Admin user seeded successfully.');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
