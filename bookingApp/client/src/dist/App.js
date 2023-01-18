"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Booking_1 = require("./pages/booking/Booking");
var Home_1 = require("./pages/home/Home");
var List_1 = require("./pages/list/List");
var Login_1 = require("./pages/login/Login");
var Register_1 = require("./pages/register/Register");
var GoogleMapParis_1 = require("./pages/googleMap/GoogleMapParis");
var HotelParis_1 = require("./pages/hotel/HotelParis");
var AnimationPage_1 = require("./pages/animationPage/AnimationPage");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/booking", element: react_1["default"].createElement(Booking_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/hotels", element: react_1["default"].createElement(List_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/hotels/paris", element: react_1["default"].createElement(HotelParis_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(Login_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/register", element: react_1["default"].createElement(Register_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/navigation/paris", element: react_1["default"].createElement(GoogleMapParis_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/animation", element: react_1["default"].createElement(AnimationPage_1["default"], null) })))));
}
exports["default"] = App;
