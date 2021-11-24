<template>
    <el-main>
        <h2>Bem Vindo, {{ getEmpresa.nomeFantasia }}</h2>
        <el-row>
            <el-col :span="18" :offset="6">
                <el-form name="form" label-position="top">
                    <el-form-item>
                        <el-button type="primary" @click="redirectToDetail">
                            Detalhes da Empresa
                        </el-button>
                        <el-button type="primary" @click="redirectToCadastraProdutos">
                            Cadastrar Produtos
                        </el-button>
                        <el-button type="primary" @click="redirectToAdicionaProdutos">
                            Adicionar Produtos
                        </el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="redirectToListaProdutos">
                            Lista de Produtos
                        </el-button>
                        <el-button type="primary" @click="redirectToListaPedidos">
                            Pedidos
                        </el-button>
                        <el-button type="danger" @click="finishSession">
                            Sair
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
    name: 'LoginEmpresa',
    data() {
        return {
            email: '',
            senha: ''
        }
    },
    computed: {
        ...mapGetters([
            'getEmpresa'
        ])
    },
    methods: {
        ...mapActions([
            'encerrarSessao'
        ]),
        finishSession() {
            this.encerrarSessao()
            this.$router.go(-1)
        },
        redirectToDetail() {
            this.$router.push('/empresa/detalhe')
        },
        redirectToCadastraProdutos() {
            this.$router.push('/empresa/cadastrar/produto')
        },
        redirectToAdicionaProdutos() {
            this.$router.push('/empresa/adicionar/produto')
        },
        redirectToListaProdutos() {
            this.$router.push('/empresa/lista/produto')
        },
        redirectToListaPedidos() {
            this.$router.push('/empresa/pedidos')
        }
    }
}
</script>