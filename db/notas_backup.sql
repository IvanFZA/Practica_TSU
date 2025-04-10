
-- Respaldo de tabla: notas
-- Base de datos: notas

DROP TABLE IF EXISTS `notas`;

CREATE TABLE `notas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL,
  `contenido` VARCHAR(255) DEFAULT NULL,
  `fecha` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `titulo_UNIQUE` (`titulo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inserción de ejemplo
INSERT INTO `notas` (`titulo`, `contenido`, `fecha`) VALUES
('Ejemplo de nota', 'Esta es una nota de prueba.', NOW());
