const mongose = require('mongoose');

const agenda = mongose.Schema({
    unisaude_id: {
        type: mongose.Schema.Types.ObjectId,
        required: true
    },
    pessoa_id: {
        type: mongose.Schema.Types.ObjectId,
        required: true
    },
    data_hora: {
        type: mongose.Schema.Types.Date,
        required: true
    },
    necessidades: {
        type: mongose.Schema.Types.Boolean,
        required: true
    },
    observacoes: {
        type: mongose.Schema.Types.String,
        required: true
    }

})