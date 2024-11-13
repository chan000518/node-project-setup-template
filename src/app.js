const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const api = require("./routers/index");
const setupSwagger = require('./config/swagger');


const app = express();

// 미들웨어 설정
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// 라우트 연결
app.use("/api", api);

// Swagger 설정
setupSwagger(app);

module.exports = app;