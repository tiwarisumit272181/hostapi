const product=require("../models/product");
const getAllProducts=async (req,res)=>{
    // const myData=await product.find({});
    const {company,name,sort,select}=req.query;// sort taken let say we are asking http://localhost:8000/api/products?sort=price
    const queryObject={};
    if(company){
        queryObject.company=company;
    }
    if(name){
        queryObject.name={$regex :name,$options:"i"};
    }
    let apiData=product.find(queryObject);
    if(sort){
        let sortFix=sort.split(",").join(" ");// this line we used to take advantage of syntax of sort in this
        apiData=apiData.sort(sortFix);
    }
    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }
    let page=Number(req.query.page)||1;
    let limit=Number(req.query.limit)||10;
    let skip=(page-1)*limit;
    apiData=apiData.skip(skip).limit(limit);
    const Products=await apiData;
    res.status(200).json({Products,nbHits:Products.length});
    
};
const getAllProductsTesting=async (req,res)=>{
    const myData=await product.find(req.query).collation({ locale: 'en', strength: 2 }).sort("name");// to sort case insensitive manner
    res.status(200).json(myData);
};
module.exports={getAllProducts,getAllProductsTesting};
// select statement used 
// pagination means we will be able to see only the particular amount of data on single page
