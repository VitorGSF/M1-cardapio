<template>
    <el-main>
        <el-row :gutter="12">
                <el-card v-for="item in getPedidos" :key="item._id" shadow="hover">
                    Nome da Empresa: {{item.empresa.nome}}
                    <br>
                    Produto: {{item.produto.nome}}
                    <br>
                    Preço: {{item.produto.preco}}
                    <br>
                    Nome do Cliente: {{item.cliente.nome}}
                    <br>
                    Status:
                    <el-select v-model="item.status" placeholder="Selecione um status">
                        <el-option value="Finalizado">
                            Finalizado
                        </el-option>
                        <el-option value="Entregue">
                            Entregue
                        </el-option>
                        <el-option value="A caminho">
                            A caminho
                        </el-option>
                        <el-option value="Pendente">
                            Pendente
                        </el-option>
                    </el-select>
                    <el-button type="success" @click="enviarStatus(item._id, item.status)">
                        Salvar
                    </el-button>
                </el-card>
        </el-row>
        <el-button type="danger" @click="back">
            Voltar
        </el-button>
    </el-main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ListaPedidos',
    mounted() {
        this.listagemPedidos()
    },
    methods: {
        ...mapActions([
            'listaPedidosEmpresa',
            'updatePedido'
        ]),
        listagemPedidos() {
            this.listaPedidosEmpresa()
        },
        enviarStatus(id, value) {
            this.updatePedido({
                id,
                value
            }).then( () => {
                this.$router.go(-1)
            })
        },
        back() {
            this.$router.go(-1)
        }
    },
    computed: {
        ...mapGetters([
            'getPedidos'
        ])
    }
}
</script>