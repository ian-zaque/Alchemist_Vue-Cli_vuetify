import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/auth';

class AuthService{

    login(user){
        return axios.post(url+'/login',user)
            .then(res=>{
                if(res.data.access_token){
                    localStorage.setItem('user',JSON.stringify(res.data));
                    localStorage.setItem('horaLogin',JSON.stringify(Date.now()))
                }
                return res;
            })
    }

    register(user){
        return axios.post(url+'/register',user)
            .then(res=>{ return res; })
            .catch(erro=>{ return erro; })
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('horaLogin');
    }

    refreshToken(){
        return axios.get(url+'/refresh')
                .then(res=>{ return res; })
                .catch(erro=>{ return erro; })
    }

    authHeader(){
        let user = localStorage.getItem('user');
        if (user && user.access_token) {
            axios.post(url+'/user-profile')
                .then(()=>{ return { Authorization: 'Bearer ' + user.access_token }; })
                .catch(()=>{ return {}; })
        } 
        else { return {}; }
    }

    show(id){
        return axios.get(url+'/show/'+id)
                .then(res=>{ return res; })
                .catch(erro=>{return erro; });
    }

}

export default new AuthService();
