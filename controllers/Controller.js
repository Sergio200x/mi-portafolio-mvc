
const { dirname } = require('path')
const path =require('path')
const controller =
{ 
    main:  (res, resp)=> resp.sendFile(path.join(__dirname,"../views/home.html")) ,
    about:(res, resp)=> resp.sendFile(path.join(__dirname,"../views/about.html"))
}




module.exports= controller