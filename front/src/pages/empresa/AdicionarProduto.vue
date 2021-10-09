<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form name="form" label-position="top">
                    <el-select v-model="value" placeholder="Selecione um produto">
                        <el-option v-for="item in getProdutos" :key="item._id" :label="item.nome" :value="item.nome">
                        </el-option>
                    </el-select>
                    <el-form-item>
                        <el-button type="primary">
                            Adicionar Produto
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
            produto: [],
            value: ''
        }
    },
    methods: {
        ...mapActions([
            'cadastrarProdutoEmpresa',
            'listarProduto'
        ])
    },
    computed: {
        ...mapGetters([
            'getProdutos'
        ])
    }
}
</script>