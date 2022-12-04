const mongoose = required('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
    clienteId: { type: mongoose.Types.ObjectId, ref: 'Cliente', required: true },
    salaoId: { type: mongoose.Types.ObjectId, ref: 'Salao', required: true },
    servicoId: { type: mongoose.Types.ObjectId, ref: 'Servico', required: true },
    colaboradorId: { type: mongoose.Types.ObjectId, ref: 'Colaborador', required: true },
    data: { type: Date, required: true },
    comissao: { type: Number, required: true },
    valor: { type: Number, required: true },
    transactionId: { type: String, required: true },
    dataCadastro: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Agendamento', agendamento)