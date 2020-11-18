<template>
    <v-container class="d-flex justify-center">
        <div name="tabela">
            <v-card class="mx-auto" style="width:500px;">
                <v-card-title primary-title>
                    Empresas  
                    <v-btn small style="d-flex justify-right" color="primary" @click="modalOn=true"> 
                        <v-icon> {{'fas fa-plus'}} </v-icon>
                    </v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <div v-if="empresas.length ==0">
                    <p style="font-size:30px" class="h5 d-flex justify-center">Não há empresas cadastradas!</p>
                </div>
                <div v-else-if="isRequesting==true">
                    <v-icon>{{ 'fas fa-spinner'}}</v-icon>
                </div>
                <div v-else>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Nome</th>
                                    <th class="text-left">CNPJ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="emp in empresas" :key="emp.id">
                                    <td>{{emp.name}}</td>
                                    <td>{{emp.cnpj}}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </div>
            </v-card>
        </div>
        <div name="dialogo">
            <v-dialog v-model="modalOn" persistent max-width="500px" transition="dialog-transition">
                <v-card>
                    <v-card-title primary-title>Cadastro de Empresas</v-card-title>
                    <v-card-actions class="d-flex justify-center">
                       <v-form>
                           <v-text-field required v-model="empresa.nome" type="text" label="Nome da Empresa"></v-text-field>
                           <v-text-field required v-model="empresa.cnpj" min="1" type="number" label="CNPJ da Empresa"></v-text-field>
                       </v-form>
                    </v-card-actions>

                    <v-card-actions class="d-flex justify-end">
                        <v-btn @click="modalOn=false" color="secondary" text raised>Fechar</v-btn>
                        <v-btn @click="salvar()" color="primary" text raised>Salvar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </v-container>
</template>
<script>
export default {
    name:'Empresa',
    data() {
        return {
            empresas:[], modalOn:false, empresa:{nome:'',cnpj:''}, isRequesting:false,
        }
    },

    methods: {
        getEmpresas(){
            this.isRequesting=true;
            this.$store.dispatch('Auth/show',this.userAtual.id)
                .then(res=>{ this.empresas=res.data; this.isRequesting=false; })
                .catch(error=> { console.error(error); this.isRequesting=false; });
        },

        salvar(){
            this.modalOn=false; this.isRequesting=true;
        }
    },

    mounted() {
        this.getEmpresas();
    },

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

    created() {
        if (!this.logado) { this.$router.replace('/'); }
    },
}
</script>