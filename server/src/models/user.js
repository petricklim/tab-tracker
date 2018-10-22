const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 2
  if (!user.changed('password')) {
    return
  }

  return bcrypt
  .genSaltAsync(SALT_FACTOR)
  .then(salt => bcrypt.hashAsync(user.password, salt, null))
  .then(hash => {
    console.log(user.password)
    console.log(hash)
    user.setDataValue('password', hash)
  })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return true // bcrypt.compareAsync(password, this.password)
  }

  return User
}
