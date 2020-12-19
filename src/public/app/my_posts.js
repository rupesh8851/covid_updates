function getAllposts(){

    let userId=JSON.parse(window.localStorage.user).id;
    $.get("/api/posts/myposts",{userId},(posts)=>{
  
       for(let p of posts)
       {
         $("#articles").append(`
         <div class="col-4 ">
          <div class="card m-2" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${p.title}</h5>
           <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
           <p class="card-text">${p.body}</p>
           <a href="#" class="card-link">Read More</a>
           <a href="#" class="card-link">Like</a>
         </div>
       </div>
       </div>`)
       }
      
    })
  
  }
  

  