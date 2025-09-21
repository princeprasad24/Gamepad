// const express = require("express");
// const path = require("path");
// const http = require("http");
// const { Server } = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server); 

// const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, "../dist")));
// app.use('/games', express.static(path.join(__dirname, '../src/assets/games')));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist/index.html"));
// });

// app.get('/games/rpsgame', (req, res) => {
//   res.sendFile(path.join(__dirname, '../src/assets/games/RockPaperScissors/index.html'));
// });


// app.get('/rps-controller', (req, res) => {
//   res.sendFile(path.join(__dirname, '../src/assets/games/RockPaperScissors/controller-rps.html'));
// });


// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);

//   socket.on("controller-choice", (choice) => {
//     console.log(`Controller chose: ${choice}`);
//     io.emit("game-choice", { id: socket.id, choice });
//   });

//   socket.on("reset-game", () => {
//     io.emit("reset-game");
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   }); 
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
