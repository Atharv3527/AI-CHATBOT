const app = require("./src/app")
require("dotenv").config();
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateContent = require("./service/ai.service");

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
  }
});


const chatHistory = [];
io.on("connection", (socket) => {
    
    console.log("A User Connected");

    socket.on("disconnect", () => {
        console.log("A User Disconnected");
    });

    socket.on("ai-message", async(data) => { 
        console.log("Received message from client: ", data);

        chatHistory.push({
            role: "user",
            parts: [{ text: data }]
        });
        const response = await generateContent(chatHistory);
        

        chatHistory.push({
            role: "model",
            parts: [{ text: response }]
        });
        socket.emit("ai-message-response", { response });
    })
});

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});