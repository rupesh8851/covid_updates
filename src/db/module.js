const sequelize=require("sequelize");

const db=new sequelize("cbsocialmediadb","cbsocialuser","mypass",{

    host : "localhost",
    dialect: 'mysql'
})

const col_ID_Def={
   type : sequelize.DataTypes.INTEGER,
   autoIncrement: true,
    primaryKey:true
}

const col_title_Def={
    type:sequelize.DataTypes.STRING(140),
    allowNull:false
}


const users=db.define("users",  {
    id:col_ID_Def,
    username:{
        type:sequelize.DataTypes.STRING(30),
        unique :true,
        allowNull:false
    }

});

const posts=db.define("posts",  {
    id:col_ID_Def,
    title : col_title_Def,
    body:{
        type:sequelize.DataTypes.TEXT,
        allowNull:false
    }

});


const comments=db.define("comments",  {
    id:col_ID_Def,
    title : col_title_Def,
    body:{
        type:sequelize.DataTypes.TEXT("tiny"),
        allowNull:false
    }
});

users.hasMany(comments)
comments.belongsTo(users)

users.hasMany(posts)
posts.belongsTo(users)



posts.hasMany(comments)
comments.belongsTo(posts)

exports=module.exports={
    db,
    users,posts,comments
}




