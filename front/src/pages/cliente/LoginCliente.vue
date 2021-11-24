<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form name="form" label-position="top">
                    <el-form-item label="E-mail">
                        <el-input type="email" v-model="email" placeholder="E-mail" required>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Senha">
                        <el-input type="password" v-model="senha" placeholder="Senha" required>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="enviarCliente">
                            Entrar
                        </el-button>
                        <el-button type="default" @click="redirectToCadastro">
                            Não tenho cadastro
                        </el-button>
                        <el-button type="danger" @click="redirectToVoltar">
                            Voltar
                        </el-button>
                        <el-button type="danger" @click="back">
                            Sair
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
    name: 'LoginCliente',
    data() {
        return {
            email: '',
            senha: ''
        }
    },
    methods: {
        ...mapActions([
            'logCliente'
        ]),
        enviarCliente() {
            this.logCliente({
                email: this.email,
                senha: this.senha
            })
            this.$router.push('/cliente/menu')
        },
        redirectToCadastro() {
            this.$router.push('/cliente/cadastro')
        },
        redirectToVoltar() {
            this.$router.go(-1)
        },
        back() {
            this.$router.push('/')
        }
    }
}
</script>