var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var clients = {};

io.on("connection", (socket) => {
  console.log("new connection", socket.id);
  socket.emit("msg", "Seja bem vindo!");
  socket.broadcast.emit("msg", "Seja bem vindo!");
  socket.emit("msg", "Digite 9 para receber os possiveis sintomas!");
  socket.broadcast.emit("msg", "Digite 9 para receber os possiveis sintomas!");
  socket.on("msg", (e) => {
    socket.broadcast.emit("msg", e);
    socket.emit("msg", e);

    switch (e) {
      case "9":
        socket.emit(
          "msg",
          "1. Dor de cabeca \r\n 2. Febre \r\n 3. Tosse Seca \r\n 4. Perda de olfato \r\n 5. Perda de paladar"
        );
        socket.broadcast.emit(
          "msg",
          "1. Dor de cabeca \r\n 2. Febre \r\n 3. Tosse Seca"
        );
        socket.emit("msg", "Digite o codigo correspondete a seu sintoma!");
        socket.broadcast.emit(
          "msg",
          "Digite o codigo correspondente a seu sintoma!"
        );
        break;
      case "1":
        socket.emit(
          "msg",
          "Este sintoma é compativel com covid-19, mas também com um resfriado comum, procure ajuda médica!"
        );
        socket.broadcast.emit("msg", "Provavelmente é covid");
        break;
      case "2":
        socket.emit(
          "msg",
          "Este sintoma é compativel com covid-19, mas também com um resfriado comum, procure ajuda médica!"
        );
        socket.broadcast.emit("msg", "Provavelmente é covid");
        break;
      case "3":
        socket.emit(
          "msg",
          "Este sintoma é compativel com covid-19, mas também com um resfriado comum, procure ajuda médica!"
        );
        socket.broadcast.emit("msg", "Provavelmente é covid");
        break;
      case "4":
        socket.emit(
          "msg",
          "Este sintoma é compativel com covid-19, procure ajuda médica!"
        );
        socket.broadcast.emit("msg", "Provavelmente é covid");
        break;
      case "5":
        socket.emit(
          "msg",
          "Este sintoma é compativel com covid-19, procure ajuda médica!"
        );
        socket.broadcast.emit("msg", "Provavelmente é covid");
        break;

      default:
        socket.emit("msg", "Desculpa, nao entendi :(");
        socket.broadcast.emit("msg", "Desculpa, nao entendi :(");
    }
    // if (e === "1") {
    //   socket.emit("msg", "1. Dor de cabeca \r\n 2. Febre \r\n 3. Tosse Seca");
    //   socket.broadcast.emit(
    //     "msg",
    //     "1. Dor de cabeca \r\n 2. Febre \r\n 3. Tosse Seca"
    //   );
    // }
    // if (e === "2") {
    //   socket.emit("msg", "Provavelmente é covid");
    //   socket.broadcast.emit("msg", "Provavelmente é covid");
    // }
  });
});

http.listen(3000, function () {
  console.log("listening on port 3000");
});
