const app = require("./src/app")
require("dotenv").config();
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateContent = require("./service/ai.service");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
    // ...
    
    console.log("A User Connected");

    socket.on("disconnect", () => {
        console.log("A User Disconnected");
    });

    socket.on("ai-message", async(data) => { 
        console.log("Received message from client: ", data);
        const response = await generateContent(data);
        console.log("AI Response: ", response);
        socket.emit("ai-message-response", { response });
    })
});

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});