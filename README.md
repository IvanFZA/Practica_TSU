# 📝 Administrador de Notas - Práctica Técnica TSU

Este es un proyecto de práctica técnica que implementa una **aplicación web con frontend y backend** para la gestión de notas. La aplicación permite **crear, visualizar, editar y eliminar notas** mediante una interfaz sencilla y una REST API en PHP.

---

## 🚀 Funcionalidades

- ✅ Crear nuevas notas con título y contenido.
- ✅ Ver una lista de todas las notas registradas.
- ✅ Editar una nota existente.
- ✅ Eliminar una nota.
- ✅ Validación para evitar títulos duplicados.
- ✅ Respuesta en formato JSON desde la API.

---

## 🛠️ Tecnologías utilizadas

- **Frontend**: HTML, CSS, JavaScript (JS puro)
- **Backend**: PHP (REST API)
- **Base de datos**: MySQL
- **Estilo**: CSS personalizado + modales simples

---

## 📁 Estructura del proyecto
Practica_TSU/
│
├── index.html                     # Página principal con la tabla y formularios
│
├── db/                            #Base de datos
│   ├── README.md                  # Descripción de como crear la base de datos
│   └── notas_backup.sql           # Script SQL para crear la base de datos y tabla 'notas'
│
├── CSS/                           # Hojas de estilo para la interfaz
│   ├── index.css                  # Estilo general de la página
│   └── modal.css                  # Estilos para los formularios modales
│
├── JS/                            # Scripts de lógica del lado del cliente
│   ├── agregar_notas.js           # Función para agregar nuevas notas
│   ├── cargar_notas.js            # Función para cargar todas las notas y mostrarlas
│   ├── editar_nota.js             # Función para editar una nota existente
│   └── eliminar_notas.js          # Función para eliminar una nota por ID
│
├── PHP/                           # Código de conexión al servidor y base de datos
│   └── conexion.php               # Archivo de conexión MySQL
│
└── api/                           # API RESTful
    └── notes/
        └── index.php              # Endpoints de la API (GET, POST, PUT, DELETE)


---

## ⚙️ Requisitos para ejecutar

- Servidor local como **XAMPP**, **WAMP** o similar.
- PHP 7.x o superior.
- MySQL.
- Navegador moderno (Chrome, Firefox, Edge, etc.).

---

## 🧩 Instalación

1. Clona o descarga este repositorio.
2. Coloca el proyecto dentro de la carpeta `htdocs` de XAMPP (o en tu servidor local).
3. Asegúrate de iniciar Apache y MySQL desde XAMPP.

---

## 🗃 Restaurar la base de datos

1. Crea una base de datos en phpMyAdmin (ej. `notas`).
2. Importa el archivo `notas_backup.sql` incluido en el proyecto.
3. Verifica que se haya creado la tabla `notas`.

---

## 📬 Contacto

> Proyecto realizado como parte de la **Práctica Técnica TSU en Programación**.  
> Autor: Zenil Aparicio Ivan Francisco  
> Año: 2025
