<template>
    <v-container class="d-flex justify-center">
        <div class="content">
            <h5 class="card-title" style="font-size:50px;">Bem-vindo(a) à <strong>Alchemist</strong>!</h5>
            <v-card class="mx-auto">
                <v-card-actions v-if="isLogado==false">
                    <router-link to="/login" replace>
                        <v-btn outlined text class="ma-2 item" color="light">Entrar</v-btn>                    
                    </router-link>
                    <router-link to="/cadastro" replace> <v-btn outlined text class="item ma-2 item" color="secondary">Cadastrar</v-btn> </router-link>
                </v-card-actions>
                <v-card-actions v-else>
                    <h5><strong>{{userAtual.user.name}}</strong> está logado!</h5>
                    <router-link to="/perfil"><v-btn outlined text class="item ma-2 item" color="secondary">Perfil</v-btn>   </router-link>
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
<style>
   .item{
        position: relative; font-size: 20px; text-decoration: none;
        transition: 0.4s ease; margin: 0px 10px 0px 10px;
    }
    .item:hover{
        color: #313238; font-style: italic; text-decoration: none; font-size: 22px;
    }
    .item:hover::after{
        color: #313238; font-style: italic; text-decoration: none; font-size: 22px;
    }
    .links{
        color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
    }
</style>