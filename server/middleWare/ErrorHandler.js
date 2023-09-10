// wrong route Error
const NotFound = (req , res ) => {
    res.status(404).json({error : `Route -${req.originalUrl} does not exist `})
}


class CustomApiError extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (message, statusCode) =>{
   return new CustomApiError(message , statusCode) 
}



const ErrorHandler = (err,req,res,next) => {
    console.log(err);
    if (err instanceof CustomApiError) {
       return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg : 'something went wrong ! Try again later'})
}

module.exports = {NotFound , ErrorHandler , CustomApiError , createCustomError}