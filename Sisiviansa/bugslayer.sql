-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2023 a las 02:23:56
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bugslayer`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `ID_CLIENTE` int(10) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `CALLE` varchar(20) NOT NULL,
  `N_PUERTA` int(10) NOT NULL,
  `ESQUINA` varchar(50) NOT NULL,
  `BARRIO` varchar(20) NOT NULL,
  `CLAVE` varchar(20) NOT NULL,
  `AUTORIZADO` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`ID_CLIENTE`, `EMAIL`, `CALLE`, `N_PUERTA`, `ESQUINA`, `BARRIO`, `CLAVE`, `AUTORIZADO`) VALUES
(0, 'lucasantiago1212@gmail.com', 'Pernambuco', 2312, 'Cibils', 'Cerro', 'df', 'true'),
(1, 'bugslayer@gmail.com', 'Durazno', 234, 'Ejido', 'Centro', '12345', 'true'),
(2, 'gero1111@gmail.com', 'General Bragas', 981, 'Mini', 'Aguada', '12345', 'true'),
(3, 'ania@gmail.com', 'Seibos', 324, 'Nosabe', 'Montegrande', '555', 'true'),
(4, 'juanmotor@gmail.com', 'castro', 33, 'boli', 'pedro', 'juan', 'false');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente_empresa`
--

