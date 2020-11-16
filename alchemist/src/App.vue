<template>
  <v-app id="inspire">
    <v-card>
      <v-navigation-drawer v-model="drawer" app>  <!--DRAWER-->
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title @click="drawer=!drawer" class="title">
              <v-icon>{{ 'fas fa-atom' }}</v-icon> Alchemist
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="link in links" :key="link.titulo" large>
            <v-list-item-icon>
              <v-icon>{{ link.icone }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                {{link.titulo}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        
      </v-navigation-drawer>    <!--FIM DRAWER-->
    </v-card>

      <v-app-bar app>     <!--NAV BAR-->
          <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>Alchemist</v-toolbar-title>
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
        {rota:'/',titulo:'Home',icone:'fas fa-atom'},
        {rota:'/cadastro',titulo:'Cadastro',icone:"fas fa-user-plus"},
        {rota:'/login',titulo:'Login',icone:'fas fa-sign-in-alt'},
        {rota:'/perfil',titulo:'Perfil',icone:'far fa-id-badge'},
        {rota:'/sair',titulo:'Sair',icone:'fas fa-sign-out-alt'},
      ],

    }),
  }
</script>