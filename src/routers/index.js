const express = require("express");
const router = express.Router();
const testRouters = require("./testRouters");

/**
 * @swagger
 * tags:
 *   name: Test
 *   description: 테스트 API 관련 엔드포인트
 */
router.use("", testRouters);

module.exports = router;