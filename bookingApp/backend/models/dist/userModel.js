"use strict";
exports.__esModule = true;
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
// export enum Role {
//     ADMIN = "admin",
//     WRITER = "writer",
//     USER = "user",
//   }
var UserSchema = new mongoose_1["default"].Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        "default": false
    }
});
exports.UserModel = mongoose_1["default"].model("users", UserSchema);
