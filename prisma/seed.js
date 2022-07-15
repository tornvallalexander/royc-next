const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function seed() {
  const email = "123@gmail.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("123", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.fund.create({
    data: {
      name: "Insight Partners XII",
      type: "Growth Equity",
      totalFund: 250000000,
      unallocated: 44600000,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
      status: "upcoming",
      userId: user.id
    },
  });

  await prisma.fund.create({
    data: {
      name: "Brookfield Strategic Real Estate Partners VI",
      type: "Real Estate private Equity",
      totalFund: 200000000,
      unallocated: 44600000,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
      status: "upcoming",
      userId: user.id
    },
  });

  await prisma.fund.create({
    data: {
      name: "Advent International",
      type: "Private Equity",
      totalFund: 200000000,
      unallocated: 44600000,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
      status: "upcoming",
      userId: user.id
    },
  });

  await prisma.fund.create({
    data: {
      name: "Advent International",
      type: "Private Equity",
      totalFund: 200000000,
      unallocated: 44600000,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
      status: "ongoing",
      userId: user.id
    },
  });

  await prisma.fund.create({
    data: {
      name: "Advent International GPE X",
      type: "Private Equity",
      totalFund: 200000000,
      unallocated: 44600000,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
      status: "ongoing",
      userId: user.id
    },
  });

  await prisma.fund.create({
    data: {
      name: "Insight Partners XII",
      type: "Growth Equity",
      totalFund: 250000000,
      unallocated: 44600000,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
      status: "closed",
      userId: user.id
    },
  });

  await prisma.fund.create({
    data: {
      name: "Brookfield Strategic Real Estate Partners VI",
      type: "Real Estate private Equity",
      totalFund: 200000000,
      unallocated: 44600000,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
      status: "closed",
      userId: user.id
    },
  });

  await prisma.fund.create({
    data: {
      name: "Advent International",
      type: "Private Equity",
      totalFund: 200000000,
      unallocated: 44600000,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Advent_International_logo.svg/1200px-Advent_International_logo.svg.png",
      status: "closed",
      userId: user.id
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });