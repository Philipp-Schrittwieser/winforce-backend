const express = require("express")
const app=express()
const mongoose = require('mongoose')
const cors= require ("cors")

const UserModel=require('./models/leads')
const UserModelWins=require('./models/wins')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Philipp:Philipp1!@winforce.yo2hoxm.mongodb.net/winforce?retryWrites=true&w=majority") 

app.listen(4000, ()=> {
  console.log("Server Runs: Yes!")
})

//************** Funktionen für CRUD-Leads **********************************************

// Create Lead
app.post('/createLead', (req, res) => {
   const newLead = req.body;
   const newUser = new UserModel(newLead)
   newUser.save()
       .then(() => {
         res.status(200).send('!B! CREATE request erfolgreich verarbeitet');
      }) 
 });


 // Read Leads
 app.get('/readLeads', (req, res) => {
  UserModel.find({}, (err, objects) => {
    if (err) throw err;
    res.status(200).send(objects);
  });
  });

  // Update Lead
 app.put('/updateLead', (req,res) => {
  const id = req.body.id;
  const newObject = req.body.newObject;

  UserModel.findById(id)
  .then((updatedObject) => {
    updatedObject.firmenname=newObject.firmenname;
    updatedObject.entscheidungstraeger=newObject.entscheidungstraeger;
    updatedObject.updateLog=newObject.updateLog;
    updatedObject.betreuer=newObject.betreuer;
    return updatedObject.save();
  })
  .then(() => {
    res.status(200).send('!B! UPDATE request erfolgreich verarbeitet');
  })
  .catch((err) => {
    console.log(err)
  })
 })


 // Delete Lead
 app.delete("/deleteLead/:id", (req, res) => {      
      const id=req.params.id
      //console.log("id",id)
      UserModel.findByIdAndRemove(id)
      .then(() => {
        //console.log(res);
        res.status(200).send('!B! DELETE request erfolgreich verarbeitet');
      })
      .catch((error) => {
        console.error(`!B! Error deleting lead with id ${id}: ${error}`);
        res.status(500).send({ message: "!B! Error deleting lead" });
      });
   });


   //************** Funktionen für CreateRead-Wins **********************************************

   // Create Win
   app.post('/createWin', (req, res) => {
    const newWin = req.body;
    const newUser = new UserModelWins(newWin)
    newUser.save()
        .then(() => {
          res.status(200).send('!B! WINS: CREATE request erfolgreich verarbeitet');
       }) 
  });

   // Read Wins
  app.get('/readWins', (req, res) => {
  UserModelWins.find({}, (err, objects) => {
    if (err) throw err;
    res.status(200).send(objects);
  });
  });
 