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
exports.findHotelsByCity = exports.findAllHotels = exports.findHotel = exports.deleteHotel = exports.updateHotel = exports.addHotel = void 0;
var hotelModel_1 = require("../models/hotelModel");
function addHotel(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newHotel, newHotelDB, savedHotel, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newHotel = req.body;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, hotelModel_1["default"].create(newHotel)];
                case 2:
                    newHotelDB = _a.sent();
                    return [4 /*yield*/, newHotel.save()];
                case 3:
                    savedHotel = _a.sent();
                    res.send(savedHotel);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    res.send(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.addHotel = addHotel;
function updateHotel(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var updateHotelDB, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hotelModel_1["default"].findByIdAndUpdate(req.params.id, { $set: req.body }, { "new": true })];
                case 1:
                    updateHotelDB = _a.sent();
                    res.send({ success: true, updateHotelDB: updateHotelDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res.send(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updateHotel = updateHotel;
function deleteHotel(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var deleteHotelDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hotelModel_1["default"].findByIdAndDelete(req.params.id)];
                case 1:
                    deleteHotelDB = _a.sent();
                    res.send({ success: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res.send(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteHotel = deleteHotel;
function findHotel(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var findHotelDB, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hotelModel_1["default"].findById(req.params.id)];
                case 1:
                    findHotelDB = _a.sent();
                    res.send({ success: true, findHotelDB: findHotelDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    res.send(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.findHotel = findHotel;
function findAllHotels(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var hotels, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hotelModel_1["default"].find()];
                case 1:
                    hotels = _a.sent();
                    res.send({ success: true, hotels: hotels });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    res.send(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.findAllHotels = findAllHotels;
function findHotelsByCity(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var cityHotel, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hotelModel_1["default"].findById(req.params.location.city)];
                case 1:
                    cityHotel = _a.sent();
                    res.send({ success: true, cityHotel: cityHotel });
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    res.send(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.findHotelsByCity = findHotelsByCity;
