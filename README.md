# Proyecto Laravel + Vue 3 + TypeScript + Tailwind CSS

Este proyecto es una aplicación web que combina un backend desarrollado en Laravel y un frontend construido con Vue 3, TypeScript y Tailwind CSS. La aplicación permite a los usuarios registrarse, iniciar sesión y ver su perfil.

## Funcionalidades

- **Registro de usuarios**: Los usuarios pueden registrarse proporcionando su nombre, apellido, teléfono, correo electrónico y contraseña.
- **Inicio de sesión**: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña.
- **Perfil de usuario**: Una vez iniciada la sesión, los usuarios pueden ver su perfil con información personal.

## Requisitos

Para ejecutar este proyecto de manera local, necesitarás cumplir con los siguientes requisitos:

### Backend (Laravel)

1. **PHP**: Asegúrate de tener PHP 8.2 o superior instalado.
2. **Composer**: Necesitarás Composer para gestionar las dependencias de PHP.
3. **Base de datos**: Este proyecto usa Sqlite.

### Frontend (Vue 3)

1. **Node.js**: Asegúrate de tener Node.js (versión 14 o superior) instalado.
2. **npm**: Viene incluido con Node.js, pero asegúrate de que esté disponible.

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

> O si prefieres también lo puedes descargar en formato .zip

### 2. Configurar el backend

- Navega al directorio del backend:

```bash
cd backend
```

- Instala las dependencias de PHP:

```bash
composer install
```

- Configura el archivo `.env`:

```bash
cp .env.example .env
```

- Genera la clave de la aplicación:

```bash
php artisan key:generate
```

- Ejecuta las migraciones para crear las tablas en la base de datos:

```bash
php artisan migrate
```

### 3. Configurar el frontend

- Navega al directorio del frontend:

```bash
cd ../frontend
```

- Instala las dependencias de Node.js:

```bash
npm install
```

### 4. Ejecutar el proyecto

- Para iniciar el backend, navega al directorio del backend y ejecuta:

```bash
php artisan serve
```

- Para iniciar el frontend, navega al directorio del frontend y ejecuta:

```bash
npm run dev
```

### 5. Acceder a la aplicación

Abre tu navegador y visita `http://localhost:8000` para el backend y `http://localhost:5173` para el frontend. (aunque solo usaremos el frontend en este caso)

## Comentario final
Lamentablemente debido al tiempo algunas cosas no se lograron finalizar, pero los dejo aqui para que se entienda el proyecto en su totalidad.

- Manejo de errores de formularios (validaciones)
- Mensaje de errores o de "registro/login" exitoso
- Uso de Vuex (o Pinia) para gestionar de mejor manera estados globales (por ejemplo para saber si el usuario está "logueado")
- Usar tokens para un manejo de datos mas seguro