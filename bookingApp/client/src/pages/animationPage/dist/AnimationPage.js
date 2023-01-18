"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NavbarHome_1 = require("../../components/navbar/NavbarHome");
require("../animationPage/AnimationPage.css");
var Animation = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "body" },
            react_1["default"].createElement(NavbarHome_1["default"], null),
            react_1["default"].createElement("div", { className: "night" },
                react_1["default"].createElement("div", { className: "surface" }),
                react_1["default"].createElement("div", { className: "car" },
                    react_1["default"].createElement("img", { src: require('../animationPage/imgs/Img_06.png'), alt: "" })),
                react_1["default"].createElement("div", { className: "note" }, "Sorry we still working on this page, coming soon")))));
};
exports["default"] = Animation;
