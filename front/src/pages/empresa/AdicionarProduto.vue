<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form name="form" label-position="top">
                    <el-form-item>
                        <el-select v-model="valor" placeholder="Selecione um produto">
                            <el-option v-for="item in getProdutos" :key="item._id" :label="item.nome" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="saveProdutos(valor)">
                            Adicionar Produto
                        </el-button>
                        <el-button type="danger" @click="back">
                            Voltar
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AdicionarProduto',
    data() {
        return {
            valor: ''
        }
    },
    mounted() {
        this.listagemProdutos()
    },
    methods: {
        ...mapActions([
            'adicionarProduto',
            'listaProdutos'
        ]),
        listagemProdutos() {
            this.listaProdutos()
        },
        saveProdutos(select) {
            this.adicionarProduto(select).then( () => {
                this.$router.go(-1)
            })
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