const User = require("../models/user");

exports.createUser = (req,res,next) =>{

};

exports.getAllPatient = (req,res,next) => {
    User.find({category: "patient"})
    .then(
        (users) => {res.status(200).json(users)}
    )
    .catch(
        (error) => {
            res.status(400).json({error});
          }
    )
}
