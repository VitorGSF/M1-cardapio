import { createRouter, createWebHistory } from 'vue-router'

const route = [
    {
        path: '/',
        redirect: '/empresa'
    },
    {
        path: '/empresa',
        component: () => import('../pages/empresa/LoginEmpresa.vue')
    },
    {
        path: '/empresa/cadastro',
        component: () => import('../pages/empresa/CadastrarEmpresa.vue')
    },
    {
        path: '/empresa/detalhe',
        component: () => import('../pages/empresa/DetalhesEmpresa.vue')
    },
    {
        path: '/empresa/alterar',
        component: () => import('../pages/empresa/AlterarEmpresa.vue')
    },
    {
        path: '/empresa/cadastrar/produto',
        component: () => import('../pages/empresa/CadastrarProduto.vue')
    },
    {
        path: '/empresa/adicionar/produto',
        component: () => import('../pages/empresa/AdicionarProduto.vue')
    },
    {
        path: '/cliente/pedido',
        component: () => import('../pages/cliente/Pedido.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: route
})

export default router