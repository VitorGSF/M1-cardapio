const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmpresaPedidoSchema = new Schema({
    nome: String
})

const ClientePedidoSchema = new Schema({
    nome: String,
    cep: Number,
    logradouro: String,
    numero: Number,
    bairro: String,
    cidade: String,
    estado: String,
    complemento: String
})

const ProdutoPedidoSchema = new Schema({
    nome: String,
    quantidade: Number
})

const PedidoSchema = new Schema({
    empresa: EmpresaPedidoSchema,
    cliente: ClientePedidoSchema,
    produto: ProdutoPedidoSchema
})

module.exports = mongoose.model('Pedido', PedidoSchema)