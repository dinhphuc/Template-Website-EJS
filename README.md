# Template Website EJS

##  Structure
 ```
app
├── public
│   └── assets
├── src
│   ├── config
│   ├── controllers
│   │   └── demoController.js
│   ├── helpers
│   ├── plugins
│   └── services
├── Views
│   ├── demo
│   │   └── index.ejs
└── index.js
```

##  package.json
- `$ npm install express`
- `$ npm install express-ejs-layouts`
- `$ npm install ejs`
- `$ npm install body-parser`

- `$ npm install request`
- `$ npm install axios`

> `$ npm install -g nodemon`

#### file package.json　
```{
  "name": "template-ejs-website",
  "version": "1.0.0",
  "description": "this is template ejs website",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
  "author": "PhucBinz",
  "license": "MIT",
  "dependencies": {
    "axios": "0.19.0",
    "body-parser": "^1.19.0",
    "ejs": "^2.7.1",
    "express": "^4.17.1",
    "express-ejs-layouts": "^2.5.0",
    "request": "^2.88.0"
  }
}
```

##  Start
- `$ npm run dev`
