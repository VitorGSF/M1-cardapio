const { response } = require('express')
const express = require('express')
const Pedido = require('../model/Pedido-Model.js')
const routerPedido = express.Router()

routerPedido.post('/cadastrar', async (req, res) => {
    const pedido = new Pedido({
        empresa: {
            _id: req.body._idEmpresa,
            nome: req.body.nomeEmpresa
        },
        cliente: {
            nome: req.body.nomeCliente,
            cep: req.body.cep,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            complemento: req.body.complemento
        },
        produto: {
            _id: req.body._idProduto,
            nome: req.body.nomeProduto,
            quantidade: req.body.quantidade
        }
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

module.exports = routerPedido