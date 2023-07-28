var express = require("express"); 
var app = express(); 
var http = require("http").createServer(app); 
var io = require("socket.io")(http); 

//conexao com o cliente
//socket é o cara que está se conectando com a aplicação naquele momento.
io.on("connection",(socket) => {

    socket.on("disconnect", (socket) => {
        console.log("fulano desconectou: " +  socket.id);
    })

    socket.on("msg", (data) => {
        io.emit("showmsg", data);
        console.log(data);
    });

});

app.set("view engine","ejs"); 

app.get("/", (req, res) => {
    res.render("index");
})

http.listen(3000, () => {
    console.log("app rodando hein!");
})