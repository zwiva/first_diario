-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_login
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_login
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_login` DEFAULT CHARACTER SET latin1 ;
USE `db_login` ;

-- -----------------------------------------------------
-- Table `db_login`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_login`.`User` (
  `rutUser` INT(11) NOT NULL ,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(90) NOT NULL,
  `perfil` VARCHAR(90) NOT NULL,
  PRIMARY KEY (`rutUser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



INSERT INTO `user`(`rutUser`, `username`, `password`, `perfil`) VALUES ('2','pamela','1234','Admin');
INSERT INTO `user`(`rutUser`, `username`, `password`, `perfil`) VALUES ('3','profesor','1234','Lector');