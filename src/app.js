 const express = require("express"); //express chhe avu batava

 const path = require("path"); 

 const app = express(); // express na badha function vaparava
 const hbs = require("hbs");



 require("./db/conn"); // conn file include karava 
 const Register = require("./models/registers");
const port = process.env.PORT || 3000; // host karia ani mate process.env.PORT or 3000 local host mate

const static_path = path.join(__dirname , "../public");
const template_path = path.join(__dirname , "../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");//views folder na path mate

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path)


 app.get("/",(req,res)=> {
    res.render('index')
 }) 
 app.get("/register",(req,res)=> {
   res.render('register')
}) 

app.get("/login",(req,res)=>{
   res.render("login");
})

app.post("/register", async(req,res)=>{
   try {
      const registerEmp = new Register({
         name : req.body.name,
         email: req.body.email,
         pnum : req.body.pnum,
         pass : req.body.pass

      })
      const registered = await registerEmp.save();
      res.status(201).render("index");
   } catch (error) {
      res.status(400).send(error);
   }
})


app.post("/login", async(req,res)=>{
   try {
      const email = req.body.email;
      const pass = req.body.pass;
      
      // console.log(`${email} and pass ${pass}`)
      const useremail = await Register.findOne({email:email})
      res.send(useremail);
      // console.log(useremail);
   
      if(useremail.pass === pass){
         res.status(201).render("index");
      }else{
         res.send("invalid login Details");
      } 
   } catch (error) {
      res.status(400).send("invalid login Details");
      // res.status(201).render("index");
       
   }


})

 app.listen(port ,()=>{
    console.log(`serever is runnig at port on ${port}`);
 })