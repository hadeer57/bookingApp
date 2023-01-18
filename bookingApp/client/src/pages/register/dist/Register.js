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
var axios_1 = require("axios");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../../pages/register/Register.css");
var Register = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(), errorFromServer = _a[0], setErrorFromServer = _a[1];
    function handleRegister(ev) {
        return __awaiter(this, void 0, void 0, function () {
            var password, email, firstName, lastName, data, ok, error, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        ev.preventDefault();
                        password = ev.target.elements.password.value;
                        email = ev.target.elements.email.value;
                        firstName = ev.target.elements.firstName.value;
                        lastName = ev.target.elements.lastName.value;
                        console.log(password, email, firstName, lastName);
                        return [4 /*yield*/, axios_1["default"].post("/admin/register", { password: password, email: email, lastName: lastName, firstName: firstName })];
                    case 1:
                        data = (_a.sent()).data;
                        console.log(data);
                        ok = data.ok, error = data.error;
                        if (ok) {
                            navigate('/login');
                        }
                        if (error) {
                            setErrorFromServer(error);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement("div", { className: "login" },
        react_1["default"].createElement("form", { onSubmit: handleRegister, className: "lContainer" },
            react_1["default"].createElement("h1", { className: "signTitle" }, "Register"),
            react_1["default"].createElement("input", { type: "text", placeholder: "First Name", name: "firstName", className: "lInput" }),
            react_1["default"].createElement("input", { type: "text", placeholder: "Last Name", name: "lastName", className: "lInput" }),
            react_1["default"].createElement("input", { type: "text", placeholder: "Email", name: "email", className: "lInput" }),
            react_1["default"].createElement("input", { type: "password", placeholder: "password", name: "password", className: "lInput" }),
            errorFromServer ? react_1["default"].createElement("div", { className: "error" }, errorFromServer) : null,
            react_1["default"].createElement("button", { type: "submit", className: "lButton" }, "Register"),
            react_1["default"].createElement("h4", { className: "joinTitle" },
                "One of us? ",
                react_1["default"].createElement("button", { className: "sign", onClick: function () { return navigate('/login'); } }, " Welcome Back")))));
};
exports["default"] = Register;
