const Posts =require("../db/module").posts;
const Users=require("../db/module").users;



async function createNewPost(userId, title, body) {
    const post = await Posts.create({
      title,
      body,
      userId,
    })
 
    return post
  }
  
  
  async function findAllPosts() {
    // TODO: Handle query params
    const posts = await Posts.findAll({
        include:[Users]
    })
  
    return posts
  }
  
  async function findpostsById(id) {
    // TODO: Handle query params
    const posts = await Posts.findAll({
        include:[Users],where: {userId: id}
    }).catch((er)=>{
      console.log("No such post exist")
    })
  
    return posts
  }
  /* Test Code */ 
//async function task() {
//     console.log(
//       await createNewPost(
//         1,
//         'This is a sample post',
//         'Body of the post goes here'
//       )
//     ),
//     console.log(
//       await createNewPost(
//         2,
//         'Another sample post',
//         'Some body example here as well'
//       )
//     )
//     const posts = await findAllPosts()
//     for (let p of posts) {
//       console.log(`${p.title}\nauthor:${p.users.username} \n${p.body}\n==========\n`)
//     }
//   }
//   task()
  
  
  module.exports = {
    createNewPost,
    findAllPosts,
    findpostsById  
  }
  