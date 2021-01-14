

## Binamik - Challenge


### Available Scripts

In the project directory, you can run:

### ` npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!




### Table of contents
[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

[Technologies used](#technologies-used)

### Project structure

````

src/
|- components/                                # All components
|    |- Footer/ 
        |- Footer.css __________________________ # Css modules styles
|       |- Footer.jsx __________________________ # View Component
|    |- Header/ 
        |- Header.css __________________________ # Css modules styles
|       |- Header.jsx __________________________ # View Component
|    |- Persons/ 
            |- CardPerson/
               |- CardPerson.css __________________________ # Css modules styles
               |- CardPerson.jsx __________________________ # Card Person Component
        |- Persons.css __________________________ # Css modules styles
|       |- Persons.jsx __________________________ # List all persons

|- store/      
    |- actions/
        |- actionsTypes/
        |- index.js ______________________________ # actions for redux
    |- persons.js  ______________________________ # persons action for redux

    |- reducers/ 
       |- index.js __________________________ # persons reducer
       
|- index.css _________________________ # Css modules styles
|- index.js _________________________ # Render
| 
````


### Installation

1- Clone the project

`git clone git clone https://github.com/ferreiraguihh/binamik-challenge`

2-`npm install` to install npm packages

3- start dev server using `npm start`.

3- build and bundling your resources for production `npm run build`.


#### Technologies used

* [Webpack 4](https://github.com/webpack/webpack) 
* [Babel 8](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [React](https://github.com/facebook/react)
* [Redux](https://redux.js.org/)
* [React-router 4.0](https://reacttraining.com/react-router/) 

Create by Guilherme Ferreira dos Santos
