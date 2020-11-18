import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Perfil from '../views/Perfil.vue'
import Empresa from '../views/Empresa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/empresas',
    name: 'Empresa',
    component: Empresa
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

router.beforeEach(async(to, from, next)=>{
  const publicos = ['/login', '/cadastro', '/'];
  const authRequired = !publicos.includes(to.path);
  const logado = localStorage.getItem('user');

  if (authRequired && !logado) { next('/login'); }
  else { next(); }
})

export default router
