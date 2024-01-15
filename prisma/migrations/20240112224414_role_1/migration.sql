-- AlterTable
ALTER TABLE `User` MODIFY `roleId` INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `VerficationEmailUser` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerficationEmailClient` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `clientId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `VerficationEmailUser` ADD CONSTRAINT `VerficationEmailUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VerficationEmailClient` ADD CONSTRAINT `VerficationEmailClient_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `EnterpriseClient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
