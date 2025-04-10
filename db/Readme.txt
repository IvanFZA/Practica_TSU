=======================================
  Restauración de la base de datos
=======================================

Este proyecto utiliza una base de datos llamada "notas" con una única tabla para gestionar notas simples.

Para restaurar la base de datos, sigue los siguientes pasos:

1. Abre tu herramienta de gestión de bases de datos (como phpMyAdmin o consola MySQL).

2. Crea una nueva base de datos, por ejemplo:

   CREATE DATABASE notas;

3. Selecciona la base de datos "notas".

4. Importa el archivo 'notas_backup.sql'.

   - En phpMyAdmin: ir a la pestaña "Importar" y subir el archivo.
   - En consola: usa el siguiente comando:

     mysql -u tu_usuario -p notas < notas_backup.sql

5. ¡Listo! La tabla "notas" estará disponible con una nota de ejemplo incluida.

=======================================
  Autor: Zenil Aparicio Ivan Francisco
  Proyecto: Práctica Técnica TSU
=======================================
