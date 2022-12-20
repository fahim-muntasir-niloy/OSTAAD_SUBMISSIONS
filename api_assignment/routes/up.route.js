const express = require("express")
const multer = require("multer")
const path = require("path")

// router instance
const router = express.Router()

router.all('/v1', (req,res,next)=>{
    res.send('from router/v1')
    next()
})

// file download
router.get('/download', (req, res) => {
    res.append("image","cat with computer")
    res.download("./image/cat with computer.jpg")
});
 


// file upload method with multer
//! storage
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'./uploads')
    },

    fileName : (req,file,cb)=>{
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

//! upload
const upload = multer({
    storage : storage,
    fileFilter:(req,file,cb) =>{
        // console.log(file);

        if(file.mimetype === 'image/png'|| file.mimetype === 'image/jpg')
        {
            cb(null,true)
        }
        else{
            cb(new Error ("Only jpg Png allowed"))
        }
    }
    }).single('upload')

// POST method for file upload
router.post('/file',(req,res)=>{
    upload(req,res,err=>{
        if(err){
            res.send('Only jpg Png allowed')
        }
        else{
            res.send('Upload Success')
        }
    })
})



module.exports = router;