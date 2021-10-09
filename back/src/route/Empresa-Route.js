const { response } = require('express')
const express = require('express')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/authentication.js')
const Empresa = require('../model/Empresa-Model.js')
const routerEmpresa = express.Router()

routerEmpresa.use(auth)

routerEmpresa.post('/cadastrar', async (req, res) => {
    const empresa = new Empresa({
        razaoSocial: req.body.razaoSocial,
        cnpj: req.body.cnpj,
        nomeFantasia: req.body.nomeFantasia,
        telefone: req.body.telefone,
        email: req.body.email,
        senha: req.body.senha
    })

    empresa.save( (err) => {
        if (err) {
            res.status(422).send({
                error: 'Não foi possível salvar a empresa'
            })
        } else {
            const conversao = {
                _id: empresa._id
            }
            const resp = jwt.sign(conversao, 'Salt&Pepper', {
                expiresIn: '1y'
            })
            res.status(201).send({
                token: resp
            })
        }
    })
})

routerEmpresa.get('/minha-empresa/:id', async (req, res) => {
    let id = req.params.id

    Empresa.findById(id, (err, doc) => {
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

routerEmpresa.get('/empresas', async (req, res) => {
    Empresa.find({}, (err, doc) => {
        if (doc) {
            res.status(200).send(doc)
        } else if (err) {
            res.status(422).send({
                error: 'Não foi possível retornar sua requisição'
            })
        } else {
            res.status(404).send({
                error: 'Nenhuma empresa encontrada'
            })
        }
    })
})

routerEmpresa.get('/:id/produtos', async (req, res) => {
    Empresa.findById(req.params.id, (err, doc) => {
        if (doc) {
            let resp = doc.map((element) => {
                return {
                  produtos: element.produtos
                }
            })
            res.status(200).send(resp);
        } else if (err) {
            res.status(422).send({
                error: 'Não foi possível retornar sua requisição'
            })
        } else {
            res.status(404).send({
                error: 'Nenhuma empresa encontrada'
            })
        }
    })
})

routerEmpresa.put('/cadastra-produto-empresa/:id', (req, res) => {
    Empresa.findById(req.params.id, (err, doc) => {
        const produto = {
            _id: req.body._id,
            nome: req.body.nome,
            marca: req.body.marca,
            descricao: req.body.descricao,
            preco: req.body.preco
        }

        doc.produtos.push(produto)

        doc.save( (errSave) => {
            if (errSave) {
                response.status(422).send({
                    add: false,
                    error: 'Não foi possível completar a sua requisição'
                })
            } else {
                res.status(201).send(doc)
            }
        })
    })
})

routerEmpresa.put('/alterar-minha-empresa/:id', async (req, res) => {
    let id = req.params.id
    
    const empresa = new Empresa({
        razaoSocial: req.body.razaoSocial,
        cnpj: req.body.cnpj,
        nomeFantasia: req.body.nomeFantasia,
        telefone: req.body.telefone,
        email: req.body.email,
        senha: req.body.senha
    })

    empresa.findByIdAndUpdate(id, data, (err) => {
        if (err) {
            res.status(422).send({
                updated: false,
                error: 'Não foi possível alterar a empresa'
            })
        } else {
            res.status(201).send({
                updated: true
            })
        }
    })
})

module.exports = routerEmpresa

/*
routerEmpresa.delete('/remove-empresa/:id', async (req, res) => {
    let id = req.params.id

    Empresa.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(422).send({
                deleted: false,
                error: 'Não foi possível remover a empresa'
            })
        } else {
            res.status(201).send({
                deleted: true
            })
        }
    })
})
*/