CREATE TABLE `cliente_empresa` (
  `ID_CLIENTE` int(11) NOT NULL,
  `RUT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cliente_empresa`
--

INSERT INTO `cliente_empresa` (`ID_CLIENTE`, `RUT`) VALUES
(1, 1111),
(4, 343455);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente_telefono`
--

CREATE TABLE `cliente_telefono` (
  `ID_CLIENTE` int(11) NOT NULL,
  `TELEFONO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cliente_telefono`
--

INSERT INTO `cliente_telefono` (`ID_CLIENTE`, `TELEFONO`) VALUES
(0, 95548589),
(1, 95734278),
(2, 957771111),
(3, 23648744),
(4, 34662234);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente_web`
--

CREATE TABLE `cliente_web` (
  `ID_CLIENTE` int(11) NOT NULL,
  `CEDULA_IDENTIDAD_CLIENTE` int(11) NOT NULL,
  `PRIMER_NOMBRE` varchar(20) NOT NULL,
  `PRIMER_APELLIDO` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cliente_web`
--

INSERT INTO `cliente_web` (`ID_CLIENTE`, `CEDULA_IDENTIDAD_CLIENTE`, `PRIMER_NOMBRE`, `PRIMER_APELLIDO`) VALUES
(0, 55401289, 'Santiago', 'Antunez'),
(2, 53715442, 'Geronimo', 'Cespedes'),
(3, 43543543, 'ppsPITO', 'Antunez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dieta`
--

CREATE TABLE `dieta` (
  `ID_DIETA` int(11) NOT NULL,
  `TIPO` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_menu`
--

CREATE TABLE `estado_menu` (
  `ID_ESTADO` int(11) NOT NULL,
  `ESTADO` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_pedido`
--

CREATE TABLE `estado_pedido` (
  `ID_ESTADO` int(11) NOT NULL,
  `ESTADO` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `llama`
--

CREATE TABLE `llama` (
  `ID_CLIENTE` int(11) NOT NULL,
  `ID_SUCURSAL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `ID_MENU` int(11) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `TIEMPO_DE_ELABORACION` varchar(20) NOT NULL,
  `TIPO_DE_MENU` varchar(20) NOT NULL,
  `PRECIO` int(11) NOT NULL,
  `STOCK_MIN` int(11) NOT NULL,
  `STOCK_MAX` int(11) NOT NULL,
  `STOCK_REAL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`ID_MENU`, `NOMBRE`, `TIEMPO_DE_ELABORACION`, `TIPO_DE_MENU`, `PRECIO`, `STOCK_MIN`, `STOCK_MAX`, `STOCK_REAL`) VALUES
(0, 'empanada', '10', 'Celiacos', 20, 5, 50, 40),
(1, 'empanada', '10', 'Vegano', 20, 5, 50, 30),
(2, 'morcilla', '10', 'Vegetariana', 20, 5, 50, 30),
(3, 'remolacha', '10', 'Ovovegetariana', 20, 5, 50, 30),
(4, 'baca', '10', 'Ovolacteovegetariana', 20, 5, 50, 30),
(6, 'papa', '5', 'Celiacos', 30, 5, 50, 30);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pasa_menu`
--

CREATE TABLE `pasa_menu` (
  `ID_ESTADO` int(11) NOT NULL,
  `ID_MENU` int(11) NOT NULL,
  `FECHA_INICIAL` date NOT NULL,
  `FECHA_FINAL` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pasa_pédido`
--

CREATE TABLE `pasa_pédido` (
  `ID_PEDIDO` int(11) NOT NULL,
  `ID_ESTADO` int(11) NOT NULL,
  `FECHA_INICIO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `ID_PEDIDO` int(11) NOT NULL,
  `AUTORIZADO` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`ID_PEDIDO`, `AUTORIZADO`) VALUES
(1, 'true'),
(2, 'true'),
(3, 'true'),
(4, 'true'),
(5, 'true'),
(6, 'true'),
(7, 'true'),
(8, 'false');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pertenece`
--

CREATE TABLE `pertenece` (
  `ID_VIANDA` int(11) NOT NULL,
  `ID_DIETA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `realiza`
--

CREATE TABLE `realiza` (
  `ID_PEDIDO` int(11) NOT NULL,
  `ID_CLIENTE` int(11) NOT NULL,
  `ID_MENU` int(11) NOT NULL,
  `FECHA` date NOT NULL,
  `VALOR` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `realiza`
--

INSERT INTO `realiza` (`ID_PEDIDO`, `ID_CLIENTE`, `ID_MENU`, `FECHA`, `VALOR`) VALUES
(1, 0, 4, '2023-11-13', 20),
(2, 0, 1, '2023-11-13', 20),
(3, 1, 3, '2023-11-14', 20),
(4, 0, 0, '2023-11-14', 20),
(5, 0, 0, '2023-11-14', 20),
(6, 0, 0, '2023-11-14', 20),
(7, 0, 0, '2023-11-14', 20),
(8, 0, 6, '2023-11-14', 30);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE `sucursal` (
  `ID_SUCURSAL` int(11) NOT NULL,
  `ZONA` varchar(20) NOT NULL,
  `CANTIDAD_COCINAS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiene`
--

CREATE TABLE `tiene` (
  `ID_VIANDA` int(11) NOT NULL,
  `ID_MENU` int(11) NOT NULL,
  `ID_PEDIDO` int(11) NOT NULL,
  `NUMERO_CAJA` int(11) NOT NULL,
  `FECHA_ENVASADO` date NOT NULL,
  `FECHA_VENCIMIENTO` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `CI_USUARIO` int(11) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `CONTRASENIA` varchar(12) NOT NULL,
  `ROL` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`CI_USUARIO`, `EMAIL`, `CONTRASENIA`, `ROL`) VALUES
(11111111, 'gerente@gmail.com', 'gerente', 'gerente'),
(53325652, 'admin@gmail.com', 'admin', 'administrador'),
(57437853, 'chef@gmail.com', 'chef', 'chef'),
(75349857, 'sd@gmail.com', '', 'administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vianda`
--

CREATE TABLE `vianda` (
  `ID_VIANDA` int(11) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`ID_CLIENTE`);

--
-- Indices de la tabla `cliente_empresa`
--
ALTER TABLE `cliente_empresa`
  ADD PRIMARY KEY (`ID_CLIENTE`);

--
-- Indices de la tabla `cliente_telefono`
--
ALTER TABLE `cliente_telefono`
  ADD PRIMARY KEY (`ID_CLIENTE`);

--
-- Indices de la tabla `cliente_web`
--
ALTER TABLE `cliente_web`
  ADD PRIMARY KEY (`ID_CLIENTE`);

--
-- Indices de la tabla `dieta`
--
ALTER TABLE `dieta`
  ADD PRIMARY KEY (`ID_DIETA`);

--
-- Indices de la tabla `estado_menu`
--
ALTER TABLE `estado_menu`
  ADD PRIMARY KEY (`ID_ESTADO`);

--
-- Indices de la tabla `estado_pedido`
--
ALTER TABLE `estado_pedido`
  ADD PRIMARY KEY (`ID_ESTADO`);

--
-- Indices de la tabla `llama`
--
ALTER TABLE `llama`
  ADD PRIMARY KEY (`ID_CLIENTE`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`ID_MENU`);

--
-- Indices de la tabla `pasa_menu`
--
ALTER TABLE `pasa_menu`
  ADD PRIMARY KEY (`ID_ESTADO`,`ID_MENU`),
  ADD KEY `fk_pasa_menu_menu` (`ID_MENU`);

--
-- Indices de la tabla `pasa_pédido`
--
ALTER TABLE `pasa_pédido`
  ADD PRIMARY KEY (`ID_PEDIDO`,`ID_ESTADO`,`FECHA_INICIO`),
  ADD KEY `fk_pasa_pedido_estado` (`ID_ESTADO`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`ID_PEDIDO`);

--
-- Indices de la tabla `pertenece`
--
ALTER TABLE `pertenece`
  ADD PRIMARY KEY (`ID_VIANDA`,`ID_DIETA`),
  ADD KEY `fk_pertenece_dieta` (`ID_DIETA`);

--
-- Indices de la tabla `realiza`
--
ALTER TABLE `realiza`
  ADD PRIMARY KEY (`ID_PEDIDO`,`ID_CLIENTE`),
  ADD KEY `fk_realiza_cliente` (`ID_CLIENTE`),
  ADD KEY `fk_realiza_menu` (`ID_MENU`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`ID_SUCURSAL`);

--
-- Indices de la tabla `tiene`
--
ALTER TABLE `tiene`
  ADD PRIMARY KEY (`ID_VIANDA`,`ID_MENU`,`ID_PEDIDO`),
  ADD KEY `fk_tiene_menu` (`ID_MENU`),
  ADD KEY `fk_tiene_pedido` (`ID_PEDIDO`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`CI_USUARIO`);

--
-- Indices de la tabla `vianda`
--
ALTER TABLE `vianda`
  ADD PRIMARY KEY (`ID_VIANDA`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cliente_empresa`
--
ALTER TABLE `cliente_empresa`
  ADD CONSTRAINT `fk_cliente_empresa` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`);

--
-- Filtros para la tabla `cliente_telefono`
--
ALTER TABLE `cliente_telefono`
  ADD CONSTRAINT `fk_cliente_telefono` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`);

--
-- Filtros para la tabla `cliente_web`
--
ALTER TABLE `cliente_web`
  ADD CONSTRAINT `fk_cliente_web` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`);

--
-- Filtros para la tabla `llama`
--
ALTER TABLE `llama`
  ADD CONSTRAINT `fk_llama_cliente` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`);

--
-- Filtros para la tabla `pasa_menu`
--
ALTER TABLE `pasa_menu`
  ADD CONSTRAINT `fk_pasa_menu_estado` FOREIGN KEY (`ID_ESTADO`) REFERENCES `estado_menu` (`ID_ESTADO`),
  ADD CONSTRAINT `fk_pasa_menu_menu` FOREIGN KEY (`ID_MENU`) REFERENCES `menu` (`ID_MENU`);

--
-- Filtros para la tabla `pasa_pédido`
--
ALTER TABLE `pasa_pédido`
  ADD CONSTRAINT `fk_pasa_pedido_estado` FOREIGN KEY (`ID_ESTADO`) REFERENCES `estado_pedido` (`ID_ESTADO`),
  ADD CONSTRAINT `fk_pasa_pedido_pedido` FOREIGN KEY (`ID_PEDIDO`) REFERENCES `pedido` (`ID_PEDIDO`);

--
-- Filtros para la tabla `pertenece`
--
ALTER TABLE `pertenece`
  ADD CONSTRAINT `fk_pertenece_dieta` FOREIGN KEY (`ID_DIETA`) REFERENCES `dieta` (`ID_Dieta`),
  ADD CONSTRAINT `fk_pertenece_vianda` FOREIGN KEY (`ID_VIANDA`) REFERENCES `vianda` (`ID_Vianda`);

--
-- Filtros para la tabla `realiza`
--
ALTER TABLE `realiza`
  ADD CONSTRAINT `fk_cliente` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`),
  ADD CONSTRAINT `fk_realiza_cliente` FOREIGN KEY (`ID_CLIENTE`) REFERENCES `cliente` (`ID_CLIENTE`),
  ADD CONSTRAINT `fk_realiza_menu` FOREIGN KEY (`ID_MENU`) REFERENCES `menu` (`ID_MENU`),
  ADD CONSTRAINT `fk_realiza_pedido` FOREIGN KEY (`ID_PEDIDO`) REFERENCES `pedido` (`ID_PEDIDO`);

--
-- Filtros para la tabla `tiene`
--
ALTER TABLE `tiene`
  ADD CONSTRAINT `fk_tiene_menu` FOREIGN KEY (`ID_MENU`) REFERENCES `menu` (`ID_MENU`),
  ADD CONSTRAINT `fk_tiene_pedido` FOREIGN KEY (`ID_PEDIDO`) REFERENCES `pedido` (`ID_PEDIDO`),
  ADD CONSTRAINT `fk_tiene_vianda` FOREIGN KEY (`ID_VIANDA`) REFERENCES `vianda` (`ID_Vianda`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
