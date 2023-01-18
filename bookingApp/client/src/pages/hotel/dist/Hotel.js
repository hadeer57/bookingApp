"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../hotel/Hotel.css");
var HeaderHotels_1 = require("../../components/header/HeaderHotels");
var Navbar_1 = require("../../components/navbar/Navbar");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_2 = require("react");
var Hotel = function () {
    var _a = react_2.useState(0), slideNumber = _a[0], setSlideNumber = _a[1];
    var _b = react_2.useState(false), open = _b[0], setOpen = _b[1];
    var photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/378394358.jpg?k=da22854728987ae70675e6584ff3b761d57f7bd44c9d0ee63034a8ead2af342e&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/160701344.jpg?k=fc62b5f1cb6500a2e70cc3cc2bfa8075b14781943c3a35d49ddb2bbde74c2801&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312032261.jpg?k=03fa2ff65255a31e3111cbd533bd287ad91a2c2e38749621a8c1c3d7efff3731&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312032310.jpg?k=75a2b07e35e4b03bc5ac1dec0f7dbbe0966d79cabace0ae6f40d1d320d418959&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/landmark/max1024/204733.webp?k=0e71c524a0dfb4777735ba5fdd38ff7dacfcbe8fe64df559e9f88739a744f017&o="
        },
        {
            src: "https://cf.bstatic.com/xdata/images/landmark/max1024/241703.webp?k=46de0e6887736db3fd694288faf6223dbdc2a1c47513ecbea913cc76faef2bed&o="
        },
    ];
    var handleOpen = function (i) {
        setSlideNumber(i);
        setOpen(true);
    };
    var handleMove = function (direction) {
        var newSlideNumber;
        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        }
        else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(HeaderHotels_1["default"], null),
        react_1["default"].createElement("div", { className: "hotelContainer" },
            open && (react_1["default"].createElement("div", { className: "slider" },
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleXmark, className: "close", onClick: function () { return setOpen(false); } }),
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleArrowLeft, className: "arrow", onClick: function () { return handleMove("l"); } }),
                react_1["default"].createElement("div", { className: "sliderWrapper" },
                    react_1["default"].createElement("img", { src: photos[slideNumber].src, alt: "", className: "sliderImg" })),
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleArrowRight, className: "arrow", onClick: function () { return handleMove("r"); } }))),
            react_1["default"].createElement("div", { className: "hotelWrapper" },
                react_1["default"].createElement("button", { className: "bookNow" }, "Reserve or Book Now!"),
                react_1["default"].createElement("h1", { className: "hotelTitle" }, "Pullman Paris Tour Eiffel"),
                react_1["default"].createElement("div", { className: "hotelAddress" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faLocationDot }),
                    react_1["default"].createElement("span", null, "eiffel tower paris")),
                react_1["default"].createElement("span", { className: "hotelDistance" }, "Excellent location \u2013 500m from center"),
                react_1["default"].createElement("span", { className: "hotelPriceHighlight" }, "Book a stay over $114 at this property and get a free airport taxi"),
                react_1["default"].createElement("div", { className: "hotelImages" }, photos.map(function (photo, i) { return (react_1["default"].createElement("div", { className: "hotelImgWrapper", key: i },
                    react_1["default"].createElement("img", { onClick: function () { return handleOpen(i); }, src: photo.src, alt: "", className: "hotelImg" }))); })),
                react_1["default"].createElement("div", { className: "hotelDetails" },
                    react_1["default"].createElement("div", { className: "hotelDetailsTexts" },
                        react_1["default"].createElement("h1", { className: "hotelTitle" }, "Stay in the heart of City"),
                        react_1["default"].createElement("p", { className: "hotelDesc" }, "The 4-star hotel Pullman Paris Tour Eiffel is set at the foot of the Eiffel Tower and the Trocadero. Open 24 hours a day, the fitness room offers cardio equipment, and you can enjoy dining on the terrace at the restaurant, Frame. The property is located 3.1 mi from the Parc des Princes Stadium, only a 10-minute drive away.")),
                    react_1["default"].createElement("div", { className: "hotelDetailsPrice" },
                        react_1["default"].createElement("h1", null, "Perfect for a 3-night stay!"),
                        react_1["default"].createElement("span", null, "Located in the real heart of paris, this property has an excellent location score of 9.8!"),
                        react_1["default"].createElement("h2", null,
                            react_1["default"].createElement("b", null, "$945"),
                            " (9 nights)"),
                        react_1["default"].createElement("button", null, "Reserve or Book Now!")))))));
};
exports["default"] = Hotel;
