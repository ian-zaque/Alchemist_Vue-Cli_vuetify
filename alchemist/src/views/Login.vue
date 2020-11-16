<template>
    <v-container class="d-flex justify-center">
        <div class="content">
            <h5 class="card-title" style="font-size:50px;">Entre em <strong>Alchemist</strong>!</h5>
            <v-card class="mx-auto d-flex justify-center">
                <v-card-actions v-if="msg==null">
                    <v-form>
                        <v-text-field v-model="user.email" name="email" label="Email" id="email" required></v-text-field>
                        <v-text-field v-model="user.password" name="password" label="Senha" id="password" required></v-text-field>
                        <v-btn :disabled="isRequesting==true" class="mr-4" color="primary" @click="logar">Entrar</v-btn>
                    </v-form>                
                </v-card-actions>
                <v-card-text v-else>
                    
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
            user:{email:'',password:'',}, isRequesting:false, msg:null, logou:false,
        }
    },

    methods: {
        logar(){
            this.isRequesting=true;
        }
    },

}
</script>