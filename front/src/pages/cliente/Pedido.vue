<template>
    <el-row :column="3" :gutter="24" :offset="6">
        <el-col :span="6" >
            <el-card >
                <span>Bueno Pneuzinho</span>
                <div>
                    <el-collapse>
                        <el-collapse-item title="Selecione o produto"  >
                            <el-select v-model="nomeProduto" placeholder="Escolha um produto">
                                <el-option >
                                </el-option>
                            </el-select>
                            <el-input type="number" v-model="quantidade" placeholder="Quantidade">
                            </el-input>
                        <div>
                            <el-collapse>
                                <el-collapse-item title="Dados" :name="nomeProduto">
                                    <FormularioCliente />
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import FormularioCliente from '@/components/FormularioCliente.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'SelecaoEmpresa',
    components:{
        FormularioCliente
    },
    data() {
        return {
            nome: '',
            quantidade: '',
            nomeProduto: ''
        }
    },
    methods: {
    }
}
</script>