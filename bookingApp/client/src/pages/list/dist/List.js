"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var date_fns_1 = require("date-fns");
var HeaderHotels_1 = require("../../components/header/HeaderHotels");
var Navbar_1 = require("../../components/navbar/Navbar");
require("../list/List.css");
var react_date_range_1 = require("react-date-range");
var SearchItem_1 = require("../../components/serachItem/SearchItem");
var UseFetch_1 = require("../../hooks/UseFetch");
var List = function () {
    var navigate = react_router_dom_1.useNavigate();
    var location = react_router_dom_1.useLocation();
    console.log(location);
    var _a = react_1.useState(location.state.destination), destination = _a[0], setDestination = _a[1];
    var _b = react_1.useState(location.state.date), date = _b[0], setDate = _b[1];
    var _c = react_1.useState(location.state.adultCounter), adultCounter = _c[0], setAdultCounter = _c[1];
    var _d = react_1.useState(location.state.childrenCounter), childrenCounter = _d[0], setChildrenCounter = _d[1];
    var _e = react_1.useState(location.state.roomCounter), roomCounter = _e[0], setRoomCounter = _e[1];
    var _f = react_1.useState(false), openDate = _f[0], setOpenDate = _f[1];
    // const [data, setData] = useState(false);
    var _g = react_1.useState([]), hotels = _g[0], setHotels = _g[1];
    // useEffect(()=>{
    //     (async ()=>{
    //         const { data } = await axios.post(`/hotels?city={destination}`)
    //         console.log(data)
    //         const {success, hotels}=data
    //         setHotels(hotels)
    //     })()
    // },[destination])
    //   const getHotelFromServer = async (ev: any) => {
    //     ev.preventDefault()
    //     const destinationFromForm = ev.target.elements.destination.value
    //     setDestination(destinationFromForm)
    //     }
    var _h = UseFetch_1["default"]("/hotels/getbycity?city=" + destination), data = _h.data, reFetch = _h.reFetch;
    var handleClick = function () {
        reFetch();
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(HeaderHotels_1["default"], null),
        react_1["default"].createElement("form", { onSubmit: handleClick, className: "listContainer" },
            react_1["default"].createElement("div", { className: "listWrapper" },
                react_1["default"].createElement("div", { className: "listSearch" },
                    react_1["default"].createElement("h1", { className: "listTitle" }, "Search"),
                    react_1["default"].createElement("div", { className: "listItem" },
                        react_1["default"].createElement("label", null, "Destination:"),
                        react_1["default"].createElement("input", { placeholder: destination, type: "text" })),
                    react_1["default"].createElement("div", { className: "listItem" },
                        react_1["default"].createElement("label", { htmlFor: "" }, "Check-in Dates:"),
                        react_1["default"].createElement("span", { onClick: function () { return setOpenDate(!openDate); } }, "from " + date_fns_1.format(date[0].startDate, "dd/MM/yyy") + " to " + date_fns_1.format(date[0].endDate, "dd/MM/yyy")),
                        openDate && (react_1["default"].createElement(react_date_range_1.DateRange, { onChange: function (item) { return setDate([item.selection]); }, minDate: new Date, ranges: date }))),
                    react_1["default"].createElement("div", { className: "listItem" },
                        react_1["default"].createElement("label", null, "Options"),
                        react_1["default"].createElement("div", { className: "listOptions" },
                            react_1["default"].createElement("div", { className: "listOptionItem" },
                                react_1["default"].createElement("span", { className: "listOptionText" }, "Adult"),
                                react_1["default"].createElement("input", { min: 1, type: "number", className: "listOptionInput", placeholder: adultCounter })),
                            react_1["default"].createElement("div", { className: "listOptionItem" },
                                react_1["default"].createElement("span", { className: "listOptionText" }, "Children"),
                                react_1["default"].createElement("input", { min: 0, type: "number", className: "listOptionInput", placeholder: childrenCounter })),
                            react_1["default"].createElement("div", { className: "listOptionItem" },
                                react_1["default"].createElement("span", { className: "listOptionText" }, "Room"),
                                react_1["default"].createElement("input", { min: 1, type: "number", className: "listOptionInput", placeholder: roomCounter })))),
                    react_1["default"].createElement("button", { type: "submit" }, "Search")),
                react_1["default"].createElement("div", { className: "listResult" }, data.map(function (item) { return (react_1["default"].createElement(SearchItem_1["default"], { item: item })); }))))));
};
exports["default"] = List;
