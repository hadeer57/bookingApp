"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_router_dom_1 = require("react-router-dom");
require("react-date-range/dist/styles.css"); // main style file
require("react-date-range/dist/theme/default.css"); // theme css file
require("../header/Header.css");
var HeaderHotels = function () {
    var navigate = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("div", { className: "headerHotels" },
        react_1["default"].createElement("div", { className: "headerWrapper" },
            react_1["default"].createElement("div", { className: "headerList" },
                react_1["default"].createElement("div", { className: "headerListItem active" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBed }),
                    react_1["default"].createElement("button", { onClick: function () { return navigate('/booking'); } }, "Stays")),
                react_1["default"].createElement("div", { className: "headerListItem" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlane }),
                    react_1["default"].createElement("button", { onClick: function () { return navigate('/animation'); } }, "Flights")),
                react_1["default"].createElement("div", { className: "headerListItem" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCar }),
                    react_1["default"].createElement("button", { onClick: function () { return navigate('/animation'); } }, "Car rental")),
                react_1["default"].createElement("div", { className: "headerListItem" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTree }),
                    react_1["default"].createElement("button", { onClick: function () { return navigate('/animation'); } }, "Attractions")),
                react_1["default"].createElement("div", { className: "headerListItem" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTaxi }),
                    react_1["default"].createElement("button", { onClick: function () { return navigate('/animation'); } }, "Airport Taxies"))))));
};
exports["default"] = HeaderHotels;
