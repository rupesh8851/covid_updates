const userroute=require("express").Router()
const createuser=require("../../controller/users").createAnonUsers
const getById=require("../../controller/users").getById
const getByUsername=require("../../controller/users").getByUsername

userroute.get("/:id", async (req,res)=>{
 
    let user;

    if(isNaN(parseInt(req.params.id)))
    {
          user =await getByUsername(req.params.username)
   }else{

    user =await getById(parseInt(req.params.id))
   }

   if(user)
   {
      res.status(200).send(user)
   }else{
    
     res.status(404).send({
         error:" no such user name"
     })

   }   
})

userroute.post("/",async (req,res)=>{

    const user= await createuser()
     
    res.status(201).send(user)
})

expots=module.exports={
    userroute
}