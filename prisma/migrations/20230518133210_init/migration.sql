-- CreateTable
CREATE TABLE `Location` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `categoryTag` VARCHAR(191) NOT NULL,
    `locationTag` VARCHAR(191) NOT NULL,
    `photographer` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `content` TEXT NULL,
    `address` VARCHAR(191) NULL,
    `linkAddress` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `priceDescription` VARCHAR(191) NULL,
    `openingHours` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
