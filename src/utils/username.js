
const ADJECTIVE=[ "devilish","absorbing","natural","responsible","cooked","messy"]

const OBJECT=["balloon","buckel","cinder block","fake flowers" ,"thermometer" ,"milk"]


function ranusernamegen(){

    const adj=ADJECTIVE[Math.floor(Math.random()*6)]
    const obj=OBJECT[Math.floor(Math.random()*5)]

     return `${adj}-${obj}`

}

exports=module.exports={
    ranusernamegen
}



