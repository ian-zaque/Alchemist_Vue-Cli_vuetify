<template>
    <v-container class="d-flex justify-center">
        <div>
            <h5 class="card-title" style="font-size:50px;">Bem-vindo(a) à <strong>Alchemist</strong>!</h5>
            <v-card class="mx-auto">
                <v-card-actions class="d-flex justify-center" v-if="isLogado==false">
                    <router-link to="/login" style="text-decoration:none;" replace>
                        <v-btn outlined class="ma-2 item" color="light">Entrar</v-btn>                    
                    </router-link>
                    <router-link to="/cadastro" style="text-decoration:none;" replace> 
                        <v-btn outlined color="secondary">Cadastrar</v-btn> 
                    </router-link> 
                </v-card-actions>

                <v-card-actions class="d-flex justify-center" v-else>
                    <h5><strong>{{userAtual.user.name}}</strong> está logado!</h5>
                    <router-link to="/perfil" style="text-decoration:none;" replace>
                        <v-btn class="mr-4" outlined color="secondary">Perfil</v-btn> 
                    </router-link>
                </v-card-actions>
            </v-card>
        </div>
    </v-container>
</template>
<script>
export default {
    name:'Homepage',
    data() {
        return {
            nome:'',
        }
    },

    computed: {
      isLogado() {
          if(this.$store.state.Auth.status.loggedIn){ return true;  }
          return false;
      },
      userAtual() { 
            if(this.isLogado==true){
                return JSON.parse(localStorage.getItem('user'));
            }
            return null;
        }
    }

}
</script>
