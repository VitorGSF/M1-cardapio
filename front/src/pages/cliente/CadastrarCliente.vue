<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form name="form" label-position="top" v-model="cliente">
                    <el-form-item label="Nome">
                        <el-input v-model="cliente.nome" placeholder="Nome">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="E-mail">
                        <el-input type="email" v-model="cliente.email" placeholder="E-mail">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Senha">
                        <el-input type="password" v-model="cliente.senha" placeholder="Senha">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Telefone">
                        <el-input type="phone" v-model="cliente.telefone" placeholder="Telefone">
                        </el-input>
                    </el-form-item>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="CEP">
                                <el-input type="number" v-model="cliente.cep" placeholder="CEP">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="Logradouro">
                                <el-input v-model="cliente.logradouro" placeholder="Logradouro">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="Bairro">
                                <el-input v-model="cliente.bairro" placeholder="Bairro">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="Número">
                                <el-input type="number" v-model="cliente.numero" placeholder="Número">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="Cidade">
                                <el-input v-model="cliente.cidade" placeholder="Cidade">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="Estado">
                                <el-input v-model="cliente.estado" placeholder="Estado">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="Complemento">
                        <el-input v-model="cliente.complemento" placeholder="Complemento">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="enviarCliente">
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
            cliente: {
                nome: '',
                telefone: '',
                email: '',
                senha: '',
                cep: '',
                logradouro: '',
                numero: '',
                bairro: '',
                cidade: '',
                estado: '',
                complemento: ''
            }
        }
    },
    methods: {
        ...mapActions([
            'createCliente'
        ]),
        enviarCliente() {
            this.createCliente({
                nome: this.cliente.nome,
                telefone: this.cliente.telefone,
                email: this.cliente.email,
                senha: this.cliente.senha,
                cep: this.cliente.cep,
                logradouro: this.cliente.logradouro,
                numero: this.cliente.numero,
                bairro: this.cliente.bairro,
                cidade: this.cliente.cidade,
                estado: this.cliente.estado,
                complemento: this.cliente.complemento
            }).then( () => {
                this.$router.push('/cliente')
            })
        },
        redirectToLogin() {
            this.$router.push('/cliente')
        }
    }
}
</script>