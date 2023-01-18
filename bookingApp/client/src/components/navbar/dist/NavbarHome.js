"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../navbar/Navbar.css");
var NavbarHome = function () {
    var navigate = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("div", { className: "navbarHome" },
        react_1["default"].createElement("div", { className: "navwrapper" },
            react_1["default"].createElement("button", { onClick: function () { return navigate('/booking'); }, className: "logo" }, "AdventureBooking"),
            react_1["default"].createElement("div", { className: "navItems" },
                react_1["default"].createElement("button", { onClick: function () { return navigate('/'); }, className: "navButton" }, "Logout")))));
};
exports["default"] = NavbarHome;
