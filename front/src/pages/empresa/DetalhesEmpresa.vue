<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-descriptions title="Detalhes da Empresa" direction="vertical" :column="1" border>
                    <el-descriptions-item label="Razão Social">
                        {{ getEmpresa.razaoSocial }}
                    </el-descriptions-item>
                    <el-descriptions-item label="CNPJ">
                        {{ getEmpresa.cnpj }}
                    </el-descriptions-item>
                    <el-descriptions-item label="Nome Fantasia">
                        {{ getEmpresa.nomeFantasia}}
                    </el-descriptions-item>
                    <el-descriptions-item label="Telefone">
                        {{ getEmpresa.telefone }}
                    </el-descriptions-item>
                    <el-descriptions-item label="E-mail">
                        {{ getEmpresa.email }}
                    </el-descriptions-item>
                </el-descriptions>
            </el-col>
        </el-row>
        <el-button type="warning" @click="redirectToEdit">
            Editar
        </el-button>
        <el-button type="danger" @click="redirectToBack">
            Voltar
        </el-button>
    </el-main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'DetalhesEmpresa',
    methods: {
        redirectToEdit() {
            this.$router.push('/empresa/alterar')
        },
        redirectToBack() {
            this.$router.go(-1)
        }
    },
    computed: {
        ...mapGetters([
            'getEmpresa'
        ])
    }
}
</script>