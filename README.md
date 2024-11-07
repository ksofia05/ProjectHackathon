
# GoGlobal - Proyecto hackathon

A brief description of what this project does and who it's for


## API Reference

#### Get all countries


  GET https://restcountries.com/v3.1/all

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**.`Nombre del país (por ejemplo, Argentina)`|

#### Get item


  GET https://restcountries.com/v3.1/name/{name}




## Authors

- [@ksofia05](https://github.com/ksofia05)
- [@Nata-Sd](https://github.com/Nata-Sd)
- [@medicenkaese](https://github.com/Medicenkaese)
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| whiteL | ![#D6E7EE](https://via.placeholder.com/10/D6E7EE?text=+) #D6E7EE |
| blueLight | ![#018ABE](https://via.placeholder.com/10/018ABE?text=+) #018ABE |
| blueDark | ![#171723](https://via.placeholder.com/10/171723?text=+) #171723 |
| blueSea | ![#070645](https://via.placeholder.com/10/070645?text=+) #070645 |


## Deployment

### Clonar el repositorio

Para clonar este repositorio en tu máquina local, usa el siguiente comando:

`git clone https://github.com/ksofia05/ProjectHackathon.git`


### Explicación:

1. **Clonar el repositorio**: Usas el comando `git clone` para copiar el repositorio de GitHub a tu máquina local. La URL debe ser la del repositorio público o privado que quieras clonar.
   
2. **Instalar dependencias**: Una vez que se ha clonado el repositorio, es necesario instalar las dependencias del proyecto (como las librerías de Node.js) con el comando `npm install`.

3. **Desplegar el proyecto**: Aquí usas `npm run deploy`, lo cual depende de cómo hayas configurado tu proyecto para el despliegue (esto puede incluir configurar un script en el `package.json` para hacer el despliegue a un servidor o a un servicio de hosting).






## Documentation

[Documentation](https://linktodocumentation)


## Fields


### Descripción de Carpetas y Archivos

- **`public/`**: Contiene los archivos estáticos que se sirven tal cual como están. Aquí es donde se encuentra el archivo `index.html`, que es la plantilla principal para la aplicación.
  
- **`src/`**: Es el directorio que contiene todo el código fuente de la aplicación.
  - **`components/`**: Contiene los componentes reutilizables de la aplicación, como `Home`, `About us`, etc.
  - **`pages/`**: Contiene los archivos correspondientes a las páginas principales de la aplicación (como `Home.js`).
  - **`App.js`**: El componente raíz de la aplicación, donde se organizan los componentes principales.
  

- **`.gitignore`**: Especifica qué archivos o directorios deben ser ignorados por Git (como dependencias o archivos temporales).

- **`package.json`**: Este archivo contiene los metadatos del proyecto, como las dependencias, los scripts de construcción y los comandos de ejecución.


