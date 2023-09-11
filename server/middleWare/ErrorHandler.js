// wrong route Error
const NotFound = (req , res ) => {
    res.status(404).json({error : `Route -${req.originalUrl} does not exist `})
}

// call Class Error

class CustomApiError extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

//
const createCustomError = (message, statusCode) =>{
   return new CustomApiError(message , statusCode) 
}


// error handler express
const ErrorHandler = (err,_req,res,_next) => {
    console.log(err);
    if (err instanceof CustomApiError) {
       return res.status(err.statusCode).json({msg:err.message})
    }

    // else if (err.name ==='CastError' && err.kind === 'objectId'){
    //     return res.status(404).json({msg : 'Resource notFound'}) 
    // } 
    return res.status(500).json({msg : 'something went wrong ! Try again later'})
}

module.exports = {NotFound , ErrorHandler , CustomApiError , createCustomError}