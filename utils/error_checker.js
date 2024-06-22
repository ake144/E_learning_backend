const checkError=(fun)=>{
    return function(req,res,next){
      return fun(req,res,next).catch(next)
    }
  }



  module.exports={
    checkError,
  }