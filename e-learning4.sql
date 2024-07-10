-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2024 at 08:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-learning`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `created_at`) VALUES
(1, 'Science and Technology', '0000-00-00 00:00:00'),
(2, 'Business and Management', '0000-00-00 00:00:00'),
(3, 'Arts and Humanities', '0000-00-00 00:00:00'),
(4, 'Health and Medicine:', '0000-00-00 00:00:00'),
(5, 'Mathematics and Statistics', '0000-00-00 00:00:00'),
(6, 'Social Sciences', '0000-00-00 00:00:00'),
(7, 'Engineering and Architecture', '0000-00-00 00:00:00'),
(8, 'Environmental Studies and Earth Sciences', '0000-00-00 00:00:00'),
(9, 'Information and Communication Technologies (ICT)', '0000-00-00 00:00:00'),
(10, 'Law and Criminal Justice', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `level` varchar(200) NOT NULL,
  `language` varchar(200) NOT NULL,
  `duration` int(11) NOT NULL,
  `trending` tinyint(4) DEFAULT 2,
  `price` double NOT NULL,
  `old_price` double DEFAULT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`content`)),
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `category_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `short_video_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `title`, `level`, `language`, `duration`, `trending`, `price`, `old_price`, `content`, `created_at`, `category_id`, `user_id`, `image_url`, `short_video_url`) VALUES
(10, 'Advanced web development', '8/28/2023', '8/5/2023', 5, 2, 21, 57, '{\"about\":\"Learn advanced web development techniques\",\"requirements\":[\"pc\",\"internet connection\"],\"targetAudience\":[\"developers\"],\"units\":[{\"title\":\"frontend development\",\"lessons\":[{\"title\":\"React basics\",\"duration\":\"1 hour\"}]},{\"title\":\"backend development\",\"lessons\":[{\"title\":\"Node.js introduction\",\"duration\":\"2 hours\"}]}]}', '0000-00-00 00:00:00', 3, 8, 'https://upload.wikimedia.org/wikipedia/commons/6/64/Coding_Shots_Annual_Plan_high_res-5.jpg', 'https://www.youtube.com/embed/HNBCVM4KbUM'),
(11, 'The AI Race  ', '2 ', 'english ', 10240000, NULL, 24, NULL, '{\"about\":\"the current cutting edge of technology\",\"requirements\":[\"pc\",\"tv\",\"wifi\"],\"targetAudience\":[\"african\",\"asian\",\"american\",\"\"],\"units\":[{\"title\":\"introduction  unit 1 \",\"lessons\":[{\"title\":\"basics  \",\"duration\":\"\"},{\"title\":\"advanced \",\"duration\":\"\"}]},{\"title\":\"u2\",\"lessons\":[{\"title\":\"l2\",\"duration\":\"\"}]}]}', '2024-07-05 16:52:55', 22, 1, 'https://upload.wikimedia.org/wikipedia/commons/6/64/Coding_Shots_Annual_Plan_high_res-5.jpg', 'https://www.youtube.com/embed/HNBCVM4KbUM'),
(12, 'Introduction to Programming', '4', 'english', 102400, NULL, 49, NULL, '{\"about\":\"basic to advanced concepts to introduce programming\",\"requirements\":[\"pc\",\"wifi\"],\"targetAudience\":[\"everyone\"],\r\n\r\n    \"units\":[{\"title\":\"intro to programming\",\"lessons\":[{\"title\":\"how web works\",\"duration\":\"5min\", \"videoUrl\": \"oHg5SJYRHA0\"}]},{\"title\":\"advanced concepts in programming\",\r\n    \"lessons\":[{\"title\":\"advanced of web\",\"duration\":\"5min\", \"videoUrl\": \"oHg5SJYRHA0\"},\r\n        {\"title\":\"advanced of web1\",\"duration\":\"5min\", \"videoUrl\": \"oHg5SJYRHA0\"},\r\n        {\"title\":\"advanced of web2\",\"duration\":\"5min\", \"videoUrl\": \"68ugkg9RePc\"},\r\n        {\"title\":\"advanced of web3\",\"duration\":\"5min\", \"videoUrl\": \"ZGqk178UIMY\"}\r\n    ]}]}', '2024-07-05 17:07:50', 1, 1, 'https://upload.wikimedia.org/wikipedia/commons/6/64/Coding_Shots_Annual_Plan_high_res-5.jpg', 'https://www.youtube.com/embed/HNBCVM4KbUM');

-- --------------------------------------------------------

--
-- Table structure for table `purchased`
--

CREATE TABLE `purchased` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchased`
--

