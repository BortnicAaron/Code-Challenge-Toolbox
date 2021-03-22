# Code-Challenge-Toolbox
## Guia
1. [Challenge](#Challenge)
2. [Instalación](#Instalación)
3. [Imagen Demostración](#Imagen_Demostración)
4. [Tecnologías](#Tecnologías)
5. [Tree](#Tree)

### Challenge
***
✅ REALIZADO | ❌ SIN REALIZAR
- Un API usando Node + Express
    * Usando NodeJs + ExpressJs se debe crear API, a la cual se le envía un texto y responde con el mismo texto invertido. ✅
    * También se deben crear los tests que validan el API usando Mocha + Chai + Supertest. Los tests deben poder correrse usando "npm test". ✅

- Un Frontend cliente usando Bootstrap + React
    * Un App cliente en React que permita enviar textos a la API del punto anterior y muestre las respuestas del API desde la ultima a la primera. ✅

- Puntos opcionales para el challenge
    * Indicar por medio del flag "palindrome": true si el texto enviado es un palindromo. ✅
    * Usar StandarJs https://standardjs.com/ ✅
    * Usa Redux https://redux.js.org/ ✅
    * Usar Docker o Docker Compose para correr las apps ✅(Solo en el Back-End)
    * Test unitarios usando Jest https://jestjs.io/ ❌
## Instalación
***
General
```
$ git clone https://github.com/BortnicAaron/Code-Challenge-Toolbox.git
```
###  Dentro de la carpeta 'CODE-CHALLENGE-TOOLBOX'

Back-End
```
$ cd api/
$ npm install
$ npm start
$ npm test
```
> Puede ejecutar el pryecto de Back-End en Docker, realizarlo en el puerto 3000

Front-End
```
$ cd client/
$ npm install
$ npm start
```
## Imagen_Demostración
***
<img src="media/final.png"></img>
## Tecnologías
***
Lista de libs & frameworks utilizadas dentro de api:
* [NodeJs](https://nodejs.org/en/)
* [ExpressJs](https://expressjs.com/): Version 4.17.1
* [Mocha](https://mochajs.org/): Version 8.3.2
* [Chai](https://www.chaijs.com/): Version 4.3.4
* [SuperTest](https://github.com/visionmedia/supertest#readme): Version 6.1.3
* [StandarJs](https://standardjs.com/): Version 16.0.3

Lista de libs & frameworks utilizadas dentro de client: 
* [NodeJs](https://nodejs.org/en/)
* [Webpack](https://webpack.js.org/): Version 5.19.0
* [Bootstrap](https://getbootstrap.com/): Version 4.6.0 
* [React](https://reactjs.org/): Version 17.0.1
* [Redux](https://redux.js.org/): Version 4.0.5
* [StandarJs](https://standardjs.com/): Version 16.0.3
## Tree
***
```
├───api
│   │   .dockerignore
│   │   app.js
│   │   Dockerfile
│   │   package-lock.json
│   │   package.json
│   │
│   ├───routes
│   │       texts.js
│   │
│   └───tests
│           test.js
│
├───client
    │   babel.config.js
    │   package-lock.json
    │   package.json
    │   webpack.config.js
    │
    └───src
        │   App.css
        │   App.jsx
        │   index.html
        │   index.jsx
        │
        ├───components
        │   │   Home.jsx
        │   │
        │   ├───Cards
        │   │       Card.jsx
        │   │       Results.jsx
        │   │
        │   └───Nav
        │           Nav.jsx
        │
        ├───redux
        │       action.jsx
        │       reducer.jsx
        │       store.jsx
        │
        └───tests
                Nav.test.js
                setupT.js
```