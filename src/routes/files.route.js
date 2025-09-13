import express from 'express'
import { fileUploadController } from '../controllers/index.js'
import { fileUploadMiddleWare } from '../middlewares/index.js'

// getting router object of epxress
const router = express.Router()


// getting specific file
//router.get('/:id', FileGetMiddleWare, FileGetController)
// getting all files
//router.get('/', FileGetAllMiddleWare, FileGetAllController)
// uploading a  file
router.post('/', fileUploadMiddleWare, fileUploadController)
// updating a file (small update)
//router.patch('/:id', FilePatchMiddleWare, FilePatchController)
// updating a file 
//router.put('/:id',FileUpdateMiddleWare,FileUpdateController)
// deleting a file
//router.delete('/:id',FileDeleteMiddleWare,FileDeleteController)


// export one thing and you can change its name because it is one thing 
export default router