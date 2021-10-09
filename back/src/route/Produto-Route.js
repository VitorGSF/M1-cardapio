const express = require('express')
const Produto = require('../model/Produto-Model.js')
const routerProduto = express.Router()

routerProduto.post('/cadastrar', async (req, res) => {
    const produto = new Produto({
        nome: req.body.nome,
        marca: req.body.marca,
        descricao: req.body.descricao,
        preco: req.body.preco
    })

    produto.save( (err) => {
        if (err) {
            res.status(422).send({
                created: false,
                error: 'Não foi possível salvar o produto'
            })
        } else {
            res.status(201).send({
                created: true
            })
        }
    })
})

routerProduto.get('/produtos', async (req, res) => {
    Produto.find({}, (err, doc) => {
        if (doc) {
            res.status(200).send(doc)
        } else if (err) {
            res.status(422).send({
                error: 'Não foi possível retornar sua requisição'
            })
        } else {
            res.status(404).send({
                error: 'Produto não encontrado'
            })
        }
    })
})

routerProduto.put('/alterar-produto/:id', async (req, res) => {
    let id = req.params.id
    
    const produto = new Produto({
        nome: req.body.nome,
        marca: req.body.marca,
        descricao: req.body.descricao,
        preco: req.body.preco
    })

    produto.findByIdAndUpdate(id, data, (err) => {
        if (err) {
            res.status(422).send({
                updated: false,
                error: 'Não foi possível alterar o produto'
            })
        } else {
            res.status(201).send({
                updated: true
            })
        }
    })
})

routerProduto.delete('/remove-produto/:id', async (req, res) => {
    let id = req.params.id

    Produto.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(422).send({
                deleted: false,
                error: 'Não foi possível remover o produto'
            })
        } else {
            res.status(201).send({
                deleted: true
            })
        }
    })
})

module.exports = routerProduto