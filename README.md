# [Template Website EJS](https://sauanla.com)

[Template](https://github.com/seakBz/Template-Website-EJS) is an open source, use admin dashboard template for [Bootstrap](http://getbootstrap.com/) created by [Phucnd](http://sauanla.com/).

## Preview

[![SB Admin Preview](https://startbootstrap.com/assets/img/screenshots/templates/sb-admin.png)](https://blackrockdigital.github.io/startbootstrap-sb-admin/)

**[View Live Preview](https://blackrockdigital.github.io/startbootstrap-sb-admin/)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-sb-admin/master/LICENSE)

## Download and Installation

To begin using this template, choose one of the following options to get started:

- Download the repo
- Clone the repo: `git clone git@github.com:seakBz/Template-Website-EJS.git`
- [Fork, Clone, or Download on GitHub](git@github.com:seakBz/Template-Website-EJS.git)

## Structure

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

#### package.json

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

## Start

- `$ npm run dev`

## About

- https://sauanla.com

## Copyright and License

Copyright 2019 Phucnd -  Sauanla. Code released under the [MIT] license.
