const express=require("express")
const app=express()

const path=require("path")

const port=5000

app.use(express.static("public"))
app.set("view engine","ejs")
// home
app.get("/home",(req,res) =>{
  res.render("home.ejs")
})

//personalities
app.get("/personalities",(req,res) =>{
    res.render("Personalities.ejs")
  })

 
//cities
app.get("/cities",(req,res) =>{
    res.render("cities.ejs")
  })

  //spots
app.get("/spots",(req,res) =>{
    res.render("spots.ejs")
  })

  //contact
app.get("/contact",(req,res) =>{
    res.render("Contact.ejs")
  })

app.get("*",(req,res)=>{
  res.send("Wrong url")
})

app.listen(port,()=>{
  console.log(`Sever is listening to port ${port}!`)
})