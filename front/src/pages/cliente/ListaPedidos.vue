<template>
    <el-main>
        <el-row :gutter="12">
                <el-card v-for="item in getPedidos" :key="item._id" shadow="hover">
                    Nome da Empresa: {{item.empresa.nome}}
                    <br>
                    Produto: {{item.produto.nome}}
                    <br>
                    Preço: {{item.produto.preco}}
                    <br>
                    Nome do Cliente: {{item.cliente.nome}}
                    <br>
                    Status: {{item.status}}
                </el-card>
        </el-row>
        <el-button type="danger" @click="back">
            Voltar
        </el-button>
    </el-main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ListaPedidos',
    mounted() {
        this.listagemPedidos()
    },
    methods: {
        ...mapActions([
            'listaPedidosCliente'
        ]),
        listagemPedidos() {
            this.listaPedidosCliente()
        },
        back() {
            this.$router.go(-1)
        }
    },
    computed: {
        ...mapGetters([
            'getPedidos'
        ])
    }
}
</script>