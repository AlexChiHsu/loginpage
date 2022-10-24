-- CreateTable
CREATE TABLE "userPassword" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userListId" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "passwordSalt" TEXT NOT NULL,
    CONSTRAINT "userPassword_userListId_fkey" FOREIGN KEY ("userListId") REFERENCES "userList" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "userPassword_userListId_key" ON "userPassword"("userListId");
