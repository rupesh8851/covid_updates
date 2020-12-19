const postroute=require("express").Router()
const creatNewPost=require("../../controller/posts").createNewPost
const getAllPost=require("../../controller/posts").findAllPosts
const mypost=require("../../controller/posts").findpostsById
postroute.get("/", async (req,res)=>{

    const posts= await getAllPost()

    res.status(200).send(posts)

})

postroute.get("/myposts", async (req,res)=>{

     var i=parseInt(req.query.userId)
    const posts= await mypost(i)

    res.status(200).send(posts)

})


postroute.get("/abc", async (req,res)=>{
    
    //console.log(parseInt(req.body.userId) + "  " +req.body.title)
   
    const userId=parseInt(req.query.userId)
    const  title=req.query.title
    const  body=req.query.body
    
   if((!userId) || (!title) || (!body) )
   {
       res.status(400).send({
           error:" userid or title or body either one of them id invalid" 
       })
   }
         
         const posts= await creatNewPost(userId,title,body)
         res.status(200).send(posts)

} )


expots=module.exports={
    postroute
}