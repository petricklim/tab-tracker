const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Email already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = password === user.password

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The password is invalid'
        })
      }

      res.send(user.toJSON())
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurered trying to login'
      })
    }
  }
}
