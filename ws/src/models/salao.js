const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({
    nome: { type: String, required: [true, 'Nome é obrigatório.'] },
    foto: { type: String },
    capa: { type: String },
    email: { type: String, required: [true, 'E-mail é obrigatório.'] },
    senha: { type: String, default: null },
    telefone: { type: String },
    endereco: {
        cidade: { type: String },
        uf: { type: String },
        cep: { type: String },
        numero: { type: String },
        pais: { type: String }
    },
    geo: { tipo: String, coordinates: Array },
    dataCadastro: { type: Date, default: Date.now }
});

salao.index({ geo: '2dsphere' })

module.exports = mongoose.model('Salao', salao)