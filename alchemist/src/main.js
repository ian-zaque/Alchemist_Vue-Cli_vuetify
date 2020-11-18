import Vue from 'vue'
import './plugins/axios'
import api from './services/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$http = api

api.interceptors.request.use(
  async config=>{
      console.log('foi 1')
      const token = localStorage.getItem('user').access_token;
      if(token){
          config.headers = { 
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      }   
      return token;
  },
  error=>{ Promise.reject(error); }
);

api.interceptors.response.use(
  res=>{ 
      console.log('foi 2')
      if(res.status==200 || res.status==201){
          const horaLogin = localStorage.getItem('horaLogin');
          if(2000000 < Date.now() - horaLogin){
              store.dispatch('Auth/refreshToken');
          }
          return Promise.resolve(res);
      }
      else{ return Promise.reject(res); }
  },
  error=>{
      if(error){
          router.replace({
              path:'/login',
              query:{redirect:router.currentRoute.fullPath}
          });
      }
      return Promise.reject(error);
  }

);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
