let router = require('express').Router();

const uniSaudeController = require('../controllers/unisaude-controller');

router.get('/', uniSaudeController.listaUniSaude);

module.exports = router;