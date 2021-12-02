<template>
    <el-main>
        <el-form name="form" label-position="top">
            <el-form-item label="Número de Cartão">
                <el-input v-model="cardNumber" type="number" placeholder="Número de Cartão" required></el-input>
            </el-form-item>
            <el-form-item label="Mês de Expiração do Cartão">
                <el-input type="number" v-model="cardExpirationMonth" placeholder="Mês de Expiração do Cartão" min="1" max="12" required></el-input>
            </el-form-item>
            <el-form-item label="Ano de Expiração do Cartão">
                <el-input type="number" v-model="cardExpirationYear" placeholder="Ano de Expiração do Cartão" min="2021" required></el-input>
            </el-form-item>
            <el-form-item label="Titular do Cartão">
                <el-input v-model="cardholderName" placeholder="Titular do Cartão" required></el-input>
            </el-form-item>
            <el-form-item label="E-mail">
                <el-input type="email" v-model="cardholderEmail" placeholder="E-mail" required></el-input>
            </el-form-item>
            <el-form-item label="Código de Segurança">
                <el-input type="number" v-model="securityCode" placeholder="Código de Segurança" required></el-input>
            </el-form-item>
            <el-form-item label="Parcelas">
                <el-input type="number" v-model="installments" placeholder="Parcelas" min="1" max="12" required></el-input>
            </el-form-item>
            <el-form-item label="Banco">
                <el-input type="number" v-model="issuer" placeholder="Banco" required></el-input>
            </el-form-item>
            <el-form-item label="Tipo de Documento">
                <el-input v-model="identificationType" placeholder="Tipo de Documento" required></el-input>
            </el-form-item>
            <el-form-item label="Número do Documento">
                <el-input type="number" v-model="identificationNumber" placeholder="Número do Documento" required></el-input>
            </el-form-item>
            <el-button type="success" @click="realizarPagamento">
                Realizar Pagamento
            </el-button>
            <el-button @click="back" type="danger">
                Voltar
            </el-button>
        </el-form>
    </el-main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Pagamento',
    data() {
        return {
            cardholderName: '',
            cardholderEmail: '',
            cardNumber: '',
            cardExpirationMonth: '',
            cardExpirationYear: '',
            securityCode: '',
            installments: '',
            identificationType: '',
            identificationNumber: '',
            issuer: ''
        }
    },
    methods: {
        ...mapActions([
            'pagar'
        ]),
        realizarPagamento() {
            const mp = new MercadoPago('TEST-061e219c-413a-41a5-b239-07ec5d4b6a8a')

            mp.createCardToken({
                cardNumber: this.cardNumber,
                cardholderName: this.cardholderName,
                cardExpirationMonth: this.cardExpirationMonth,
                cardExpirationYear: this.cardExpirationYear,
                securityCode: this.securityCode,
                identificationType: this.identificationType,
                identificationNumber: this.identificationNumber
            }).then((response) => { 
                this.pagar({
                    installments: this.installments,
                    identificationType: this.identificationType,
                    identificationNumber: this.identificationNumber,
                    issuer: this.issuer,
                    email: this.cardholderEmail,
                    docType: this.identificationType,
                    docNumber: this.identificationNumber,
                    token: response.id
                }).then( () => {
                    this.$router.go(-1)
                })
            })
        },
        back() {
            this.$router.go(-1)
        }
    }
}
</script>