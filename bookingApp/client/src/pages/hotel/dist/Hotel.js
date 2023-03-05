"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../hotel/Hotel.css");
var HeaderHotels_1 = require("../../components/header/HeaderHotels");
var Navbar_1 = require("../../components/navbar/Navbar");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_router_dom_1 = require("react-router-dom");
var UseFetch_1 = require("../../hooks/UseFetch");
var Hotel = function () {
    var _a;
    var navigate = react_router_dom_1.useNavigate();
    var _b = react_1.useState(0), slideNumber = _b[0], setSlideNumber = _b[1];
    var _c = react_1.useState(false), open = _c[0], setOpen = _c[1];
    var _d = react_1.useState([]), hotel = _d[0], setHotel = _d[1];
    // const [openModal, setOpenModal] = useState(false);
    var id = react_router_dom_1.useParams().id;
    var data = UseFetch_1["default"]("/hotels/get-hotel/" + id).data;
    console.log(data);
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
    // const handleClick = () => {
    //   if (user) {
    //     setOpenModal(true);
    //   } else {
    //     navigate("/login");
    //   }
    // };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(HeaderHotels_1["default"], null),
        react_1["default"].createElement("div", { className: "hotelContainer" },
            open && (react_1["default"].createElement("div", { className: "slider" },
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleXmark, className: "close", onClick: function () { return setOpen(false); } }),
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleArrowLeft, className: "arrow", onClick: function () { return handleMove("l"); } }),
                react_1["default"].createElement("div", { className: "sliderWrapper" },
                    react_1["default"].createElement("img", { src: data.images[slideNumber], alt: "", className: "sliderImg" })),
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleArrowRight, className: "arrow", onClick: function () { return handleMove("r"); } }))),
            react_1["default"].createElement("div", { className: "hotelWrapper" },
                react_1["default"].createElement("button", { className: "bookNow" }, "Reserve or Book Now!"),
                react_1["default"].createElement("h1", { className: "hotelTitle" }, data.name),
                react_1["default"].createElement("div", { className: "hotelAddress" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faLocationDot }),
                    react_1["default"].createElement("span", null, data.address)),
                react_1["default"].createElement("span", { className: "hotelDistance" },
                    "Excellent location \u2013 ",
                    data.distanceFromCenter,
                    "m from center"),
                react_1["default"].createElement("span", { className: "hotelPriceHighlight" },
                    "Book a stay over $",
                    data.cheapestPrice,
                    " at this property and get a free airport taxi"),
                react_1["default"].createElement("div", { className: "hotelImages" }, (_a = data.images) === null || _a === void 0 ? void 0 : _a.map(function (i) { return (react_1["default"].createElement("div", { className: "hotelImgWrapper", key: i },
                    react_1["default"].createElement("img", { onClick: function () { return handleOpen(i); }, src: data.images, alt: "", className: "hotelImg" }))); })),
                react_1["default"].createElement("div", { className: "hotelDetails" },
                    react_1["default"].createElement("div", { className: "hotelDetailsTexts" },
                        react_1["default"].createElement("h1", { className: "hotelTitle" }, data.title),
                        react_1["default"].createElement("p", { className: "hotelDesc" }, data.description)),
                    react_1["default"].createElement("div", { className: "hotelDetailsPrice" },
                        react_1["default"].createElement("span", null, "Located in the real heart of Krakow, this property has an excellent location score of 9.8!"),
                        react_1["default"].createElement("h2", null))))))
    //     );
    //   };
    );
};
exports["default"] = Hotel;
