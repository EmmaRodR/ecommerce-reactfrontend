# 🛒 E-commerce API - Backend Spring Boot

Proyecto backend para una aplicación de ecommerce, desarrollado en **Spring Boot** y **Java**. Este API ofrece gestión completa de usuarios, productos, categorías y órdenes, con una seguridad robusta mediante **JWT**. El proyecto incluye usuarios de prueba, está documentado con **Swagger** para facilitar la integración y prueba de endpoints, y utiliza una base de datos **PostgreSQL** alojada en Render.

## 🔹 Explora la API con Swagger
Para probar y documentar los endpoints de la API, he utilizado **Swagger**, que facilita la interacción y exploración de los recursos disponibles. Puedes ver la documentación en tiempo real en: **Documentación de Swagger**.

> **Nota**: Los tiempos de espera y rendimiento de la app pueden depender del servidor donde está alojado. Algunas acciones o cargas de elementos pueden demorarse.

## 📚 Resumen del Proyecto

- **CRUD Completo**: Gestión de productos, categorías, usuarios y pedidos.
- **Autenticación Segura**: Implementada con JWT para manejar roles de administrador y cliente.
- **Carrito y Órdenes**: Carrito de compras y generación de órdenes de compra.
- **Documentación Swagger**: Explora la API con Swagger en tiempo real.
- **Usuarios de Prueba**: Usuarios predeterminados (Admin e Invitado) para pruebas rápidas.

## 🛠️ Tecnologías y Herramientas Utilizadas

- **Java 17**: Lenguaje de programación.
- **Spring Boot 3**: Framework principal.
- **Spring Data JPA**: Abstracción para la persistencia de datos usando Hibernate como ORM.
- **Spring Security**: Manejo de seguridad.
- **JWT**: Autenticación basada en tokens.
- **Hibernate**: ORM para gestionar la persistencia de datos.
- **Swagger**: Generación de documentación de la API.
- **PostgreSQL**: Base de datos alojada en Render.
- **Maven**: Construcción y gestión de dependencias.

## 👥 Usuarios de Prueba

Para probar rápidamente, se incluyen dos usuarios preconfigurados:

- **Administrador**:
  - **Usuario**: Admin
  - **Contraseña**: ADMIN12345
  - **Rol**: ADMIN

- **Invitado**:
  - **Usuario**: Customer
  - **Contraseña**: Customer12345
  - **Rol**: CUSTOMER

## 📋 Endpoints Principales

- **URL Base**: `https://ecommerce-springboot-backend.onrender.com`

## Autor

**Emmanuel Rodriguez** - [LinkedIn](https://www.linkedin.com)