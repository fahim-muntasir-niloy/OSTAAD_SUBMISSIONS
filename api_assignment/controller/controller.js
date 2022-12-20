
// write to body
exports.hello = async (req, res) => {
   res.status(200).json({
    status :'Connected',
    data :'Rest API Controller.'
   })
}

// query taken from the URL
exports.query = async (req,res)=>{
    res.status(200)

    let name = req.query.name
    let course = req.query.course

    res.send(`Student Name: ${name}, Enrolled In: ${course}`)

}
