"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema, model = mongoose_1.default.model, models = mongoose_1.default.models;
var MessageSchema = new Schema({
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
