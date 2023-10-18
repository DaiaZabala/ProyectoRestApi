-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2023 a las 22:53:01
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest-apilibreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--
-- Creación: 18-10-2023 a las 04:03:44
-- Última actualización: 18-10-2023 a las 20:33:18
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `aNopublicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `aNopublicacion`, `ISBN`) VALUES
(1, 'Don Quijote', 'Miguel Cervanters', 'Clasico', '1997-05-10', '12323993111'),
(2, 'HP y el cáliz de fuego', 'J.K. Rowling', 'Fantasia', '2005-07-10', '11-1123-399.3'),
(3, 'Pocahontas', 'Susan Donels', 'Infantil', '1995-01-01', '9789963481927'),
(4, 'El tunel', 'Ernesto Sabato', 'Novela', '1948-01-01', '9789875801530'),
(5, 'Los hijos de los dias', 'Eduardo Galeano', 'Ficcion', '2012-04-09', '978-987-801-1'),
(6, 'El principito', 'Antoine de Saint-Exupéry', 'Literatura infantil', '1943-04-06', '9789876747998'),
(7, 'HP y el prisionero de azkaban', 'J.K. Rowling', 'Fantasia', '1999-07-08', '9788478885190');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
