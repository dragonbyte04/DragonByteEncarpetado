# DRAGONBYTES 🐉

¡Bienvenido a DragonBytes! Una plataforma web front-end diseñada para simular una experiencia de aprendizaje en línea, donde los usuarios pueden registrarse, iniciar sesión y explorar contenido educativo. Este proyecto fue construido con tecnologías web fundamentales y el framework de Bootstrap 5 para un diseño moderno y responsivo.

---

## ✨ Características Principales

* **Registro de Usuarios:** Permite a nuevos usuarios crear una cuenta para acceder a la plataforma.
* **Inicio de Sesión (Login):** Autenticación para usuarios ya registrados.
* **Gestión de Sesión:** Utiliza `localStorage` para persistir los datos del usuario y simular una sesión iniciada.
* **Diseño Responsivo:** Gracias a Bootstrap 5, la interfaz se adapta a diferentes tamaños de pantalla.
* **Navegación Intuitiva:** Una estructura clara con páginas para Cursos, Perfil, FAQ y Soporte Técnico.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando las siguientes tecnologías:

* **HTML5:** Para la estructura y el contenido de las páginas web.
* **CSS3:** Para el diseño, los colores, las fuentes y los estilos personalizados.
* **JavaScript (ES6+):** Para la interactividad, la lógica del lado del cliente, y la modularidad (Imports/Exports).
* **Bootstrap 5:** Framework de CSS para componentes pre-diseñados y un sistema de rejilla (grid) responsivo.
* **SweetAlert2:** Para mostrar notificaciones y alertas de usuario de forma elegante.

---

## 🚀 Cómo Empezar

Para ejecutar este proyecto en tu máquina local, sigue estos sencillos pasos.

1.  **Clona el repositorio**
    ```sh
    git clone [https://github.com/dragonbyte04/EntregaFinalDragonByte.git]
    ```

2.  **Navega al directorio del proyecto**
    ```sh
    cd EntregaFinalDragonByte
    ```

3.  **Abre el proyecto**
    La forma más fácil de visualizar el proyecto es abriendo el archivo `index.html` en tu navegador.

    **Recomendación:** Usa la extensión **Live Server** en Visual Studio Code. Simplemente haz clic derecho sobre el archivo `index.html` y selecciona `Open with Live Server`. Esto iniciará un servidor local y evitará problemas con las rutas de los archivos y los módulos de JavaScript.

---

## 📂 Estructura de Archivos

El proyecto está organizado de la siguiente manera para mantener un código limpio y escalable, siguiendo un patrón de diseño Modelo-Vista-Controlador (MVC) adaptado al front-end:

## 📂 Estructura de Archivos

EntregaFinalDragonByte/
│
├── controllers/
│   ├── homeDom.js
│   ├── registroDom.js
│   └── ... (otros controladores)
│
├── css/
│   └── estilos.css
│
├── helpers/
│   ├── localstorage.js
│   ├── validarRegistro.js
│   └── expresiones.js
│
├── models/
│   └── homeModels.js
│
├── public/
│   └── (Imágenes, assets, etc.)
│
├── views/
│   ├── home.html
│   ├── registro.html
│   └── ... (otras vistas)
│
├── index.html
└── README.md

El proyecto está organizado de la siguiente manera para mantener un código limpio y escalable.

## 👥 Creadores

Este proyecto fue desarrollado por un equipo de estudiantes de desarrollo de software:

* Nelson Lozano Rayo
* Paola Andrea Molina Valderrama
* Paulina Londoño Diaz
* Maria Salome Alzate Pamplona

---