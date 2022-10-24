/*
  Warnings:

  - Added the required column `customerId` to the `userPassword` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userPassword" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerId" INTEGER NOT NULL,
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
