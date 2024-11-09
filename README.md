# 🛒 E-commerce Frontend - React + TypeScript

Este es un proyecto frontend para una aplicación de ecommerce, desarrollado en **React** y **TypeScript**. La aplicación permite a los usuarios explorar productos, añadirlos al carrito y realizar pedidos. El proyecto fue creado con **Vite** para una configuración de desarrollo rápida y eficiente, y está diseñado con **CSS nativo**. Todas las peticiones a la API se realizan utilizando `fetch` y hooks personalizados, sin dependencia de librerías externas.

---

🔹 **Explora la Aplicación Frontend**:  
El frontend de la aplicación está desarrollado en **React** y **TypeScript** para una interfaz de usuario rápida e intuitiva. Puedes probar la aplicación en tiempo real aquí: [Aplicación Frontend](https://ecommerce-react-frontend.onrender.com).

Los tiempos de espera y rendimiento de la app pueden estar condicionados por el servidor donde esta alojado. Talvez demore en realizar ciertas acciones o cargas de elementos.

El servidor puede demorar 5 minutos en levantar.

---

## 📚 Resumen del Proyecto

- **Gestión de Productos y Categorías**: Visualización y navegación de productos por categorías.
- **Carrito de Compras**: Agrega y elimina productos del carrito con actualización dinámica.
- **Autenticación de Usuarios**: Inicio de sesión y registro, con manejo de roles como cliente y administrador.
- **Interacción API**: Integración mediante `fetch` sin librerías externas para llamadas a la API.
- **Estilos con CSS**: Estilos modulares y personalizados con CSS nativo.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

- **React 18**: Framework de desarrollo de interfaces de usuario.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.
- **Vite**: Herramienta de desarrollo para configurar el proyecto.
- **CSS nativo**: Para estilos modulares y personalizados.
- **Fetch API**: Para realizar peticiones HTTP.
- **React Hooks**: Hooks personalizados para manejar lógica y estado sin dependencias externas.
  
---

## 👥 Usuarios de Prueba

Para probar la funcionalidad de inicio de sesión y roles de usuario, utiliza los siguientes usuarios de prueba:

- **Administrador**:
  - Usuario: `Admin`
  - Contraseña: `Admin12345`

- **Cliente**:
  - Usuario: `Customer`
  - Contraseña: `Customer12345`

Estos usuarios permiten acceder a las distintas funcionalidades según el rol.

---

## 📋 Estructura de Componentes Principales

### Autenticación
- **`Login`**: Componente para iniciar sesión.
- **`Register`**: Componente para registrar nuevos usuarios.
  
### Productos y Categorías
- **`ProductList`**: Muestra una lista de productos, con filtros por categoría.
- **`ProductDetail`**: Muestra los detalles de un producto seleccionado.
- **`CategoryList`**: Filtra productos por categorías.

### Carrito
- **`Cart`**: Muestra el contenido del carrito y permite gestionar los productos añadidos.
  
### Órdenes
- **`OrderSummary`**: Muestra un resumen del pedido antes de realizar la compra.

---

## 🌐 Comunicación con la API

Para interactuar con el backend, el proyecto utiliza la **Fetch API** a través de hooks personalizados, manteniendo las llamadas organizadas y centralizadas.

---

## 🖌️ Estilos y Diseño

Para los estilos, se utilizó **CSS nativo** en lugar de bibliotecas de diseño externas. La estructura modular permite mantener los estilos específicos de cada componente organizados y reutilizables.

---

## Autor

Emmanuel Rodriguez - [LinkedIn](https://www.linkedin.com/in/emmanuelrodr%C3%ADguezbuzzo/)