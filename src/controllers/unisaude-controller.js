const uniSaudeModel = require('../models/unisaude-model');

exports.listaUniSaude = function (req, res) {

    uniSaudeModel.find(function (err, uniSaude) {
        if (err) {
            res.json({
                status: "error",
                message: "Não foi possível recuperar as unidades de saude!"
            });
        } else {
            res.json({
                status: "sucesso",
                message: "A solicitação foi bem-sucedida!",
                unidades:uniSaude
            })

        }
    });

}