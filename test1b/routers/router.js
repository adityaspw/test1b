const express = require('express');
const router = express.Router();
const { startBrowser, closeBrowser,clearHistory } = require('../controller/logic');

router.route('/start').post(startBrowser);
router.route('/close').post(closeBrowser);
router.route('/clear').post(clearHistory);

module.exports = router;