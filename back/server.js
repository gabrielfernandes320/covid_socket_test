var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var clients = {};

io.on("connection", (socket) => {
  console.log("new connection", socket.id);
  socket.on("msg", (e) => {
    socket.broadcast.emit("msg", e);
    socket.emit("msg", e);
    if (e === "1") {
      socket.emit("msg", "1. Dor de cabeca \r\n 2. Febre \r\n 3. Tosse Seca");
      socket.broadcast.emit(
        "msg",
        "1. Dor de cabeca \r\n 2. Febre \r\n 3. Tosse Seca"
      );
    }
    if (e === "2") {
      socket.emit("msg", "Provavelmente é covid");
      socket.broadcast.emit("msg", "Provavelmente é covid");
    }
  });
});

http.listen(3000, function () {
  console.log("listening on port 3000");
});
