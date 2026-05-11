import { log } from "node:console"; 
import { create } from "node:domain";
import { createServer, IncomingMessage, Server } from "node:http";

const server : Server = createServer((req: IncomingMessage,res)=>{
    //console.log(req.url); //,'/', ' /user'
    //console.log(req.method); // "Get" ," Post", " Delete"

    const url = req.url
    const method = req.method

    if(url === '/' && method ==="GET"){
        //console.log("  This is Root route");
        res.writeHead(200,{"content-type" : "application/json"},);
        res.end( JSON.stringify ({ message: " This  is root Route"}));

    }else if(url?.startsWith('/products')){
        res.writeHead(200,{"content-type" : "application/json"},);
        res.end( JSON.stringify ({ message: " This  is product Route"}));
    }else{
        
        res.writeHead(404, {"content-type" : " application/json "});
        res.end( JSON.stringify ({ message: "  Route not found"}));


    }
})

server.listen(5001,() => {
    console.log("server is runinng on the 5001");
})


