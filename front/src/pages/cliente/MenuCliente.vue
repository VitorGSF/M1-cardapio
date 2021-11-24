<template>
    <el-main>
        <h2>Bem Vindo, {{ getCliente.nome }}</h2>
        <el-row>
            <el-col :span="18" :offset="6">
                <el-form name="form" label-position="top">
                    <el-form-item>
                        <el-button type="primary" @click="redirectToPerfil">
                            Perfil
                        </el-button>
                        <el-button type="primary" @click="redirectToCreatePedido">
                            Realizar Pedido
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
            'getCliente'
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
        redirectToPerfil() {
            this.$router.push('/cliente/perfil')
        },
        redirectToCreatePedido() {
            this.$router.push('/cliente/pedido')
        },
        redirectToListaPedidos() {
            this.$router.push('/cliente/pedidos')
        }
    }
}
</script>