/*
  Warnings:

  - Made the column `user` on table `userCustom` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `userCustom` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "userCustom" ALTER COLUMN "user" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
