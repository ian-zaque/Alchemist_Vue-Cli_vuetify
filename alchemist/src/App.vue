<template>
  <v-app id="inspire">
    <v-card>          <!--CARD-->
      <v-navigation-drawer v-model="drawer" app>  <!--DRAWER-->

        <v-divider></v-divider>

        <v-list dense nav>
          <div v-if="!isLogado">
              <v-list-item large>
                <v-list-item-icon>  <!--LOGIN-->
                  <v-icon>{{ 'fas fa-sign-in-alt' }}</v-icon>
                </v-list-item-icon>
                <router-link to="/login" style="text-decoration:none;" replace> <p class="item" depressed>Entrar</p> </router-link>
            </v-list-item>        <!--FIM LOGIN-->
            <v-list-item large>   <!--CADASTRO-->
                <v-list-item-icon>
                  <v-icon>{{ 'fas fa-user-plus' }}</v-icon>
                </v-list-item-icon>
                <router-link to="/login" style="text-decoration:none;" replace> <p class="item" depressed>Cadastre-se</p> </router-link>
            </v-list-item>        <!--FIM CADASTRO-->
          </div>
           <div v-else>
              <v-list-item large>   <!--PERFIL-->
                <v-list-item-icon>
                  <v-icon>{{ 'far fa-id-badge' }}</v-icon>
                </v-list-item-icon>
                <router-link to="/perfil" style="text-decoration:none;" replace> <p class="item" depressed>Perfil</p> </router-link>
              </v-list-item>        <!--FIM PERFIL-->

              <v-list-item large>   <!--EMPRESAS-->
                <v-list-item-icon>
                  <v-icon>{{ 'fab fa-empire' }}</v-icon>
                </v-list-item-icon>
                <router-link to="/empresas" style="text-decoration:none;" replace> <p class="item" depressed>Empresas</p> </router-link>
              </v-list-item>        <!--FIM EMPRESAS-->

            <v-list-item large>   <!--SAIR-->
                <v-list-item-icon>
                  <v-icon>{{ 'fas fa-sign-out-alt' }}</v-icon>
                </v-list-item-icon>
                <a style="text-decoration:none;" @click='sair()'> <p class="item" depressed>Sair</p> </a>
            </v-list-item>        <!--FIM SAIR-->
          </div>
        </v-list>
        
      </v-navigation-drawer>    <!--FIM DRAWER-->
    </v-card>         <!--FIM CARD-->

      <v-app-bar app>     <!--NAV BAR-->
          <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
          <router-link to="/" style="text-decoration: none;" replace><v-toolbar-title depressed> <p class="nome">Alchemist</p> </v-toolbar-title></router-link>
      </v-app-bar>      <!--FIM NAV BAR-->

      <v-main>
          <router-view> </router-view>
      </v-main>

    </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer:false,
    }),

    computed:{
      isLogado() {
          if(this.$store.state.Auth.user){ return true;  }
          return false;
      },
      userAtual() { 
            if(this.isLogado){
                console.log(localStorage.getItem('user'));
                return JSON.parse(localStorage.getItem('user'));
            }
            return null;
        }
    },

    methods: {
      sair(){
        this.$store.dispatch('Auth/logout'); this.drawer= !this.drawer; this.$router.replace('/')
      }
    },


  }
</script>
<style>
  .item{
    text-decoration: none; margin: 10px 0px 5px -25px; color:gray;
  }

  .nome{
    text-decoration: none; margin: 15px 0px 0px 0px; color:gray;
  }

</style>