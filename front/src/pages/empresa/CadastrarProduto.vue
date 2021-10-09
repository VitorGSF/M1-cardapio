<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form name="form" label-position="top">
                    <el-form-item label="Nome">
                        <el-input v-model="nome" placeholder="Nome">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Marca">
                        <el-input v-model="marca" placeholder="Marca">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Descrição">
                        <el-input type="textarea" v-model="descricao" placeholder="Descrição">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Preço">
                        <el-input type="number" v-model="preco" placeholder="Preço">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="cadastrarProduto">
                            Cadastrar Produto
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'CadastrarProduto',
    data() {
        return {
            nome: '',
            marca: '',
            descricao: '',
            preco: ''
        }
    },
    methods: {
        ...mapActions([
            'cadastrarProduto'
        ])
    }
}
</script>