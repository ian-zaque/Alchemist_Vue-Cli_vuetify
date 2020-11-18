<template>
    <v-container class="d-flex justify-center">
        <div class="content">
            <h5 class="card-title" style="font-size:50px;">Entre em <strong>Alchemist</strong>!</h5>
            <v-card class="mx-auto d-flex justify-center">
                <v-card-actions v-if="msg==null">
                    <v-form>
                        <v-text-field v-model="user.email" name="email" type="email" label="Email" id="email" required></v-text-field>
                        <v-text-field v-model="user.password" type="password" name="password" label="Senha" id="password" required></v-text-field>
                        <v-btn :disabled="isRequesting==true" raised class="mr-4" color="primary" @click="logar">Entrar</v-btn>

                        <router-link to="/" style="text-decoration:none;" replace>
                            <v-btn class="mr-4" outlined>Homepage</v-btn>
                        </router-link>
                        <router-link to="/cadastro" style="text-decoration:none;" replace>
                            <v-btn class="mr-4" outlined>Cadastre-se</v-btn>
                        </router-link>
                    </v-form>
                </v-card-actions>
                <v-card-actions class="container mx-auto" v-else>
                    <v-alert :type="logou==true ? 'success':'error'" dense>
                        <div v-if="msg.status==200">
                            Logado com Sucesso!
                        </div>
                        <div v-else>
                            Erro ao logar? Tente Novamente
                        </div>
                    </v-alert>
                    <router-link class="d-flex justify-center" to="/" style="text-decoration:none;" replace>
                        <v-btn class="mr-4" outlined>Homepage</v-btn>
                    </router-link>
                </v-card-actions>
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

    computed: {
        logado() { return this.$store.state.Auth.status.loggedIn; }
    },

    created() {
        if (this.logado) { this.$router.replace('/'); }
    },

    methods: {
        logar(){
            this.isRequesting=true;
            this.$store.dispatch('Auth/login',this.user)
                .then(res=>{ this.msg =res; console.log(this.msg); this.logou=true; this.isRequesting=false;
                })
                .catch(error=>{ this.msg=error; this.logou=false; this.isRequesting=false;
                    console.error(error);
                });
        }
    },

}
</script>