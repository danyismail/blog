<template>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            
  <div class="form-group">
      <div v-if="error" class="alert alert-danger">
          Error
      </div>
    <label for="exampleInputEmail1">Username</label>
    <input v-model="username" type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input v-model="email" type="email" class="form-control"  placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="password" type="password" class="form-control" placeholder="Password">
  </div>
  
  <button @click="register" class="btn btn-primary">Submit</button>

        </div>
        <div class="col-md-4"></div>
    </div>
</template>
<script>
export default {
    data(){
       return{
           username : '',
           email : '',
           password : '',
           error : false
       }
    },
    methods : {
        register : function(){
            axios.post('http://localhost:1212/users/register',{
                username : this.username,
                email: this.email,
                password: this.password
            })
             .then(data=>{
                 console.log('berhasil register',data.data.token)
                 localStorage.setItem('token', data.data.token)
                 this.$router.push('/home')
             })
             .catch(err=>{
                 this.error = true
             })
        }
    }
}
</script>

