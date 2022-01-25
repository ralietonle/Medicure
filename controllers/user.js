const User = require("../models/user");

exports.createUser = (req,res,next) =>{

};

exports.getAllUser = (req,res,next) => {
    User.find()
    .then(
        (users) => {res.status(200).json(users)}
    )
    .catch(
        (error) => {
            res.status(400).json({error});
          }
    )
}

exports.getOneUser = (req,res,next) => {
    User.findById(req.params.id)
    .then(
        (user) => {res.status(200).json(user);}
    )
    .catch(
        (error) => {
            res.status(400).json({error});
          }
    )
}