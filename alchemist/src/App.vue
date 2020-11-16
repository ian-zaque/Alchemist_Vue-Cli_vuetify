<template>
  <v-app id="inspire">
    <v-card>          <!--CARD-->
      <v-navigation-drawer v-model="drawer" app>  <!--DRAWER-->

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="link in links" :key="link.titulo" large>
            <v-list-item-icon>
              <v-icon>{{ link.icone }}</v-icon>
            </v-list-item-icon>
            <router-link :to="link.rota" style="text-decoration:none;" replace><p class="item" depressed>{{link.titulo}}</p></router-link>
          </v-list-item>
        </v-list>
        
      </v-navigation-drawer>    <!--FIM DRAWER-->
    </v-card>         <!--FIM CARD-->

      <v-app-bar app>     <!--NAV BAR-->
          <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
          <router-link to="/" style="text-decoration: none;" replace><v-toolbar-title depressed>Alchemist</v-toolbar-title></router-link>
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
      links:[
        {rota:'/cadastro',titulo:'Cadastro',icone:"fas fa-user-plus",isPrivado:false},
        {rota:'/login',titulo:'Login',icone:'fas fa-sign-in-alt',isPrivado:false},
        {rota:'/perfil',titulo:'Perfil',icone:'far fa-id-badge',isPrivado:true},
        {rota:'/sair',titulo:'Sair',icone:'fas fa-sign-out-alt',isPrivado:true},
      ],

    }),
  }
</script>
<style>
  .item{
    text-decoration: none; margin: 10px 0px 0px -25px;
  }

</style>