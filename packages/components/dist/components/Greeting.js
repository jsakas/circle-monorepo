"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Greeting = function (props) {
    var _a;
    if ((_a = props.customer) === null || _a === void 0 ? void 0 : _a.first_name) {
        return ((0, jsx_runtime_1.jsxs)("span", { children: ["Hi, ", props.customer.last_name, "!"] }));
    }
    return ((0, jsx_runtime_1.jsx)("span", { children: "Hi!" }));
};
exports.default = Greeting;
