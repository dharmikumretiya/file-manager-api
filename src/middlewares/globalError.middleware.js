import { apiErrorResponse } from "../utility/index.js"


function globalErrorHandler(err,req,res,) {

        res.status(err.status)
           .json(new apiErrorResponse(
                err.status
                , err.message
                , err.error
               , {
                   timestamp: Date.now()
               }
        ))
        
}



export default globalErrorHandler