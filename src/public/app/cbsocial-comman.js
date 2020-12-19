$(()=>{

$("#navbar").load("/components/navbar.html",loginifrequired)
$("#footerbar").load("/components/footer.html")
$("#content").load("/components/all_article.html")

})


function loginifrequired(){

  window.currentuser= window.localStorage.user? JSON.parse(window.localStorage.user):null
  
  if(!currentuser)
  {
      $.post("/api/users",{},(user)=>{
          console.log("registered current user as ",user.username)
          window.localStorage.user=JSON.stringify(user)
          currentuser=user;
          $("#nav-username").text(currentuser.username)
      })


  }else{

     console.log("resuming session as "+currentuser.username+"  "+ currentuser.id)
     $("#nav-username").text(currentuser.username)
  }

}

