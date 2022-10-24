/*
  Warnings:

  - You are about to drop the column `customerId` on the `userPassword` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userPassword" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userListId" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "passwordSalt" TEXT NOT NULL,
    CONSTRAINT "userPassword_userListId_fkey" FOREIGN KEY ("userListId") REFERENCES "userList" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_userPassword" ("id", "password", "passwordSalt", "userListId") SELECT "id", "password", "passwordSalt", "userListId" FROM "userPassword";
DROP TABLE "userPassword";
ALTER TABLE "new_userPassword" RENAME TO "userPassword";
CREATE UNIQUE INDEX "userPassword_userListId_key" ON "userPassword"("userListId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
