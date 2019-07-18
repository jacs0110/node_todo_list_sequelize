const express = require('express')
const router = express.Router()

const db = require('../models')
const Todo = db.Todo
const User = db.User

const { authenticated } = require('../config/auth.js')

router.get('/', authenticated, (req, res) => {
  // User.findByPk(req.user.id)
  //   .then((user) => {
  //     if (!user) throw new Error('User not found')

  //     return Todo.findAll({
  //       where: { UserId: req.user.id }
  //     })
  //   })
  //   .then((todos) => {
  //     console.log('login successfully')
  //     return res.render('index', { todos: todos })
  //   })
  //   .catch((error) => {
  //     return res.status(422).json(error)
  //   })
  Todo.findAll({
    where: { UserId: req.user.id }
  })
    .then((todos) => {
      console.log('login good')
      return res.render('index', { todos: todos })
    })
    .catch((error) => {
      return res.status(422).json(error)
    })
})

module.exports = router