/*
  Warnings:

  - You are about to drop the column `approachIntro` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the column `calloutButtonHref` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the column `calloutButtonLabel` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the column `calloutHeading` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the column `calloutText` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the column `challenge` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the column `keyResults` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the column `outcome` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the column `situationClosing` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the column `situationParagraphs` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the column `situationQuestions` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `casestudy` table. All the data in the column will be lost.
  - You are about to drop the `approachcard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `relatedservice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tarabutproblemsolution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `timelinephase` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `heroTags` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `impactNote` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problemIntro` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problemPoints` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problemTitleAccent` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problemTitleLead` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solutionIntro` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solutionPoints` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solutionTitleAccent` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solutionTitleLead` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summaryHeadingAccent` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summaryHeadingLead` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summaryIntro` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `approachcard` DROP FOREIGN KEY `ApproachCard_caseStudyId_fkey`;

-- DropForeignKey
ALTER TABLE `relatedservice` DROP FOREIGN KEY `RelatedService_caseStudyId_fkey`;

-- DropForeignKey
ALTER TABLE `timelinephase` DROP FOREIGN KEY `TimelinePhase_caseStudyId_fkey`;

-- AlterTable
ALTER TABLE `casestudy` DROP COLUMN `approachIntro`,
    DROP COLUMN `calloutButtonHref`,
    DROP COLUMN `calloutButtonLabel`,
    DROP COLUMN `calloutHeading`,
    DROP COLUMN `calloutText`,
    DROP COLUMN `challenge`,
    DROP COLUMN `keyResults`,
    DROP COLUMN `outcome`,
    DROP COLUMN `situationClosing`,
    DROP COLUMN `situationParagraphs`,
    DROP COLUMN `situationQuestions`,
    DROP COLUMN `summary`,
    ADD COLUMN `heroTags` TEXT NOT NULL,
    ADD COLUMN `impactNote` TEXT NOT NULL,
    ADD COLUMN `liveSiteUrl` VARCHAR(191) NULL,
    ADD COLUMN `logoImage` VARCHAR(191) NULL,
    ADD COLUMN `problemIntro` TEXT NOT NULL,
    ADD COLUMN `problemPoints` TEXT NOT NULL,
    ADD COLUMN `problemTitleAccent` VARCHAR(191) NOT NULL,
    ADD COLUMN `problemTitleLead` VARCHAR(191) NOT NULL,
    ADD COLUMN `solutionIntro` TEXT NOT NULL,
    ADD COLUMN `solutionPoints` TEXT NOT NULL,
    ADD COLUMN `solutionTitleAccent` VARCHAR(191) NOT NULL,
    ADD COLUMN `solutionTitleLead` VARCHAR(191) NOT NULL,
    ADD COLUMN `summaryHeadingAccent` VARCHAR(191) NOT NULL,
    ADD COLUMN `summaryHeadingLead` VARCHAR(191) NOT NULL,
    ADD COLUMN `summaryIntro` TEXT NOT NULL;

-- DropTable
DROP TABLE `approachcard`;

-- DropTable
DROP TABLE `relatedservice`;

-- DropTable
DROP TABLE `tarabutproblemsolution`;

-- DropTable
DROP TABLE `timelinephase`;

-- CreateTable
CREATE TABLE `CaseStudyHeroStat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `icon` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `caseStudyId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CaseStudyImpactRow` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `icon` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `before` VARCHAR(191) NOT NULL,
    `after` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `caseStudyId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CaseStudyHeroStat` ADD CONSTRAINT `CaseStudyHeroStat_caseStudyId_fkey` FOREIGN KEY (`caseStudyId`) REFERENCES `CaseStudy`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaseStudyImpactRow` ADD CONSTRAINT `CaseStudyImpactRow_caseStudyId_fkey` FOREIGN KEY (`caseStudyId`) REFERENCES `CaseStudy`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
