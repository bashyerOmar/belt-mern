const pet = require("../models/pets.model");




module.exports.createPet = (req, res) => {
  pet.create(req.body)
    .then((createdpet) => res.json(createdpet))
    .catch((err) => res.status(400).json(err));
}

module.exports.OnePet = (req, res) => {  
  pet.findOne({_id:req.params.id})
      .then(pet => res.json(pet))
      .catch(err => res.status(400).json(err))
}


module.exports.getAllPets = (req, res) => {
  pet.find({}).sort({type: 1})
      .then(pets => res.json(pets))
      .catch(err => res.status(400).json(err))
}


module.exports.updatePet = (req, res) => {
  pet.findOneAndUpdate({_id: req.params.id}, req.body,  {new:true})
      .then(updatedpet => res.json(updatedpet))
      .catch(err => res.status(400).json(err))
}



module.exports.deletePet = (req, res) => {
  pet.deleteOne({ _id: req.params.id })
      .then(deleteConfirmation => res.json(deleteConfirmation))
      .catch(err => res.status(400).json(err))
}



