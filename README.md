# Recursos para react

En este proyecto agrupare todos los recursos que aprenda para aplicar a proyectos en react, junto a buenas prácticas y librerías útiles.

## Tecnologías usadas

 - **[Vite](https://vitejs.dev/)** : Herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos.
 - **[React](https://reactjs.org/)** : Biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página..
 - **[React Hook Form](https://react-hook-form.com/)** : Biblioteca para manejar formularios en React.
 - **[Zod](https://zod.dev/)** : Biblioteca de validación de esquemas para TypeScript.
 - **[TypeScript](https://www.typescriptlang.org/)** : Lenguaje de programación de código abierto desarrollado por Microsoft. Es un superconjunto de JavaScript que añade tipado estático opcional y otras características avanzadas, facilitando el desarrollo y mantenimiento de aplicaciones a gran escala.

## Estructura del Proyecto

```bash
src/
├─  pages/
│     └─  App.tsx     # Pagina inicial de la aplicación
├─  main.tsx          # Punto de entrada de aplicación
└─  main.css          # Variables y reset de css 
```

## Instalación

1. Clona el repositorio
    ```
      git clone https://github.com/your-username/repo-name.git
      cd repo-name
    ```

2. Instala las dependencias
    ```
      npm install
    ```

3. Ejecuta la aplicación

  - Como developer :
    ```
      npm run dev
    ```

  - Como producto : 
    ```bash
      npm build
      npm install -g serve    #Si no tenias instalado serve
      npx serve -s dist/
    ``` 

## Uso

Apto para tomar de referencia en proyectos mas grandes.

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
