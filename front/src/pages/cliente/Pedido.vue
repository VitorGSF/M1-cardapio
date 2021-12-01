<template>
<el-main>
    <el-row :column="3" :gutter="24" :offset="6">
        <el-col :span="6" >
            <el-card v-for="empresa in getEmpresas" :key="empresa._id" @click="this.selecionaEmpresa(empresa._id)">
                <span>{{empresa.nomeFantasia}}</span>
                <div>
                    <el-collapse>
                        <el-collapse-item title="Selecione o produto" >
                            <el-select v-model="produto" placeholder="Escolha um produto">
                                <el-option v-for="item in getEmpresaSelecionada.produtos" :key="item._id" :label="item.nome" :value="item">
                                </el-option>
                            </el-select>
                            <el-input type="number" v-model="quantidade" placeholder="Quantidade">
                            </el-input>
                        <div>
                            <el-collapse>
                                <el-collapse-item title="Finalizar" @click="this.selecionaProduto(produto)">
                                    <el-button type="success" @click="fazerPedido">
                                        Realizar Pedido
                                    </el-button>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-button type="danger" @click="back">
        Voltar
    </el-button>
</el-main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'SelecaoEmpresa',
    data() {
        return {
            produto: '',
            quantidade: ''
        }
    },
    computed: {
        ...mapGetters([
            'getEmpresas',
            'getEmpresaSelecionada',
            'getCliente'
        ])
    },
    mounted() {
        this.listaEmpresasPedido()
    },
    methods: {
        ...mapActions([
            'listaEmpresas',
            'selecionaEmpresa',
            'createPedido',
            'selecionaProduto'
        ]),
        listaEmpresasPedido() {
            this.listaEmpresas()
        },
        fazerPedido() {
            this.createPedido({
                quantidade: this.quantidade,
                status: 'Pedido Realizado'
            }).then( () => {
                this.$router.go(-1)
            })
        },
        back() {
            this.$router.go(-1)
        }
    }
}
</script>