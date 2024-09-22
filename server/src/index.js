"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var messagemodel_1 = require("./models/messagemodel");
var dotenv = require("dotenv");
dotenv.config();
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
console.log(messagemodel_1.messages);
app.get("/", function (req, res) {
    res.send("Express + TypeScript Server");
});
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
