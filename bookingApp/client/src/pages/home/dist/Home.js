"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../home/Home.css");
var Home = function () {
    var navigate = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("div", { className: 'body' },
        react_1["default"].createElement("div", { className: "wrapper" },
            react_1["default"].createElement("div", { className: "content" },
                react_1["default"].createElement("h1", { className: 'title' }, "Let's Start Our Adventuer Together"),
                react_1["default"].createElement("button", { className: 'btn', onClick: function () { return navigate('./login'); } }, "Login"),
                react_1["default"].createElement("button", { className: 'btn', onClick: function () { return navigate('./register'); } }, "Register")))));
};
exports["default"] = Home;
