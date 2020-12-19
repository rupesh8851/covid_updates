
$("#btnid").click( ()=>{

   let title=$("#title").val();
   let body=$("#body").val();
    let userId=JSON.parse(window.localStorage.user).id;

     console.log(title +"\n "+ body +"\n  "+" \n "+userId)

   $.get("/api/posts/abc",{userId,title,body},(data)=>{
    
    console.log("-----------------------------------_-----------------")
    console.log(data)
    $("#content").load("/components/all_article.html")      
   })

 
})

