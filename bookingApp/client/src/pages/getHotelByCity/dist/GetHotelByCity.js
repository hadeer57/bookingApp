"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var SearchItemParis_1 = require("../../components/serachItem/SearchItemParis");
var GetHotelByCity = function () {
    var _a = react_1.useState([]), filterCity = _a[0], setFilteredCity = _a[1];
    function handleSearch(ev) {
        ev.preventDefault();
        var city = ev.target.city.value;
        axios_1["default"]
            .post("/hotels/getbycity", { city: city })
            .then(function (data) {
            setFilteredCity(data.data);
        })["catch"](function (err) { return console.error(err); });
    }
    return (react_1["default"].createElement("div", null, filterCity.map(function (item) {
        return (react_1["default"].createElement(SearchItemParis_1["default"], null));
    })));
};
exports["default"] = GetHotelByCity;
// const render = (hotels) => {
//     hotels.forEach(el => {
//             <div>
//                 <h3>${el.name}</h3>
//                 <p>${el.location}</p>
//             </div>
//     });
// }
