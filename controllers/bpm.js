const Bpm = require('../models/bpm');

exports.createBpm = (req, res, next) => {
    const bpm = new Bpm({
        value: req.body.value,
        date: req.body.date,
        userId: req.body.userId
    });
    bpm.save().then(
        () => {
            res.status(201).json({message: "Bpm added successfully"});
        }
    )
    .catch(
        (error) => {
            res.status(400).json({
              error: error
            });
        }
    )
    
};

exports.getAllBpm = (req, res, next) => {
    Bpm.find()
    .then(
        (bpms) => {res.status(200).json(bpms);}
    )
    .catch(
        (error) => {
            res.status(400).json({error});
          }
    )

};

exports.getUserBpm = (req,res,next) => {
    Bpm.find({userId: req.params.userId})
    .then(
        (bpms) => {res.status(200).json(bpms);}
    )
    .catch(
        (error) => {
            res.status(400).json({error});
          }
    )
};
