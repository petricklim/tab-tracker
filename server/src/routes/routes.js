const authController = require('../controllers/authController')
const authControllerPolicy = require('../policies/authControllerPolicies.js')

module.exports = (app) => {
  app.post('/register', authControllerPolicy.register, authController.register)
}
