require("dotenv").config();
const connectDb=require("./db/connect");
const ProductJson=require("./products.json");
const Product=require("./models/product");
const start =async()=>{
   try{
    await connectDb(process.env.mongodb_url);
    await Product.deleteMany();
    const createdProducts= await Product.create(ProductJson);
     console.log("sucess");
   //   console.log("Created products:", createdProducts);
   } catch(error){
    console.log(error);
   }
};
start();                            