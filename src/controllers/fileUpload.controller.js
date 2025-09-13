import fs from 'fs'
import {apiSuccessResponse } from '../utility/index.js'
import { randomUUID } from 'crypto'





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
        console.log("file not recived")
        res.send("file not recived")
        res.end()  
    }
}




export default fileUploadController