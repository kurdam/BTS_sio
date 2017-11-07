-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Mer 28 Septembre 2016 à 16:55
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `oracle`
--

-- --------------------------------------------------------

--
-- Structure de la table `dept`
--

CREATE TABLE `dept` (
  `DEPTNO` int(2) NOT NULL,
  `DNAME` varchar(10) DEFAULT NULL,
  `LOC` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `dept`
--

INSERT INTO `dept` (`DEPTNO`, `DNAME`, `LOC`) VALUES
(10, 'ACCOUNTING', 'NEW YORK'),
(20, 'RESEARCH', 'DALLAS'),
(30, 'SALES', 'CHICAGO'),
(40, 'OPERATIONS', 'BOSTON');

-- --------------------------------------------------------

--
-- Structure de la table `emp`
--

CREATE TABLE `emp` (
  `EMPNO` int(4) NOT NULL,
  `ENAME` varchar(6) DEFAULT NULL,
  `JOB` varchar(9) DEFAULT NULL,
  `MGR` int(4) DEFAULT NULL,
  `HIREDATE` date DEFAULT NULL,
  `SAL` decimal(6,2) DEFAULT NULL,
  `COMM` decimal(6,0) DEFAULT NULL,
  `DEPTNO` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `emp`
--

INSERT INTO `emp` (`EMPNO`, `ENAME`, `JOB`, `MGR`, `HIREDATE`, `SAL`, `COMM`, `DEPTNO`) VALUES
(7369, 'SMITH', 'CLERK', 7902, '1980-12-17', '920.00', NULL, 20),
(7499, 'ALLEN', 'SALESMAN', 7698, '1981-02-20', '1600.00', '300', 30),
(7521, 'WARD', 'SALESMAN', 7698, '1981-02-22', '1321.50', '500', 30),
(7566, 'JONES', 'MANAGER', 7839, '1981-04-02', '3123.75', NULL, 20),
(7654, 'MARTIN', 'SALESMAN', 7698, '1981-09-28', '1312.50', '1400', 30),
(7657, 'MASON', 'ANALYST', 7566, '1982-04-24', '3910.00', NULL, 20),
(7658, 'CHAN', 'ANALYST', 7566, '1982-05-03', '3450.00', NULL, 20),
(7659, 'FOX', 'ANALYST', 7566, '1980-02-03', '800.00', NULL, 10),
(7698, 'BLAKE', 'MANAGER', 7839, '1981-05-01', '2992.50', NULL, 30),
(7782, 'CLARK', 'MANAGER', 7839, '1981-06-09', '2572.50', NULL, 10),
(7788, 'SCOTT', 'ANALYST', 7566, '1986-11-10', '3795.00', NULL, 20),
(7839, 'KING', 'PRESIDENT', NULL, '1981-11-17', '5500.00', NULL, 10),
(7844, 'TURNER', 'SALESMAN', 7698, '1981-09-08', '1500.00', '0', 30),
(7876, 'ADAMS', 'CLERK', 7788, '1986-12-14', '1265.00', NULL, 20),
(7900, 'JAMES', 'CLERK', 7698, '1981-12-03', '950.00', NULL, 30),
(7902, 'FORD', 'ANALYST', 7566, '1981-12-03', '3450.00', NULL, 30),
(7934, 'MILLER', 'CLERK', 7782, '1982-01-23', '1300.00', NULL, 10),
(7954, 'CARTER', 'CLERK', 7698, '1982-04-07', '1000.00', NULL, 30),
(7955, 'WILSON', 'SALESMAN', NULL, '1987-02-03', '2000.00', '500', 30);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `dept`
--
ALTER TABLE `dept`
  ADD PRIMARY KEY (`DEPTNO`);

--
-- Index pour la table `emp`
--
ALTER TABLE `emp`
  ADD PRIMARY KEY (`EMPNO`),
  ADD KEY `DEPTNO` (`DEPTNO`),
  ADD KEY `MGR` (`MGR`);
  

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `emp`
--
ALTER TABLE `emp`
  ADD CONSTRAINT `contrainte1` FOREIGN KEY (`MGR`) REFERENCES `emp` (`EMPNO`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contrainte2` FOREIGN KEY (`DEPTNO`) REFERENCES `dept` (`DEPTNO`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
