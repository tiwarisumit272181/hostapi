require("dotenv").config();
const mongoose=require("mongoose");
const DATABASE_URL=process.env.mongodb_url;
const dbConnect=()=>{
    mongoose.connect(DATABASE_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true ,
    } )
    .then(()=>console.log("db ka connection sucess"))
    .catch((error)=>{
        console.log("issue in db connection");
        console.error(error.message);
        process.exit(1);
    });

}
module.exports=dbConnect;