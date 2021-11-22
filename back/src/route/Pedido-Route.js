const { response } = require('express')
const express = require('express')
const Pedido = require('../model/Pedido-Model.js')
const routerPedido = express.Router()

routerPedido.post('/cadastrar', (req, res) => {
    const pedido = new Pedido({
        empresa: {
            _id: req.body._idEmpresa,
            nome: req.body.nomeEmpresa
        },
        cliente: {
            _id: req.body._idCliente,
            nome: req.body.nomeCliente,
            telefone: req.body.telefone,
            cep: req.body.cep,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            bairro: req.body.bairro,
            complemento: req.body.complemento
        },
        produto: {
            _id: req.body._idProduto,
            nome: req.body.nomeProduto,
            quantidade: req.body.quantidade
        },
        status: req.body.status
    })

    pedido.save( (err) => {
        if (err) {
            res.status(422).send({
                created: false,
                error: 'Não foi possível salvar o pedido'
            })
        } else {
            res.status(201).send({
                created: true
            })
        }
    })
})

routerPedido.get('/lista', (req, res) => {
    Pedido.find({}, (err, doc) => {
        if (doc) {
            res.status(200).send(doc)
        } else if (err) {
            res.status(422).send({
                error: 'Não foi possível retornar sua requisição'
            })
        } else {
            res.status(404).send({
                error: 'Empresa não encontrada'
            })
        }
    })
})

module.exports = routerPedido