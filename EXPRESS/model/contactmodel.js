const mongoose = require('mongoose')

const contactmodel = new mangoose.schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    phone: {
        type:String,
        unique:true,
        required:true
        

    }
})
  const contact = mongoose.model("contacts",contactmodel)
  module.exports = contacts