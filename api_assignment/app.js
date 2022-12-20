const express = require("express");
const app = express();

const router = require('./routes/up.route')
const controller = require('./controller/controller')

// everything from router
app.use('/router',router)

// from controller
app.use('/hello',controller.hello)
app.use('/query',controller.query)

// undefined route
app.use('*',(req,res)=>{
    res.status(404).json({
        status:'not connected',
        data:'No end point found'
    })
})

module.exports = app;