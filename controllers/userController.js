const fs = require('fs')
const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`))

exports.getAllUsers = (req, res) => {
  res.json({
      status: 'success',
      result: users.length,
      users
  })
}
exports.getUserById =  (req, res) => {
  const id = req.params.id

  newUser = users.find(el => el._id === id);

  if(!newUser){
      res.json({
          status: 'Invalid ID',
          
      })
  }
  res.json({
      status: 'success',
        newUser
  })    
}
