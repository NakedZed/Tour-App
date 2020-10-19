const User = require('../models/userModel')

exports.getAllUsers = async (req, res) => {
  const users = await User.find()
  res.json({
      status: 'success',
      result: users.length,
      users
      
  })
}
exports.getUserById =  (req, res) => {
  const id = req.params.id

  
}
exports.addUser = async(req, res) => {

  try{
  createdUser = await User.create(req.body)

  res.status(200).json({
    status:'success',
    createdUser
  })
  }catch(err){
    res.status(400).json({
      status:'fail',
      message:'invalid data'
  })
  }
}
