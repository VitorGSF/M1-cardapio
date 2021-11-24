<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form name="form" label-position="top">
                    <el-form-item label="Nome">
                        <el-input v-model="getCliente.nome" placeholder="Nome">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Telefone">
                        <el-input type="phone" v-model="getCliente.telefone" placeholder="Telefone">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="E-mail">
                        <el-input type="email" v-model="getCliente.email" placeholder="E-mail">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="CEP">
                        <el-input type="number" v-model="getCliente.cep" placeholder="CEP">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Logradouro">
                        <el-input v-model="getCliente.logradouro" placeholder="Logradouro">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Número">
                        <el-input type="number" v-model="getCliente.numero" placeholder="Número">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Bairro">
                        <el-input v-model="getCliente.bairro" placeholder="Bairro">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Cidade">
                        <el-input v-model="getCliente.cidade" placeholder="Cidade">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Estado">
                        <el-input v-model="getCliente.estado" placeholder="Estado">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Complemento">
                        <el-input v-model="getCliente.complemento" placeholder="Complemento">
                        </el-input>
                    </el-form-item>
                    <el-input type="hidden" v-model="getCliente.senha">
                    </el-input>
                    <el-form-item>
                        <el-button type="primary" @click="saveCliente(getCliente)">
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
    name: 'AlterarCliente',
    computed: {
        ...mapGetters([
            'getCliente'
        ])
    },
    methods: {
        ...mapActions([
            'updateCliente'
        ]),
        saveCliente(value) {
            this.updateCliente({
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