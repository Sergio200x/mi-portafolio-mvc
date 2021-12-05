const express = require("express");
const { dirname } = require("path");
const app = express();
const port =3030
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const routes = require('./routers/home.js');
const routesabout = require('./routers/about.js');


app.use("/", routes)
app.use("/", routesabout)


app.listen(process.env.PORT||port,()=>{console.log("servidor activo en "+port)})