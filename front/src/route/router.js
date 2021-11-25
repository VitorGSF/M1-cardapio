import { createRouter, createWebHistory } from 'vue-router'

const route = [
    {
        path: '/',
        component: () => import('../pages/TelaInicial.vue')
    },
    {
        path: '/empresa',
        component: () => import('../pages/empresa/LoginEmpresa.vue')
    },
    {
        path: '/cliente',
        component: () => import('../pages/cliente/LoginCliente.vue')
    },
    {
        path: '/empresa/menu',
        component: () => import('../pages/empresa/MenuEmpresa.vue')
    },
    {
        path: '/empresa/cadastro',
        component: () => import('../pages/empresa/CadastrarEmpresa.vue')
    },
    {
        path: '/cliente/cadastro',
        component: () => import('../pages/cliente/CadastrarCliente.vue')
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
        path: '/empresa/lista/produto',
        component: () => import('../pages/empresa/ListaProdutos.vue')
    },
    {
        path: '/empresa/pedidos',
        component: () => import('../pages/empresa/ListaPedidos.vue')
    },
    {
        path: '/cliente/menu',
        component: () => import('../pages/cliente/MenuCliente.vue')
    },
    {
        path: '/cliente/perfil',
        component: () => import('../pages/cliente/PerfilCliente.vue')
    },
    {
        path: '/cliente/alterar',
        component: () => import('../pages/cliente/AlterarCliente.vue')
    },
    {
        path: '/cliente/pedido',
        component: () => import('../pages/cliente/Pedido.vue')
    },
    {
        path: '/cliente/pagamento',
        component: () => import('../pages/cliente/Pagamento.vue')
    },
    {
        path: '/cliente/pedidos',
        component: () => import('../pages/cliente/ListaPedidos.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/Page404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: route
})

export default router