<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form name="form" label-position="top" v-model="empresa">
                    <el-form-item label="Razão Social">
                        <el-input v-model="empresa.razaoSocial" placeholder="Razão Social">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="CNPJ">
                        <el-input type="number" v-model="empresa.cnpj" placeholder="CNPJ">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Nome Fantasia">
                        <el-input v-model="empresa.nomeFantasia" placeholder="Nome Fantasia">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Telefone">
                        <el-input type="phone" v-model="empresa.telefone" placeholder="Telefone">
                        </el-input>
                    </el-form-item>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="E-mail">
                                <el-input type="email" v-model="empresa.email" placeholder="E-mail">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="Senha">
                                <el-input type="password" v-model="empresa.senha" placeholder="Senha">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item>
                        <el-button type="primary" @click="enviarEmpresa">
                            Cadastrar
                        </el-button>
                        <el-button type="default" @click="redirectToLogin">
                            Já tenho cadastro
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
    name: 'CadastrarEmpresa',
    data() {
        return {
            empresa: {
                razaoSocial: '',
                cnpj: '',
                nomeFantasia: '',
                telefone: '',
                email: '',
                senha: ''
            }
        }
    },
    methods: {
        ...mapActions([
            'createEmpresa'
        ]),
        enviarEmpresa() {
            this.createEmpresa({
                razaoSocial: this.empresa.razaoSocial,
                cnpj: this.empresa.cnpj,
                nomeFantasia: this.empresa.nomeFantasia,
                telefone: this.empresa.telefone,
                email: this.empresa.email,
                senha: this.empresa.senha
            }).then( () => {
                this.$router.push('/empresa')
            })
        },
        redirectToLogin() {
            this.$router.push('/empresa')
        }
    }
}
</script>