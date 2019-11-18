import express = require('express')
var bodyParser = require('body-parser')

//Import
var config = require('../src/config/config')

var app = express()
var port = process.env.PORT || config.port

//Start server
app.listen(port)
console.info('Start server port: ' + port)
console.info('Location: http://localhost:' + port)

//Use layout
var expressLayouts = require('express-ejs-layouts')
const demoRoute = require('../src/controllers/demoController')

// Support encoded bodies - body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Setup root source public
app.use(express.static(__dirname + '../../public'))

/**
 *  Use Router
 */

app.use('/demo', demoRoute)
app.use(expressLayouts)

// Setup root source views
app.set('view engine', 'ejs')
app.set('views', './views')

// Home setup

app.get('/', function(req: any, res: any) {
  res.render('index')
})
