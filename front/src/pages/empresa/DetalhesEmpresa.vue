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
    </el-main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'DetalhesEmpresa',
    methods: {
        ...mapActions([
            'detalhesEmpresa'
        ])
    },
    computed: {
        ...mapGetters([
            'getEmpresa'
        ])
    }
}
</script>