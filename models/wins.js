const mongoose = require('mongoose')

const winsSchema = new mongoose.Schema({
   calls: {
      type:Number,
      required:true,
   },
   appointments: {
      type:Number,
      required:true,
   },
   sales: {
      type:Number,
      required:true,
   },
   lessons: {
      type:String,
      required:true,
   },
   date: {
      type:String,
      required:true,
   }
})

module.exports = mongoose.model('wins', winsSchema)