"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Feature_1 = require("../../components/feature/Feature");
var Header_1 = require("../../components/header/Header");
var Navbar_1 = require("../../components/navbar/Navbar");
require("../booking/Booking.css");
var Booking = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("div", { className: "homeWrapper" },
            react_1["default"].createElement(Feature_1["default"], null))));
};
exports["default"] = Booking;
