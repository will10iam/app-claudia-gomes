const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    telefone: { type: String, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, default: null },
    foto: { type: String, required: true },
    status: { type: String, required: true, enum: ['A', 'I'], default: 'A' },
    sexo: { type: String, required: true, enum: ['M', 'F'] },
    dataNascimento: { type: String, required: true },
    documento: {
        tipo: { type: String, required: true, enum: ['individual', 'corporation'] },
        numero: { type: String, required: true }
    },
    endereco: {
        cidade: { type: String, required: true },
        uf: { type: String, required: true },
        cep: { type: String, required: true },
        numero: { type: Number },
        pais: { type: String, required: true }
    },
    dataCadastro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cliente', cliente)