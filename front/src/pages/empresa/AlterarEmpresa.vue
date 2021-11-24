<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form name="form" label-position="top">
                    <el-form-item label="Razão Social">
                        <el-input v-model="getEmpresa.razaoSocial" placeholder="Razão Social">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="CNPJ">
                        <el-input type="number" v-model="getEmpresa.cnpj" placeholder="CNPJ">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Nome Fantasia">
                        <el-input v-model="getEmpresa.nomeFantasia" placeholder="Nome Fantasia">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Telefone">
                        <el-input type="phone" v-model="getEmpresa.telefone" placeholder="Telefone">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="E-mail">
                        <el-input type="email" v-model="getEmpresa.email" placeholder="E-mail">
                        </el-input>
                    </el-form-item>
                    <el-input type="hidden" v-model="getEmpresa.senha">
                    </el-input>
                    <el-form-item>
                        <el-button type="primary" @click="saveEmpresa(getEmpresa)">
                            Salvar
                        </el-button>
                        <el-button type="danger" @click="goToBack">
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
    name: 'AlterarEmpresa',
    computed: {
        ...mapGetters([
            'getEmpresa'
        ])
    },
    methods: {
        ...mapActions([
            'updateEmpresa'
        ]),
        saveEmpresa(value) {
            this.updateEmpresa({
                value
            }).then( () => {
                this.$router.go(-1)
            })
        },
        goToBack() {
            this.$router.go(-1)
        }
    }
}
</script>