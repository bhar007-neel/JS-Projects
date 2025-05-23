const http = require("http");
const server = http.createServer((req, res) =>{
    console.log(req.url);   // helps us to print what is on our URL

    if(req.url==="/cars"){
        res.end("ching ching")  // res.end helps us to print what is on the screen
    }
     
    else if(req.url==="/fruits"){
        res.end("reminder to eat fruits")
    }
    else{
        res.end("hello")
    }
   
});
server.listen(8000, "localhost", () =>{
   console.log("server is running")
})