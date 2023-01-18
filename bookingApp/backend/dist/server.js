"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var adminRoute_1 = require("./routes/adminRoute");
var hotelsRoute_1 = require("./routes/hotelsRoute");
var roomsRoute_1 = require("./routes/roomsRoute");
var usersRoute_1 = require("./routes/usersRoute");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var app = express_1["default"]();
var port = process.env.PORT || 4000;
require('dotenv').config();
// app.use(cors());
app.use(cookieParser());
app.use(express_1["default"].json());
app.use(cors());
mongoose_1["default"].set('strictQuery', false);
var mongodb = process.env.MONGO;
mongoose_1["default"].connect(mongodb).then(function (res) {
    console.log("Connected to DB");
})["catch"](function (err) {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
app.use("/admin", adminRoute_1["default"]);
app.use("/hotels", hotelsRoute_1["default"]);
app.use("/rooms", roomsRoute_1["default"]);
app.use("/users", usersRoute_1["default"]);
app.listen(port, function () {
    return console.log("Server is listening at port:" + port + " \uD83D\uDD25");
});
