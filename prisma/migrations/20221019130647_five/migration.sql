/*
  Warnings:

  - You are about to drop the column `PasswordSalt` on the `userList` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `userList` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_userList" ("email", "id", "userName") SELECT "email", "id", "userName" FROM "userList";
DROP TABLE "userList";
ALTER TABLE "new_userList" RENAME TO "userList";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
