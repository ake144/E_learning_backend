const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Create a global variable to hold the Prisma instance
let prisma;

if (process.env.NODE_ENV !== 'production') {
  // In development mode, use a global variable to avoid creating multiple Prisma instances
  if (!global.prismaGlobal) {
    global.prismaGlobal = prismaClientSingleton();
  }
  prisma = global.prismaGlobal;
} else {
  // In production mode, create a new PrismaClient instance
  prisma = prismaClientSingleton();
}

module.exports = prisma;