# 🛍️ E-commerce Frontend - React con TypeScript

Proyecto Frontend para una aplicación de ecommerce, desarrollado en **React** con **TypeScript**. Esta aplicación se conecta con una API backend creada en Spring Boot, ofreciendo una experiencia de usuario interactiva y fluida sin el uso de librerías externas. El proyecto implementa **useContext** para gestionar el estado de autenticación y el carrito de compras de forma centralizada.

---

## 📚 Resumen del Proyecto

- **Autenticación y Seguridad**: Sistema de autenticación JWT para login seguro y roles (administrador y cliente).
- **Gestión de Productos y Categorías**: Visualización de productos organizados por categorías, con filtros y opciones de búsqueda.
- **Carrito de Compras y Órdenes**: Carrito persistente que permite a los usuarios agregar, eliminar y modificar artículos antes de realizar una orden.
- **Estado Global**: Uso de `useContext` para compartir el estado de autenticación y del carrito de manera centralizada en la aplicación, evitando el uso de estados dispersos y permitiendo una administración de datos uniforme y eficiente.
- **Estilos Personalizados**: Diseñado exclusivamente con CSS y sin librerías adicionales.

 ---


## 🛠️ Tecnologías y Herramientas Utilizadas

- **React** con **TypeScript**: Framework y lenguaje principal.
- **Fetch API**: Para realizar peticiones HTTP al backend.
- **CSS**: Estilos personalizados sin el uso de frameworks adicionales.
- **React Context (useContext)**: Para gestión centralizada del estado de la autenticación y del carrito de compras.

---


## 🚀 Funcionalidades Clave

- **Interfaz Amigable**: Navegación intuitiva con secciones bien organizadas.
- **Componentización Eficiente**: Componentes reutilizables, lo que permite una fácil modificación y reutilización en diferentes partes de la app.
- **Persistencia de Estado**: Manejada con `useContext` para una experiencia de usuario continua.
- **Flujo de Navegación**: Acceso restringido a rutas dependiendo del estado de autenticación y roles, con redirección automática tras autenticación exitosa.

---


## 🧩 Componentes Principales

- **AuthContext**: Gestiona el estado de autenticación, controlando el acceso a rutas protegidas.
- **CartContext**: Almacena y gestiona los productos añadidos al carrito, disponible en toda la aplicación.
- **ProductList**: Muestra una lista de productos, con opciones de filtro y búsqueda.
- **Cart**: Interfaz de carrito de compras que permite modificar productos antes de realizar una compra.
- **Navbar**: Barra de navegación principal con enlaces dinámicos según el estado de usuario.


---


## 🔄 Flujo de Navegación

1. **Inicio de Sesión y Registro**: Usuarios nuevos pueden registrarse, y los existentes iniciar sesión.
2. **Vista de Productos**: Los usuarios pueden ver todos los productos o filtrarlos por categoría.
3. **Gestión del Carrito**: Los usuarios pueden agregar productos al carrito, visualizar su contenido y ajustar cantidades antes de la compra.
4. **Roles Diferenciados**: Los usuarios administradores tienen acceso a una interfaz de administración para gestionar productos y categorías.

---

## 🔄 Preview

### Home
![Home](https://i.postimg.cc/vm7xK652/home.png)
### Login
![Login](https://i.postimg.cc/50xQWN34/Login.png)
### Register
![Register](https://i.postimg.cc/Y9ZBqv66/Register.png)
### Products
![Products](https://i.postimg.cc/xTrVwbTY/Products.png)
### Manage Products
![Manage Products](https://i.postimg.cc/qqTbTKFt/Manage-Products.png)
### Cart
![Cart](https://i.postimg.cc/NG2wCxtp/Cart.png)
### Orders
![Orders](https://i.postimg.cc/kMQYyjVW/orders.png)


## 🧑‍💻 Autor

**Emmanuel Rodriguez** - [LinkedIn](https://www.linkedin.com)

