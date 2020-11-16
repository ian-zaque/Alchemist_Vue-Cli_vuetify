<template>
    <v-container class="d-flex justify-center">
        <div class="content">
            <h5 class="card-title" style="font-size:50px;">Bem-vindo(a) à <strong>Alchemist</strong>!</h5>
            <v-card class="mx-auto">
                <v-card-actions v-if="isLogado==false">
                    <router-link to="/login" replace>
                        <v-btn outlined text class="ma-2 item" color="light">Entrar</v-btn>                    
                    </router-link>
                    <router-link to="/cadastro" replace> <v-btn outlined text color="secondary">Cadastrar</v-btn> </router-link>
                </v-card-actions>
                <v-card-actions v-else>
                    <h5><strong>{{userAtual.user.name}}</strong> está logado!</h5>
                    <router-link to="/perfil" replace> <v-btn outlined text color="secondary">Perfil</v-btn> </router-link>
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
          if(this.nome!=''){ return true;  }
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
