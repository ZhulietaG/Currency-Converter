-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Време на генериране:  2 юни 2025 в 19:05
-- Версия на сървъра: 10.4.32-MariaDB
-- Версия на PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данни: `data`
--

-- --------------------------------------------------------

--
-- Структура на таблица `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Схема на данните от таблица `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `is_active`) VALUES
('77a389fb-3546-4436-8a54-631b847bf302', 'Daniela', 'daniela@gmail.com', 'daniela', 1),
('870a94f1-4c51-421d-b643-60620c468634', 'Zhulieta', 'zhulieta@gmail.com', 'zhulieta', 1),
('d6a87edb-6e6b-4b6a-a950-b202a80bc359', 'Radoslav', 'radoslav@gmail.com', 'radoslav', 1);

-- --------------------------------------------------------

--
-- Структура на таблица `wallets`
--

CREATE TABLE `wallets` (
  `id` varchar(255) NOT NULL,
  `amount` double NOT NULL,
  `currency` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Схема на данните от таблица `wallets`
--

INSERT INTO `wallets` (`id`, `amount`, `currency`, `user_id`) VALUES
('29a318f7-f6f8-463a-9fbe-fa2ce341dffb', 20, 'huf', 'd6a87edb-6e6b-4b6a-a950-b202a80bc359'),
('4de8db69-f0c0-403f-902a-6decc0a61a10', 200, 'cny', '870a94f1-4c51-421d-b643-60620c468634'),
('5ea2b194-a0cc-4e0a-8083-67fd03cd553c', 100, 'ngn', 'd6a87edb-6e6b-4b6a-a950-b202a80bc359'),
('a6074941-bd80-4bda-bf48-40155bf415d3', 600, 'pln', '77a389fb-3546-4436-8a54-631b847bf302'),
('bf09a53c-cf8e-4ba7-b6b6-a3f391875046', 150, 'gbp', '77a389fb-3546-4436-8a54-631b847bf302'),
('e9245822-ca0b-46e0-bb89-1bbbb79d268a', 400, 'dkk', 'd6a87edb-6e6b-4b6a-a950-b202a80bc359'),
('f2dd57ba-3196-4301-8eb0-0f50727c37f9', 350, 'bgn', '870a94f1-4c51-421d-b643-60620c468634');

--
-- Indexes for dumped tables
--

--
-- Индекси за таблица `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Индекси за таблица `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `user_id_2` (`user_id`);

--
-- Ограничения за дъмпнати таблици
--

--
-- Ограничения за таблица `wallets`
--
ALTER TABLE `wallets`
  ADD CONSTRAINT `wallets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
