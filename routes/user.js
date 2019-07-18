const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcrypt = require('bcryptjs')
const db = require('../models')
const User = db.User

// login page
router.get('/login', (req, res) => {
  res.render('login')
})

// login check
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
  })(req, res, next)
})

// register page
router.get('/register', (req, res) => {
  res.render('register')
})

// register check
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body
  User.findOne({ where: { email: email } }).then(user => {
    if (user) {
      console.log('User already exists')
      res.render('register', {
        name,
        email,
        password,
        password2
      })
    } else if (password === password2) {
      const newUser = new User({
        name,
        email,
        password,
      })
      // newUser
      //   .save()
      //   .then(user => {
      //     res.redirect('/')
      //   })
      //   .catch(err => console.log(err))
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash

          newUser
            .save()
            .then(user => {
              res.redirect('/')
            })
            .catch(err => console.log(err))
        })
      })

    } else {
      console.log('Two passwords are different!')
    }
  })
})

// logout
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'Log out successfully')
  res.redirect('/users/login')
})

module.exports = router