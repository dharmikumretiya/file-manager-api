import fs from 'fs'
import {apiSuccessResponse } from '../utility/index.js'
import { randomUUID } from 'crypto'
import {GlobalError} from '../utility/index.js'
import { error } from 'console'





function fileUploadController(req, res) {

    
    if (req.file?.buffer) {
        
        try {
            fs.writeFileSync('src/repositories/storage/' + req.file.originalname, req.file.buffer)
            res.status(201).json(new apiSuccessResponse(
                "201",
                'resource created',
                {
                filename: req.file.originalname,
                uuid: randomUUID()
                },
                {
                    
            }))
            res.end()
        }
        catch (err) {
            console.log("file upload error : ", err)
            res.send("file upload error")
            res.end()
        }
    }
    else {
        throw new GlobalError(400,"client error",error)
    }
}




export default fileUploadController