<template>
    <v-container class="d-flex justify-center">
        <div class="content">
            <h5 class="card-title" style="font-size:50px;">Cadastre-se em <strong>Alchemist</strong>!</h5>
            <v-card class="mx-auto d-flex justify-center">
                <v-card-actions v-if="msg==null">
                    <v-form ref="form" lazy-validation>
                        <v-text-field v-model="user.name" name="name" label="Nome" id="name" required></v-text-field>
                        <v-text-field v-model="user.email" :rules="emailRules" name="email" label="Email" id="email" required></v-text-field>
                        <v-text-field v-model="user.password" name="password" label="Senha" id="password" required></v-text-field>
                        <v-text-field v-model="user.password" name="password_confirm" label="Confirmação de Senha" id="password_confirm" required></v-text-field>
                        <v-btn :disabled="isRequesting==true" class="mr-4" color="primary" @click="cadastrar">Cadastrar</v-btn>
                    </v-form>                
                </v-card-actions>
                <v-card-text v-else>
                    <v-alert :type="logou==true ? 'success':'error'" dense>
                        {{msg}}
                    </v-alert>
                    <div class="d-flex justify-center">
                        <router-link to="/"><button type="button" class="item btn btn-outline-primary" replace>Homepage</button></router-link>
                    </div>
                </v-card-text>
            </v-card>
        </div>
    </v-container>
</template>
<script>
export default {
    name:'Cadastro',
    data() {
        return {
            user:{name:'',email:'',password:'',}, isRequesting:false, msg:null, logou:false,
            emailRules:[
                v => !!v || 'E-mail é requerido',
                v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
            ],
        }
    },

    methods: {
        cadastrar(){
            this.isRequesting=true;
        }
    },

}
</script>