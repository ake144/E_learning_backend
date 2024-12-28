/*
  Warnings:

  - The `trending` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `image_url` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `short_video_url` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "image_url" TEXT NOT NULL,
ADD COLUMN     "short_video_url" TEXT NOT NULL,
DROP COLUMN "trending",
ADD COLUMN     "trending" INTEGER DEFAULT 0;
