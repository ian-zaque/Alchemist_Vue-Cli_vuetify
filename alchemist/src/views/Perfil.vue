<template>
    <v-container class="d-flex justify-center">
        <div v-if="userAtual!=null" class="content">
            <h5 class="card-title" style="font-size:50px;">Perfil de <u>{{ userAtual.user.name }}</u></h5>
            <v-card class="mx-auto d-flex justify-center">
                    <v-card-text>
                        <v-text-field v-model="userAtual.user.name" disabled name="email" label="Nome" id="email" required></v-text-field>
                        <v-text-field v-model="userAtual.user.email" disabled name="senha" label="Email" id="senha" required></v-text-field>
                        <router-link to="/" class="d-flex justify-center" style="text-decoration:none;" replace>
                            <v-btn class="mr-4" outlined>Homepage</v-btn>
                        </router-link>
                    </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>
<script>
export default {
    name:'Perfil',

    computed: {
        logado() { return this.$store.state.Auth.status.loggedIn; },
        userAtual() { 
            if(this.logado==true){
                console.log(localStorage.getItem('user'));
                return JSON.parse(localStorage.getItem('user'));
            }
            return null;
        }
    },

    mounted() {
        if (!this.logado) {
            this.$router.replace('/login');
        }
    }

}
</script>