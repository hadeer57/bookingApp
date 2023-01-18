"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var RoomSchema = new mongoose_1["default"].Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    images: {
        type: [String]
    },
    description: {
        type: String,
        required: true
    },
    roomNumbers: [{
            number: Number,
            unavailabeDates: { type: [Date] }
        }]
});
var RoomModel = mongoose_1["default"].model("room", RoomSchema);
exports["default"] = RoomModel;
