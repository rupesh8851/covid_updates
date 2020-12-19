function getAllposts(){


    $.get("/api/posts",(posts)=>{
  
       for(let p of posts)
       { 
                try{
                  if(p.body.length>200)
                  {
                    
                    $("#articles").append(`
         <div class="col-4 ">
          <div class="card m-2" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${p.title}</h5>
           <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
           <p class="card-text">${p.body.substring(200)}.... <div id="demo" class="collapse">
           ${p.body.substring(200,p.body.length)}
         </div>
         <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Read More</button>
           </p>
           <a href="#" class="card-link">Like</a>
           <a href="#" class="card-link">Comment</a>
         </div>
       </div>
       </div>`)



                  }else{
                    
                    $("#articles").append(`
         <div class="col-4 ">
          <div class="card m-2" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${p.title}</h5>
           <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
           <p class="card-text">${p.body}</p>
           <a href="#" class="card-link">Like</a>
           <a href="#" class="card-link">Comment</a>
         </div>
       </div>
       </div>`)




                  }    

                }catch(err)
                {
                  console.log("there is some issue in creating that article")
                }        
 

        

       }
      
    })
  
  }
  

  