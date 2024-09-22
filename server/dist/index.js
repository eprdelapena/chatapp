// server.ts
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import cors from 'cors';
// Define a message schema
const messageSchema = new mongoose.Schema({
    roomId: { type: String, required: true },
    message: { type: String, required: true },
    creator: { type: String, required: true },
});
const Message = mongoose.model('Message', messageSchema);
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server);
// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URI);
io.on('connection', (socket) => {
    console.log('New client connected');
    // Handle joining a room
    socket.on('join-room', async (roomId) => {
        socket.join(roomId);
        const messages = await Message.find({ roomId });
        socket.emit('chat-history', messages);
    });
    // Handle sending messages
    socket.on('send-message', async (messageData) => {
        const newMessage = new Message(messageData);
        await newMessage.save();
        io.to(messageData.roomId).emit('receive-message', newMessage);
    });
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});
// Start the server
server.listen(8080, () => {
    console.log('Server is running on port 8080');
});
