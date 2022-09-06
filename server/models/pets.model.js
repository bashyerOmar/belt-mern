const mongoose = require("mongoose")


mongoose.plugin(schema => {
    schema.pre('findOneAndUpdate', setRunValidators);
  });
  
  function setRunValidators () {
    this.setOptions({ runValidators: true });
  }

  
const pets = mongoose.Schema({

name: {
    type:String , 
    required:[true , "name is required"],
    minlength:[3 , "name must be at least 3 charcaters "],
    unique: [true , "name must be unique"]
},
   type: {
    type:String , 
    required:[true , "type is required"],
    minlength:[3 , "type must be at least 3 charcaters "],
},
desc: {
    type:String , 
    required:[true , "Description is required"],
    minlength:[3 , "desc must be at least 3 charcaters "],
},
skills: {
    skill1: String,
    skill2: String,
    skill3: String
},
likes: {
    type: Number,
}
})

module.exports = mongoose.model("pets", pets);