const signup=(req,res,next) =>{
  res.json({
    status:'success',
    message:'Signup successful'
  })
}

module.exports = {signup}