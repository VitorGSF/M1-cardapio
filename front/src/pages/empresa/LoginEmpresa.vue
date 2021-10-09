<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form name="form" label-position="top">
                    <el-form-item label="CNPJ">
                        <el-input type="number" v-model="cnpj" placeholder="CNPJ">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Senha">
                        <el-input type="password" v-model="senha" placeholder="Senha">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">
                            Entrar
                        </el-button>
                        <el-button type="default" @click="redirectToCadastro">
                            Não tenho cadastro
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
export default {
    name: 'CadastrarEmpresa',
    data() {
        return {
            razaoSocial: '',
            cnpj: '',
            nomeFantasia: '',
            telefone: '',
            email: '',
            senha: ''
        }
    },
    methods: {
        redirectToCadastro() {
            this.$router.push('/empresa/cadastro')
        }
    }
}
</script>