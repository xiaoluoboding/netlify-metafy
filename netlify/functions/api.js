"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/api.ts
var api_exports = {};
__export(api_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(api_exports);
var import_got = __toESM(require("got"));
var metascraper = require("metascraper")([
  require("metascraper-author")(),
  require("metascraper-clearbit")(),
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-logo")(),
  require("metascraper-logo-favicon")(),
  require("metascraper-title")()
]);
var scrapeMetaData = async (targetUrl = "https://github.com/one-tab-group/netlify-metafy") => {
  const { body: html, url } = await (0, import_got.default)(targetUrl);
  const metadata = await metascraper({ html, url });
  return metadata;
};
var headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Content-Type": "application.json"
};
var handler = async (event) => {
  var _a;
  const url = (_a = event.queryStringParameters) == null ? void 0 : _a.url;
  try {
    require("url").parse(url);
  } catch (err) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        message: "Invalid URL"
      })
    };
  }
  const metadata = await scrapeMetaData(url);
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(metadata)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
