const errorResponder=(err,req,res,next)=>{
  console.log(err,'err')
    if(err.statusCode==401){
     return res.status(401).json({
        errorMessage:err.message
      })
    }else if(err.statusCode==403){
     return res.status(403).json({
        errorMessage:err.message
      })
    }
    else if(err.statusCode==406){
     return res.status(406).json({
        errorMessage:err.message
      })
    } else if(err.statusCode==404){
      return res.status(406).json({
         errorMessage:err.message
       })
     }else{
     return res.status(500).json({
        errorMessage:err.message
      })
    }
    
    
  }


  module.exports={
errorResponder,    
}
  