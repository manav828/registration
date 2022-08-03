// express app ne data base jode connect karava mate
const mongoose = require("mongoose");

 mongoose.connect("mongodb://localhost:27017/FoodAtYourGet", {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
})
.then(()=>{
    console.log (`connection successful`);
}).catch((e)=>{
    // console.log(e);
    console.log(`no connection`); 
})
  
//last foodat.. a data base nu name mate , deprication worning na ave ani mate TRUE vada statment ,connect method promis return kare te  get karava mate .then ...
// const mon.. and mon.connect thi express app ne mongodb data base jode connect kari lidhu