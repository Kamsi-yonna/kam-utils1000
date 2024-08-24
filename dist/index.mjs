var __defProp = Object.defineProperty;
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
import { format as formatDateFns } from "date-fns";
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
      return formatDateFns(/* @__PURE__ */ new Date(), "h:mm:ss a");
    case "time":
      const [hours, minutes, seconds] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      ];
      return formatDateFns(
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
export {
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
};
//# sourceMappingURL=index.mjs.map