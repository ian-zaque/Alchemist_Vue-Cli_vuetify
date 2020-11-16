<template>
    <v-container class="d-flex justify-center">
        <div v-if="userAtual!=null" class="content">
            <h5 class="card-title" style="font-size:50px;">Perfil de<strong>Alchemist</strong>!</h5>
            <v-card class="mx-auto d-flex justify-center">
                <v-card-text>
                    <v-text-field v-model="user.email" name="email" label="Email" id="email" required></v-text-field>
                    <v-text-field v-model="user.password" name="password" label="Senha" id="password" required></v-text-field>
                </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>
<script>
export default {
    name:'Login',
    data() {
        return {
            user:[]
        }
    },

    computed: {
        logado() { return false; },
        userAtual() { 
            if(this.logado){
                console.log(localStorage.getItem('user'));
                return JSON.parse(localStorage.getItem('user'));
            }
            return null;
        }
    },

}
</script>