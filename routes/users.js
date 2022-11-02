var express = require('express');
var router = express.Router();
var {mongodb,MongoClient,dbUrl,dbName}=require('../dbSchema');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/all',async(req,res)=>{
  const client=await MongoClient.connect(dbUrl);
  try {
    const db=await client.db(dbName);
    let users=await db.collection('users').find().toArray();
    res.json({
      statusCode:200,
      users
    })
    
  } catch (error) {
    console.log(error);
    res.json({
      statusCode:500,
      message:"Internal Server Error"
    })
    
  }
  finally
  {
    client.close();
  }
})



router.post('/signup',async(req,res)=>{
const client=await MongoClient.connect(dbUrl);
try {
  const client=await MongoClient.connect(dbUrl);
  try {
    const db=await client.db('b1');
    let user=await db.collection('users').find({email:req.body.email}).toArray();
    if(user.length > 0)
    {
      res.json({
        statusCode:400,
        message:"user already exists"
      })
    }else{
      let document=await db.collection('users').insertOne(req.body);
      res.json({
        statusCode:201,
        message:"Signup Successfully",
        data:document
      })
    }
    
  } catch (error) {
    console.log(error)
    res.json({
      statusCode:500,
      message:"Internal Server Error",
    })
  }
}finally{
    client.close();
  }
  
})


router.post('/login')
module.exports = router;
