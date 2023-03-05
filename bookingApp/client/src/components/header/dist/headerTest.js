"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_date_range_1 = require("react-date-range");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("react");
var date_fns_1 = require("date-fns");
require("react-date-range/dist/styles.css"); // main style file
require("react-date-range/dist/theme/default.css"); // theme css file
require("../header/Header.css");
var axios_1 = require("axios");
var SearchItem_1 = require("../serachItem/SearchItem");
var HeaderTest = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_2.useState(""), destination = _a[0], setDestination = _a[1];
    var _b = react_2.useState("Your next adventure?"), phDestination = _b[0], setphDestination = _b[1];
    var _c = react_2.useState(false), openDate = _c[0], setOpenDate = _c[1];
    var _d = react_2.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]), date = _d[0], setDate = _d[1];
    var _e = react_2.useState(1), adultCounter = _e[0], setAdultCounter = _e[1];
    var _f = react_2.useState(0), childrenCounter = _f[0], setChildrenCounter = _f[1];
    var _g = react_2.useState(1), roomCounter = _g[0], setRoomCounter = _g[1];
    var _h = react_2.useState(false), openOptions = _h[0], setOpenOptions = _h[1];
    var _j = react_2.useState([]), filterCity = _j[0], setFilteredCity = _j[1];
    function handleDestination(e) {
        var newDestination = e.target.value;
        try {
            setDestination(newDestination);
        }
        catch (error) {
            console.error(error);
        }
    }
    function countMinAdult() {
        setAdultCounter(function (prevCount) { return prevCount - 1; });
    }
    function countPlusAdult() {
        setAdultCounter(function (prevCount) { return prevCount + 1; });
    }
    function countMinChildren() {
        setChildrenCounter(function (prevCount) { return prevCount - 1; });
    }
    function countPlusChildren() {
        setChildrenCounter(function (prevCount) { return prevCount + 1; });
    }
    function countMinRoom() {
        setRoomCounter(function (prevCount) { return prevCount - 1; });
    }
    function countPlusRoom() {
        setRoomCounter(function (prevCount) { return prevCount + 1; });
    }
    function getData(ev) {
        return __awaiter(this, void 0, void 0, function () {
            var city, data, ok, error, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.preventDefault();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        city = ev.target.elements.location.city.value;
                        console.log(city);
                        return [4 /*yield*/, axios_1["default"].post("/hotels/getbycity", city)];
                    case 2:
                        data = (_a.sent()).data;
                        console.log(data);
                        ok = data.ok, error = data.error;
                        if (ok) {
                            react_1["default"].createElement(SearchItem_1["default"], null);
                        }
                        if (error) {
                            react_1["default"].createElement("div", null, "nothing");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function handleSearch() {
        try {
            if (!destination) {
                setphDestination(function (prev) { return prev = "Enter your destiantion"; });
                alert("enter your destination");
            }
            else {
                navigate("/hotels", { state: { destination: destination, date: date, adultCounter: adultCounter, childrenCounter: childrenCounter, roomCounter: roomCounter } });
            }
            ;
        }
        catch (error) {
            console.error(error);
        }
    }
    return (react_1["default"].createElement("div", { className: "header" },
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
                    react_1["default"].createElement("button", { onClick: function () { return navigate('/animation'); } }, "Airport Taxies"))),
            react_1["default"].createElement("h1", { className: "headerTitle" }, " A lifetime of discounts? It's Genius"),
            react_1["default"].createElement("p", { className: "headerDesc" }, "Find exclusive Genius rewards in every corner of the world!"),
            react_1["default"].createElement("div", { className: "headerSearch" },
                react_1["default"].createElement("div", { className: "headerSearchItem" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBed, className: "headerIcon" }),
                    react_1["default"].createElement("input", { type: "text", placeholder: phDestination, className: "headerSearchInput", onChange: handleDestination })),
                react_1["default"].createElement("div", { className: "headerSearchItem" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCalendarDays, className: "headerIcon" }),
                    react_1["default"].createElement("span", { onClick: function () { return setOpenDate(!openDate); }, className: "headerSearchText" }, date_fns_1.format(date[0].startDate, "dd/MM/yyy") + " to " + date_fns_1.format(date[0].endDate, "dd/MM/yyy")),
                    openDate &&
                        react_1["default"].createElement(react_date_range_1.DateRange, { className: "date", editableDateInputs: true, onChange: function (item) {
                                setDate([
                                    item.selection
                                ]);
                            }, moveRangeOnFirstSelection: false, ranges: date, minDate: new Date })),
                react_1["default"].createElement("div", { className: "headerSearchItem" },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPerson, className: "headerIcon" }),
                    react_1["default"].createElement("span", { onClick: function () { return setOpenOptions(!openOptions); }, className: "headerSearchText" }, adultCounter + " adult . " + childrenCounter + " children . " + roomCounter + " room"),
                    openOptions && react_1["default"].createElement("div", { className: "options" },
                        react_1["default"].createElement("div", { className: "optionItem" },
                            react_1["default"].createElement("span", { className: "optionText" }, "Adult"),
                            react_1["default"].createElement("div", { className: "optionCounter" },
                                react_1["default"].createElement("button", { disabled: adultCounter <= 1, className: "optionCounterBtn", onClick: countMinAdult }, "-"),
                                react_1["default"].createElement("span", { className: "optionCounterNumber" }, adultCounter),
                                react_1["default"].createElement("button", { className: "optionCounterBtn", onClick: countPlusAdult }, "+"))),
                        react_1["default"].createElement("div", { className: "optionItem" },
                            react_1["default"].createElement("span", { className: "optionText" }, "Children"),
                            react_1["default"].createElement("div", { className: "optionCounter" },
                                react_1["default"].createElement("button", { disabled: childrenCounter <= 0, className: "optionCounterBtn", onClick: countMinChildren }, "-"),
                                react_1["default"].createElement("span", { className: "optionCounterNumber" }, childrenCounter),
                                react_1["default"].createElement("button", { className: "optionCounterBtn", onClick: countPlusChildren }, "+"))),
                        react_1["default"].createElement("div", { className: "optionItem" },
                            react_1["default"].createElement("span", { className: "optionText" }, "Room"),
                            react_1["default"].createElement("div", { className: "optionCounter" },
                                react_1["default"].createElement("button", { disabled: roomCounter <= 1, className: "optionCounterBtn", onClick: countMinRoom }, "-"),
                                react_1["default"].createElement("span", { className: "optionCounterNumber" }, roomCounter),
                                react_1["default"].createElement("button", { className: "optionCounterBtn", onClick: countPlusRoom }, "+"))))),
                react_1["default"].createElement("div", { className: "headerSearchItem" },
                    react_1["default"].createElement("button", { className: "headerBtn", onClick: getData }, "Search"))))));
};
exports["default"] = HeaderTest;
