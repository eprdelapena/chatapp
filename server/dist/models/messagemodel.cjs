"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model, models } = mongoose_1.default;
const MessageSchema = new Schema({
    creator: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    roomId: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.messages = models.Messages || model("messages", MessageSchema);
