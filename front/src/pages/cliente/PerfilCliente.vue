<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-descriptions title="Detalhes do Cliente" direction="vertical" :column="1" border>
                    <el-descriptions-item label="Nome">
                        {{ getCliente.nome }}
                    </el-descriptions-item>
                    <el-descriptions-item label="Telefone">
                        {{ getCliente.telefone }}
                    </el-descriptions-item>
                    <el-descriptions-item label="E-mail">
                        {{ getCliente.email}}
                    </el-descriptions-item>
                    <el-descriptions-item label="CEP">
                        {{ getCliente.cep }}
                    </el-descriptions-item>
                    <el-descriptions-item label="Logradouro">
                        {{ getCliente.logradouro }}
                    </el-descriptions-item>
                    <el-descriptions-item label="Número">
                        {{ getCliente.numero }}
                    </el-descriptions-item>
                    <el-descriptions-item label="Bairro">
                        {{ getCliente.bairro }}
                    </el-descriptions-item>
                    <el-descriptions-item label="Cidade">
                        {{ getCliente.cidade }}
                    </el-descriptions-item>
                    <el-descriptions-item label="Estado">
                        {{ getCliente.estado }}
                    </el-descriptions-item>
                    <el-descriptions-item label="Complemento">
                        {{ getCliente.complemento }}
                    </el-descriptions-item>
                </el-descriptions>
            </el-col>
        </el-row>
        <el-button type="warning" @click="redirectToEdit">
            Editar
        </el-button>
        <el-button type="danger" @click="deletar">
            Excluir Conta
        </el-button>
        <el-button type="danger" @click="redirectToBack">
            Voltar
        </el-button>
    </el-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'PerfilCliente',
    methods: {
        ...mapActions([
            'deleteCliente'
        ]),
        deletar() {
            this.deleteCliente().then( () => {
                this.$router.push('/')
            })
        },
        redirectToEdit() {
            this.$router.push('/cliente/alterar')
        },
        redirectToBack() {
            this.$router.go(-1)
        }
    },
    computed: {
        ...mapGetters([
            'getCliente'
        ])
    }
}
</script>