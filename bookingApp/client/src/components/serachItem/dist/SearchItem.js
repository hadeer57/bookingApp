"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../serachItem/SearchItem.css");
var SearchItem = function (_a) {
    var item = _a.item;
    var navigate = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("div", { className: "searchItem" },
        react_1["default"].createElement("img", { src: item.images[0], alt: "", className: "siImg" }),
        react_1["default"].createElement("div", { className: "siDesc" },
            react_1["default"].createElement("h1", { className: "siTitle" }, item.name),
            react_1["default"].createElement("span", { className: "siDistance" },
                item.distanceFromCenter,
                "m from center"),
            react_1["default"].createElement("span", { className: "siTaxiOp" }, "Free airport taxi"),
            react_1["default"].createElement("span", { className: "siSubtitle" }, "Studio Apartment with Air conditioning"),
            react_1["default"].createElement("span", { className: "siFeatures" }, item.description),
            react_1["default"].createElement("span", { className: "siCancelOp" }, "Free cancellation "),
            react_1["default"].createElement("span", { className: "siCancelOpSubtitle" }, "You can cancel later, so lock in this great price today!")),
        react_1["default"].createElement("div", { className: "siDetails" },
            item.rating && react_1["default"].createElement("div", { className: "siRating" },
                react_1["default"].createElement("span", null, "Excellent"),
                react_1["default"].createElement("button", null, item.rating)),
            react_1["default"].createElement("div", { className: "siDetailTexts" },
                react_1["default"].createElement("span", { className: "siPrice" },
                    "$",
                    item.cheapestPrice),
                react_1["default"].createElement("span", { className: "siTaxOp" }, "Includes taxes and fees"),
                react_1["default"].createElement("button", { onClick: function () { return navigate("/hotels/" + item._id); }, className: "siCheckButton" }, "See availability")))));
};
exports["default"] = SearchItem;
