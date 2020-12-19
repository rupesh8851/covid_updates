
const Users=require("../db/module").users
const getUser=require("../utils/username").ranusernamegen

async function createAnonUsers(){
 
     const user =await Users.create({
         username : getUser()
     })

      return user
}

async function getById(id)
{
    return await Users.findOne({where :{id}})
}

async function getByUsername(username)
{
    return await Users.findOne({where :{username}})
}

exports=module.exports={
    createAnonUsers,getById,getByUsername
}

// async function task(){
//   console.log(await  getUser())
//   console.log(await  getUser())
//   console.log(await  getUser())
//   console.log(await  getUser())
//   console.log(await  getUser())

//   console.log(await createAnonUsers())
//   console.log("-----------------------------")
//   console.log(await createAnonUsers())
//   console.log("-----------------------------")
//   console.log(await createAnonUsers())
//   console.log("-----------------------------")
//   console.log(await createAnonUsers())
//   console.log("-----------------------------")



// }

// task();