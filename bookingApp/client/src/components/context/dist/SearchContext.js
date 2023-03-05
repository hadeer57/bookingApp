"use strict";
exports.__esModule = true;
exports.SearchContextProvider = exports.SearchContext = void 0;
var react_1 = require("react");
var INITIAL_STATE = {
    city: undefined,
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined
    }
};
exports.SearchContext = react_1.createContext(INITIAL_STATE);
var SearchReducer = function (state, action) {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
};
exports.SearchContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useReducer(SearchReducer, INITIAL_STATE), state = _b[0], dispatch = _b[1];
    return (React.createElement(exports.SearchContext.Provider, { value: {
            city: state.city,
            dates: state.dates,
            options: state.options
        } }, children));
};
