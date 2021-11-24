<template>
    <el-main>
        <el-row :gutter="12">
                <el-card v-for="item in getProdutos" :key="item._id" shadow="hover">
                    Nome do Produto: {{item.nome}}
                    <br>
                    Marca: {{item.marca}}
                    <br>
                    Preço: {{item.preco}}
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
    name: 'ListaProdutos',
    mounted() {
        this.listagemProdutos()
    },
    methods: {
        ...mapActions([
            'listaProdutosEmpresa'
        ]),
        listagemProdutos() {
            this.listaProdutosEmpresa()
        },
        back() {
            this.$router.go(-1)
        }
    },
    computed: {
        ...mapGetters([
            'getProdutos'
        ])
    }
}
</script>