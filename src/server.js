const express=require("express")

const db=require("./db/module").db
const app=express();
const path=require("path")
const userRoute=require("./routes/users").userroute;
const postRoute=require("./routes/posts").postroute;

app.use("/",express.static(path.join(__dirname,"public")))
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use(express.urlencoded({extended:true}))


db.sync().then(()=>{

    app.listen(4042,()=>{
        console.log("server is started on http://localhost4042")
    })

}).catch((err)=>{
    console.error(new Error("database could not start"))
    console.error(err)
})

