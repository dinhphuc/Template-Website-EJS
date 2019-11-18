import express from 'express'
const demoRoute = express.Router()
var expressLayouts = require('express-ejs-layouts')
demoRoute.use(express.static(__dirname + '/public'))
demoRoute.use(expressLayouts)

//Router ../demo
demoRoute.get('/', (req, res, next) => {
  res.render('demo/index')
})

module.exports = demoRoute
