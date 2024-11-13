const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/hi:
 *   get:
 *     summary: "안녕하세요 메시지 반환"
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: "성공적으로 메시지를 반환합니다."
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Hello"
 */
router.get("/hi", (req, res) => {
    res.send('Hello');
});


module.exports = router;