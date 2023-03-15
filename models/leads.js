const mongoose = require('mongoose')

const leadsSchema = new mongoose.Schema({
   firmenname: {
      type:String,
      required:true,
   },
   entscheidungstraeger: {
      type:String,
      required:true,
   },
   updateLog: {
      type:String,
      required:true,
   },
   betreuer: {
      type:String,
      required:true,
   },
})

module.exports = mongoose.model('leads', leadsSchema)