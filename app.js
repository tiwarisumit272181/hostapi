const express=require("express");
require("dotenv").config();
const app=express();
port=process.env.PORT||8000;
const connectDb=require("./db/connect");
const products_routes=require("./routes/products");
app.get("/",(req,res)=>{
   res.send("hi i am live");
});
// middle ware or to set routes
app.use("/api/products",products_routes);
const start=async()=>{
   try{
      
     app.listen(port,()=>{
        console.log(`server is running on port no ${port}`)
     })
     await connectDb();
   } catch(error){
    console.log(error);   
   }
};
start();

