import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("playerMove", (move) => {
   
    io.emit("playerMove", move);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = 5500;
server.listen(PORT, () => {
  console.log(` Server : http://localhost:${PORT}`);
  console.log(` Game:       http://localhost:${PORT}/game-rps.html`);
  console.log(` Controller: http://localhost:${PORT}/controller-rps.html`);
});
