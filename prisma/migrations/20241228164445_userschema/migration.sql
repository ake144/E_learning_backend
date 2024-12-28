/*
  Warnings:

  - You are about to drop the column `Fname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Lname` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Fname",
DROP COLUMN "Lname",
ADD COLUMN     "fname" TEXT,
ADD COLUMN     "lname" TEXT;
