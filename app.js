// include packages and setup server
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')

const port = 3000

// setup the app
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  secret: 'akpitdx',
  resave: 'false',
  saveUninitialized: 'false'
}))

app.use(passport.initialize())
app.use(passport.session())


// routes 
app.use('/', require('./routes/home.js'))
app.use('/users', require('./routes/user.js'))

// listening on express app
app.listen(port, () => {
  console.log('Listening on express app...')
})