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
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/users/login', (req, res) => {
  res.render('login')
})

app.post('/users/login', (req, res) => {
  res.send()
})

app.get('/users/register', (req, res) => {
  res.render('register')
})

app.post('/users/register', (req, res) => {
  res.send('register')
})

app.get('/users/logout', (req, res) => {
  res.send('logout')
})

// listening on express app
app.listen(port, () => {
  console.log('Listening on express app...')
})