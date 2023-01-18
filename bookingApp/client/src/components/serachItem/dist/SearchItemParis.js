"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../serachItem/SearchItem.css");
var SearchItem = function () {
    var navigate = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("div", { className: "searchItem" },
        react_1["default"].createElement("img", { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160701344.jpg?k=fc62b5f1cb6500a2e70cc3cc2bfa8075b14781943c3a35d49ddb2bbde74c2801&o=&hp=1", alt: "", className: "siImg" }),
        react_1["default"].createElement("div", { className: "siDesc" },
            react_1["default"].createElement("h1", { className: "siTitle" }, "Pullman Paris Tour Eiffel"),
            react_1["default"].createElement("span", { className: "siDistance" }, "500m from center"),
            react_1["default"].createElement("span", { className: "siTaxiOp" }, "Free airport taxi"),
            react_1["default"].createElement("span", { className: "siSubtitle" }, "Studio Apartment with Air conditioning"),
            react_1["default"].createElement("span", { className: "siFeatures" }, "The 4-star hotel Pullman Paris Tour Eiffel is set at the foot of the Eiffel Tower and the Trocadero."),
            react_1["default"].createElement("span", { className: "siCancelOp" }, "Free cancellation "),
            react_1["default"].createElement("span", { className: "siCancelOpSubtitle" }, "You can cancel later, so lock in this great price today!")),
        react_1["default"].createElement("div", { className: "siDetails" },
            react_1["default"].createElement("div", { className: "siRating" },
                react_1["default"].createElement("span", null, "Excellent"),
                react_1["default"].createElement("button", null, "8.2")),
            react_1["default"].createElement("div", { className: "siDetailTexts" },
                react_1["default"].createElement("span", { className: "siPrice" }, "100$"),
                react_1["default"].createElement("span", { className: "siTaxOp" }, "Includes taxes and fees"),
                react_1["default"].createElement("button", { onClick: function () { return navigate('/hotels/paris'); }, className: "siCheckButton" }, "See availability"),
                react_1["default"].createElement("button", { className: "siCheckButton", onClick: function () { return navigate('/navigation/paris'); } }, "See on Google MAp")))));
};
exports["default"] = SearchItem;
