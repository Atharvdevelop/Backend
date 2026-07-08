const User = require('../Models/UserModel');
const CreateUser = async (req,res) => {
    try{
        const{username,email,password}=req.body;
        const newuser = await User.create({username,email,password});
        res.status(201).json(newuser);

    }
    catch(err){
        console.log(err);
        res.status(500).json({message:'Internal Server Error'})
    }
};
// This is a universal code can be use anywhere to send whole code body

//const CreareUser = async (req,res)=> {
  //  try {
    //    const newuser = await User.Create(req.body);
      //  res.status(201).json(newspaper);
  //  }
  //  catch (error){
    //    res.status(500).json({error :error.message});
   // }
//}


const GetAllUser = async (req,res) => {
    try{
        const users = await User.findAll();
        res.status(200).json(users);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:'Internal Server Error'})
    }
};

module.exports = {CreateUser,GetAllUser};