const express = require('express');
const path = require('path');
const db = require('/database/index.js');
const app = express();

app.use("/", express.static(path.join(__dirname, 'client/app.jsx')));