-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2016 at 04:58 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `advertising`
--

-- --------------------------------------------------------

--
-- Table structure for table `halooglasi`
--

CREATE TABLE `halooglasi` (
  `ids` int(15) NOT NULL,
  `type` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nacinkupovine` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `websitename` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `domain` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `naslov` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `drzava` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `grad` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `opstina` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mesto` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ulica` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cena` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `halooglasi`
--

INSERT INTO `halooglasi` (`ids`, `type`, `nacinkupovine`, `websitename`, `domain`, `img`, `naslov`, `drzava`, `grad`, `opstina`, `mesto`, `ulica`, `text`, `cena`, `id`) VALUES
(1, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Novi Beograd - Belville ID#18665', NULL, 'Beograd ', 'Opština Novi Beograd ', 'Blok 67 (Belvil) ', 'Jurija Gagarina ', NULL, '1.000', '5425484139624'),
(2, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Centar - Vuk ID#18588', NULL, 'Beograd ', 'Opština Zvezdara ', 'Vukov Spomenik ', 'Ivankovačka ', NULL, '450', '5425482231380'),
(3, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Novi Beograd - West 65 ID#18662', NULL, 'Beograd ', 'Opština Novi Beograd ', 'Blok 65 ', 'Omladinskih brigada ', NULL, '450', '5425484139600'),
(4, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Centar - Stari Grad ID#18817', NULL, 'Beograd ', 'Opština Stari grad ', 'Centar ', 'Braće Jugovića ', NULL, '450', '5425484545839'),
(5, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Novi Beograd - Arena Blok 29 ID#15798', NULL, 'Beograd ', 'Opština Novi Beograd ', 'Blok 29 ', 'Bulevar Arsenija Čarnojevića ', NULL, '1.500', '5425484139597'),
(6, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'A BLOK-4.0 stan sa dve garaze-IZDAJE SE.', NULL, 'Beograd ', 'Opština Novi Beograd ', 'Blok 67a (A blok) ', 'Urosa Martinovica ', NULL, '1.100', '5425484202273'),
(7, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Novi Beograd - Blok 64 ID#18814', NULL, 'Beograd ', 'Opština Novi Beograd ', 'Blok 64 ', 'Zemunska ', NULL, '650', '5425484545836'),
(8, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Novi Beograd - Blok 45 Cetvorospratnica ', NULL, 'Beograd ', 'Opština Novi Beograd ', 'Blok 45 (TC Enjub) ', 'Nehruova ', NULL, '300', '5425484545835'),
(9, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'SUPER PONUDA! Nov stan na Lekinom brdu', NULL, 'Beograd ', 'Opština Voždovac ', 'Lekino brdo ', 'Veljka Milicevica ', NULL, '300', '5425438921949'),
(10, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Odličan, renoviran dvosoban stan! SUPER ', NULL, 'Beograd ', 'Opština Stari grad ', 'Dorćol ', 'Visokog Stevana ', NULL, '350', '5425484141533'),
(11, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Dedinje, lux, dupleks, garaža, ID 7836', NULL, 'Beograd ', 'Opština Savski venac ', 'Dedinje ', 'Slavka Ćuruvije ', NULL, '1.000', '5425482235821'),
(12, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Fontana, renoviran, odličan, ID 6903', NULL, 'Beograd ', 'Opština Novi Beograd ', 'Fontana ', 'Narodnih heroja ', NULL, '400', '5425484206077'),
(13, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Skupština, lux, renoviran, garaža, može ', NULL, 'Beograd ', 'Opština Stari grad ', 'Skupština ', 'Majke Jevrosime ', NULL, '1.200', '5425482233297'),
(14, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'NOV 3.0 stan sa garazom', NULL, 'Beograd ', 'Opština Vračar ', 'Kalenić pijaca ', 'Prote Mateje ', NULL, '850', '5425484139405'),
(15, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Moderan 4.0 stan kod Kalenic pijace', NULL, 'Beograd ', 'Opština Vračar ', 'Kalenić pijaca ', 'Sindjeliceva ', NULL, '500', '5425484548195'),
(16, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Nebojsina,NOV stan,moguc dogovor oko cen', NULL, 'Beograd ', 'Opština Vračar ', 'Hram svetog Save ', 'Nebojsina ', NULL, '450', '5425484203747'),
(17, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Novogradnja,3.0 moderan stan sa garazom ', NULL, 'Beograd ', 'Opština Novi Beograd ', 'Blok 22 ', 'Antifasisticke borbe ', NULL, '600', '5425484548032'),
(18, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Tasmajdan,3.0 LUX stan', NULL, 'Beograd ', 'Opština Palilula ', 'Tašmajdan ', 'Dalmatinska ', NULL, '400', '5425479057542'),
(19, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Odlicna prilika 3.0 stan Konjarnik izdav', NULL, 'Beograd ', 'Opština Voždovac ', 'Konjarnik ', 'Teodosijeva, ispod okretnice 17,19,31 ', NULL, '200', '3768418'),
(20, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Moderan dvosoban stan sa garažom', NULL, 'Beograd ', 'Opština Novi Beograd ', 'Blok 67 (Belvil) ', '', NULL, '550', '5425484549942'),
(21, 'apartment', 'izdavanje', 'halooglasi', NULL, NULL, 'Novi Beograd - Belville ID#18823', NULL, 'Beograd ', 'Opština Novi Beograd ', 'Blok 67 (Belvil) ', 'Đorđa Stanojevića ', NULL, '300', '5425484139624');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `timestamp`) VALUES
(2, '', 'kristiano9611@gmail.com', '123', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `halooglasi`
--
ALTER TABLE `halooglasi`
  ADD PRIMARY KEY (`ids`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `halooglasi`
--
ALTER TABLE `halooglasi`
  MODIFY `ids` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
