"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var HotelSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    location: {
        country: { type: String, required: true },
        city: { type: String, required: true },
        adress: { type: String, required: true }
    },
    distanceFromCenter: {
        type: String,
        required: true
    },
    images: {
        type: [String]
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    rooms: {
        type: [String],
        required: true
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        "default": false
    }
});
var HotelModel = mongoose_1["default"].model("hotel", HotelSchema);
exports["default"] = HotelModel;
