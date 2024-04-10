-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 10, 2024 at 10:43 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musicplayer`
--

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
CREATE TABLE IF NOT EXISTS `songs` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `albumname` varchar(50) NOT NULL,
  `albumpicture` varchar(50) NOT NULL,
  `filename` varchar(25) NOT NULL,
  `toptracks` varchar(30) NOT NULL,
  `artist` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`id`, `albumname`, `albumpicture`, `filename`, `toptracks`, `artist`) VALUES
(1, 'Dangerously in Love', 'images/dangerouslove.jpg', 'crazyinlove.mp3', 'Crazy In Love', 'Beyonce'),
(2, 'I am...Sasha Fierce', 'images/single_ladies.jpg', 'singleladies.mp3', 'Single Ladies(Put a Ring on It', 'Beyonce'),
(3, 'B\'day', 'images/b-day.jpg', 'irreplaceable.mp3', 'Irreplaceable', 'Beyonce'),
(4, 'crazy in love-Single', 'images/dangerousluv.jpeg', 'crazyinlove-ft-jayz.mp3', 'Crazy In Love (feat. Jay-Z)', 'Beyonce'),
(5, 'I am...Sasha Fierce', 'images/if_i_was_a_boy.jpg', 'ifiwasaboy.mp3', 'If I Were a Boy', 'Beyonce'),
(6, 'I am...Sasha Fierce', 'images/sweet_dreams.jpeg', 'sweetdreams.mp3', 'Sweet Dreams', 'Beyonce'),
(7, '4', 'images/love_on_top.jpeg', 'loveontop.mp3', 'Love on Top', 'Beyonce'),
(8, 'I am...Sasha Fierce', 'images/halo.jpg', 'halo.mp3', 'Halo', 'Beyonce'),
(9, 'Renaissance', 'images/renaissance.jpeg', 'cuffit.mp3', 'CUFF IT', 'Beyonce'),
(10, '4', 'images/run_the_world.jpg', 'runtheworld.mp3', 'Run the World', 'Beyonce');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
