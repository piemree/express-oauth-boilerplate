const cookieParser = require("cookie-parser");
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;
const db = require("./database/db");
const express = require("express");
const router = require("./router");
const path = require("path");
const app = express();
const starter = require("./app");

starter({ express, app, router, db, cookieParser, path, PORT, HOST });
