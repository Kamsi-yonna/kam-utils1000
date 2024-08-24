"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  absoluteNum: () => absoluteNum,
  capitalize: () => capitalize,
  chunk: () => chunk,
  clampNum: () => clampNum,
  daysBetween: () => daysBetween,
  formatDate: () => formatDate,
  keys: () => keys,
  lowerCase: () => lowerCase,
  mergeObj: () => mergeObj,
  percentageNum: () => percentageNum,
  randomItem: () => randomItem,
  replaceAll: () => replaceAll,
  roundNum: () => roundNum,
  trim: () => trim,
  upperCase: () => upperCase,
  values: () => values
});
module.exports = __toCommonJS(src_exports);

// src/object.ts
function keys(obj) {
  return Object.keys(obj);
}
function values(obj) {
  return Object.values(obj);
}
function mergeObj(obj1, obj2) {
  return __spreadValues(__spreadValues({}, obj1), obj2);
}

// src/array.ts
function chunk(arr, size) {
  return arr.reduce((acc, val, i) => {
    if (i % size === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(val);
    return acc;
  }, []);
}
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// src/date.ts
var import_date_fns = require("date-fns");
function formatDate(date, format) {
  const options = {};
  switch (format) {
    case "long":
      options.weekday = "long";
      options.day = "numeric";
      options.month = "long";
      options.year = "numeric";
      break;
    case "short":
      options.day = "2-digit";
      options.month = "2-digit";
      options.year = "numeric";
      break;
    case "currentTime":
      return (0, import_date_fns.format)(/* @__PURE__ */ new Date(), "h:mm:ss a");
    case "time":
      const [hours, minutes, seconds] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      ];
      return (0, import_date_fns.format)(
        new Date(0, 0, 0, hours, minutes, seconds),
        "h:mm:ss a"
      );
    case "full":
      options.weekday = "long";
      options.day = "numeric";
      options.month = "long";
      options.year = "numeric";
      options.hour = "numeric";
      options.minute = "numeric";
      break;
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
function daysBetween(date1, date2) {
  const timeDifference = date2.getTime() - date1.getTime();
  return timeDifference / (1e3 * 3600 * 24);
}

// src/number.ts
function roundNum(num, decimals) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
function clampNum(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function percentageNum(num, total) {
  return num / total * 100;
}
function absoluteNum(num) {
  return Math.abs(num);
}

// src/index.ts
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function lowerCase(str) {
  return str.toLowerCase();
}
function upperCase(str) {
  return str.toUpperCase();
}
function trim(str) {
  return str.trim();
}
function replaceAll(str, search, replace) {
  return str.split(search).join(replace);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  absoluteNum,
  capitalize,
  chunk,
  clampNum,
  daysBetween,
  formatDate,
  keys,
  lowerCase,
  mergeObj,
  percentageNum,
  randomItem,
  replaceAll,
  roundNum,
  trim,
  upperCase,
  values
});
//# sourceMappingURL=index.js.map