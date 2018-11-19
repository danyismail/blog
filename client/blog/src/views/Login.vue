<template>
    <div>
    <div class="form-group thin">
        <span v-if="error" class="alert alert-danger">Incorrect username or password</span>
        <label class="thin" for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control thin" aria-describedby="emailHelp" placeholder="Enter email">
        
    </div>
    <div class="form-group thin">
        <label class="thin" for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control thin"  placeholder="Password">
        <small class="form-text text-muted thin">We'll never share your password with anyone else.</small>
    </div>
    <button v-on:click="login" type="button" class="btn btn-warning">Login</button> 
    <hr> 
    <router-link to="/register">
        <a class="text-danger">Create New Account</a>
        </router-link>
    </div>
    
</template>
<script>

export default {
    data(){
        return {
            username : '',
            email : '',
            password : '',
            isLogin : false,
            error : false
           
        }
    },
    methods : {
        login : function(){
            axios.post('http://localhost:1212/users/login',{
                email: this.email,
                password: this.password
            })
             .then(data=>{
                 console.log('from vue client',data.data.token)
                 localStorage.setItem('token', data.data.token)
                 this.isLogin = true
                 this.$router.push('/home')
                //  this.$emit('clickLogin', this.isLogin)
             })
             .catch(err=>{
                 console.log(err)
                 this.error = true
                 console.log('Username or password failed')
             })
        }
    }
}

</script>


