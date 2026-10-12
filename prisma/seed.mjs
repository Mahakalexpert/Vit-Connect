import { PrismaClient, Role, UserStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const cseDepartment = await prisma.department.upsert({
    where: { name: "Computer Science and Engineering" },
    update: {},
    create: { name: "Computer Science and Engineering" },
  });

  const cseProgram = await prisma.program.upsert({
    where: { code: "BTECH-CSE" },
    update: {},
    create: {
      code: "BTECH-CSE",
      name: "B.Tech Computer Science and Engineering",
      departmentId: cseDepartment.id,
    },
  });

  const introCourse = await prisma.course.upsert({
    where: {
      departmentId_code: {
        departmentId: cseDepartment.id,
        code: "CS101",
      },
    },
    update: {},
    create: {
      code: "CS101",
      title: "Introduction to Computing",
      departmentId: cseDepartment.id,
      programId: cseProgram.id,
    },
  });

  const student = await prisma.user.upsert({
    where: { email: "student.prototype@vit.edu" },
    update: {},
    create: {
      email: "student.prototype@vit.edu",
      displayName: "Prototype Student",
      status: UserStatus.ACTIVE,
    },
  });

  const moderator = await prisma.user.upsert({
    where: { email: "moderator.prototype@vit.edu" },
    update: {},
    create: {
      email: "moderator.prototype@vit.edu",
      displayName: "Prototype Moderator",
      status: UserStatus.ACTIVE,
    },
  });

  await prisma.roleAssignment.upsert({
    where: {
      userId_role_scope: {
        userId: student.id,
        role: Role.STUDENT,
        scope: "campus",
      },
    },
    update: {},
    create: {
      userId: student.id,
      role: Role.STUDENT,
      scope: "campus",
    },
  });

  await prisma.roleAssignment.upsert({
    where: {
      userId_role_scope: {
        userId: moderator.id,
        role: Role.MODERATOR,
        scope: "campus",
      },
    },
    update: {},
    create: {
      userId: moderator.id,
      role: Role.MODERATOR,
      scope: "campus",
    },
  });

  await prisma.announcement.upsert({
    where: { id: "seed-announcement-1" },
    update: {},
    create: {
      id: "seed-announcement-1",
      title: "Milestone 2 Seeded Notice",
      body: "Initial seeded record to validate Prisma wiring and table relationships.",
      isPublished: false,
      authorId: moderator.id,
    },
  });

  await prisma.forumThread.upsert({
    where: { id: "seed-thread-1" },
    update: {},
    create: {
      id: "seed-thread-1",
      title: "Welcome to prototype forums",
      body: "This seed thread exists to validate baseline forum persistence boundaries.",
      authorId: moderator.id,
      posts: {
        create: {
          id: "seed-post-1",
          body: `Sample reply for ${introCourse.code}.`,
          authorId: student.id,
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Seed failed:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
