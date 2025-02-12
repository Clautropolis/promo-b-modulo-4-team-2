-- MySQL Script generated by MySQL Workbench
-- Wed Feb 12 13:01:16 2025
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema freedb_firstProject2025
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema freedb_firstProject2025
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `freedb_firstProject2025` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`movies` (
  `idMovies` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `year` INT NOT NULL,
  PRIMARY KEY (`idMovies`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`actors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`actors` (
  `idActors` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `birthday` DATE NULL,
  PRIMARY KEY (`idActors`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `plan_details` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`movies_actors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`movies_actors` (
  `fk_movies` INT NOT NULL,
  `fk_actors` INT NOT NULL,
  `id_movies_actors` VARCHAR(45) NOT NULL,
  INDEX `fk_movies_has_actors_actors1_idx` (`fk_actors` ASC) VISIBLE,
  INDEX `fk_movies_has_actors_movies_idx` (`fk_movies` ASC) VISIBLE,
  PRIMARY KEY (`id_movies_actors`),
  CONSTRAINT `fk_movies_has_actors_movies`
    FOREIGN KEY (`fk_movies`)
    REFERENCES `mydb`.`movies` (`idMovies`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movies_has_actors_actors1`
    FOREIGN KEY (`fk_actors`)
    REFERENCES `mydb`.`actors` (`idActors`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`favorite_movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`favorite_movies` (
  `fk_movies` INT NOT NULL,
  `fk_users` INT NOT NULL,
  `id_favorite_movies` VARCHAR(45) NOT NULL,
  INDEX `fk_movies_has_users_users1_idx` (`fk_users` ASC) VISIBLE,
  INDEX `fk_movies_has_users_movies1_idx` (`fk_movies` ASC) VISIBLE,
  PRIMARY KEY (`id_favorite_movies`),
  CONSTRAINT `fk_movies_has_users_movies1`
    FOREIGN KEY (`fk_movies`)
    REFERENCES `mydb`.`movies` (`idMovies`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_movies_has_users_users1`
    FOREIGN KEY (`fk_users`)
    REFERENCES `mydb`.`users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `freedb_firstProject2025` ;

-- -----------------------------------------------------
-- Table `freedb_firstProject2025`.`Authors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `freedb_firstProject2025`.`Authors` (
  `idAuthor` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `job` VARCHAR(45) NOT NULL,
  `photo` TEXT NOT NULL,
  PRIMARY KEY (`idAuthor`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `freedb_firstProject2025`.`Projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `freedb_firstProject2025`.`Projects` (
  `idProject` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `slogan` VARCHAR(200) NOT NULL,
  `repo` TEXT NOT NULL,
  `demo` TEXT NOT NULL,
  `technologies` VARCHAR(500) NOT NULL,
  `description` TEXT NOT NULL,
  `image` TEXT NOT NULL,
  `fk_authors` INT NOT NULL,
  PRIMARY KEY (`idProject`),
  INDEX `fk_Projects_Authors_idx` (`fk_authors` ASC) VISIBLE,
  CONSTRAINT `fk_Projects_Authors`
    FOREIGN KEY (`fk_authors`)
    REFERENCES `freedb_firstProject2025`.`Authors` (`idAuthor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
