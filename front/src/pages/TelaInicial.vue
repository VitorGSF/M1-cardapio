<template>
    <el-main>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form name="form">
                    <el-form-item>
                        <el-button type="primary" @click="redirectToCliente">
                            Sou um Usuário
                        </el-button>
                        <el-button type="primary" @click="redirectToEmpresa">
                            Sou uma Empresa
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
export default {
    name: 'TelaInicial',
    methods: {
        redirectToCliente() {
            this.$router.push('/cliente')
        },
        redirectToEmpresa() {
            this.$router.push('/empresa')
        }
    }
}
</script>