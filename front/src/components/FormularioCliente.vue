<template>
  <el-form name="form" label-position="top">
    <el-form-item label="Nome">
      <el-input v-model="nomeCliente" placeholder="Nome">
      </el-input>
    </el-form-item>
    <el-form-item label="CEP">
      <el-input type="number" v-model="cep" placeholder="CEP">
      </el-input>
    </el-form-item>
    <el-form-item label="Logradouro">
      <el-input v-model="logradouro" placeholder="Logradouro">
      </el-input>
    </el-form-item>
    <el-form-item label="Bairro">
      <el-input v-model="bairro" placeholder="Bairro">
      </el-input>
    </el-form-item>
    <el-form-item label="Cidade">
      <el-input v-model="cidade" placeholder="Cidade">
      </el-input>
    </el-form-item>
    <el-form-item label="Complemento">
      <el-input type="textarea" v-model="complemento" placeholder="Complemento">
      </el-input>
    </el-form-item>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="Número">
          <el-input type="number" v-model="numero" placeholder="Número">
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Estado">
          <el-input v-model="estado" placeholder="Estado">
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary">
        Realizar Pedido
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'FormularioCliente',
  data() {
    return {
      pedido: {
        nomeCliente: '',
        cep: '',
        logradouro: '',
        bairro: '',
        cidade: '',
        estado: '',
        complemento: '',
        numero: ''
      }
    }
  },
  methods: {
  }
}
</script>