INSERT INTO `purchased` (`id`, `user_id`, `course_id`, `date`) VALUES
(29, 14, 12, '2024-07-09 10:22:36');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `reviewer_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `value` int(11) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`id`, `course_id`, `reviewer_id`, `created_at`, `value`, `message`) VALUES
(1, 8, 8, '0000-00-00 00:00:00', 3, '-1'),
(2, 9, 1, '0000-00-00 00:00:00', 3, '-1'),
(3, 6, 5, '0000-00-00 00:00:00', 2, '-1'),
(4, 6, 6, '0000-00-00 00:00:00', 2, '-1'),
(5, 10, 1, '0000-00-00 00:00:00', 3, '-1'),
(6, 3, 2, '0000-00-00 00:00:00', 3, '-1'),
(7, 2, 9, '0000-00-00 00:00:00', 1, '-1'),
(8, 7, 1, '0000-00-00 00:00:00', 4, '-1'),
(9, 3, 8, '0000-00-00 00:00:00', 1, '-1'),
(10, 4, 3, '0000-00-00 00:00:00', 2, '-1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `type` varchar(200) NOT NULL DEFAULT 'client',
  `Fname` varchar(200) NOT NULL,
  `Lname` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `phone_number`, `email`, `password`, `created_at`, `type`, `Fname`, `Lname`) VALUES
(1, '886-165-9107', 'ngreenrod0@imdb.com', '$2a$10$iDV6b2X3q2KOeKOcn6o84uATNXmBMKWS8JaUg9Wm6K3YKGEbweyKa', '0000-00-00 00:00:00', 'client', 'abebe', 'fname1'),
(2, '736-690-1326', 'meacott1@chron.com', 'M', '0000-00-00 00:00:00', 'client', 'abebe2', 'fname2'),
(3, '609-207-9387', 'dmariault2@elpais.com', 'F', '0000-00-00 00:00:00', 'client', 'abebe3', 'fname3'),
(4, '291-662-3015', 'thorbart3@yellowpages.com', 'F', '0000-00-00 00:00:00', 'client', 'abebe4', 'fname4'),
(5, '571-752-9520', 'agoggey4@tuttocitta.it', 'M', '0000-00-00 00:00:00', 'client', 'abebe5', 'fname5'),
(6, '196-961-4372', 'fmaccook5@mediafire.com', 'M', '0000-00-00 00:00:00', 'client', 'abebe6', 'fname6'),
(7, '552-135-6570', 'cwoollin6@patch.com', 'F', '0000-00-00 00:00:00', 'client', 'abebe7', 'fname7'),
(8, '850-962-2965', 'bdeathe7@newsvine.com', 'M', '0000-00-00 00:00:00', 'client', 'abebe8', 'fname8'),
(9, '456-309-3659', 'cjouaneton8@marketwatch.com', 'M', '0000-00-00 00:00:00', 'client', 'abebe9', 'fname9'),
(10, '931-930-7980', 'apemble9@sourceforge.net', 'M', '0000-00-00 00:00:00', 'client', 'abebe10', 'fname10'),
(14, '0980808080', 'temesgentsegaye9891@gmail.com', '$2a$10$ly4q/ezHLygvyIIYoxLTsOwy2GEhmGqM7tJi.nVaVxMn9euou8F/y', '2024-07-07 15:15:50', 'client', 'Alemu', 'aBE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchased`
--
ALTER TABLE `purchased`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `purchased`
--
ALTER TABLE `purchased`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
