const authController = require('../controllers/authController')
const authControllerPolicy = require('../policies/authControllerPolicies.js')

module.exports = (app) => {
  app.post('/login', authController.login)
  app.post('/register', authControllerPolicy.register, authController.register)
}
