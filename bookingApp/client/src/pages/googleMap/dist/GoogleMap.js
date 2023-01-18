"use strict";
exports.__esModule = true;
var react_1 = require("react");
var api_1 = require("@react-google-maps/api");
function LoadGoogleMap() {
    var isLoaded = api_1.useJsApiLoader({
        googleMapsApiKey: "AIzaSyBubWJhKGZ0AOZxTUmyvHfghPuVezVYbDE",
        libraries: [
            'places'
        ]
    }).isLoaded;
    if (!isLoaded) {
        return react_1["default"].createElement("div", null, "Loading...");
    }
    return (react_1["default"].createElement("div", { className: "box" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(api_1.Autocomplete, null,
                react_1["default"].createElement("input", { type: "text", placeholder: "Origin" })),
            react_1["default"].createElement(api_1.Autocomplete, null,
                react_1["default"].createElement("input", { type: "text", placeholder: "Destination" }))),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(api_1.GoogleMap, { zoom: 4, center: { lat: 48.8584, lng: 2.2945 }, mapContainerStyle: { width: '100%', height: '100vh' } },
                react_1["default"].createElement(api_1.Marker, { position: { lat: 48.8584, lng: 2.2945 } })))));
}
exports["default"] = LoadGoogleMap;
