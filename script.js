import express from "express" ;   //in "double quotes" it is package and importing the modules or packages 
import {fileURLToPath}from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();  //initialization and function calling
app.get("/" , function(req,res){
    res.sendFile(__dirname+"/index.html");  //we use absolute path in server
});






app.listen(3000, function(){

    console.log("Server started on port number 3000");
})