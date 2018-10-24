const authController = require('../controllers/authController')
const authControllerPolicy = require('../policies/authControllerPolicies.js')
const songsController = require('../controllers/songsController')

module.exports = (app) => {
  app.post('/login', authController.login)
  app.post('/register', authControllerPolicy.register, authController.register)
  app.get('/songs', songsController.getSongs)
  app.post('/songs', songsController.addSong)
  app.get('/songs/:songId', songsController.getSong)
  app.put('/songs/edit/:songId', songsController.update)
}
