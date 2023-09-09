
const asyncWrapp =(curr) => {
 return async ( req , res , next ) => {
    try {
        await curr ( req , res , next )
    } catch (error) {
        next (error)
    }
 }
 }

 module.exports = asyncWrapp