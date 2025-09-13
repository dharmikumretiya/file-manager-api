import multer from "multer"


// telling multer to where to store and setitng file limties 
const multerConfig = {
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }
}

// calling multer factory function to make middle ware function
const upload = multer(multerConfig)
const fileUploadMiddleWare  = upload.single('file')

export default fileUploadMiddleWare