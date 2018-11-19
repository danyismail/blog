<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
  <a class="navbar-brand" href="#">MyBlog</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
         <router-link  class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">Add Article</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Articles</a>
      </li>
      <li  class="nav-item">
        hello member
        <button v-if="isLogin" @click="logout" class="btn btn-danger btn-sm">Logout</button>
      </li>
      <li v-if="!isLogin" class="nav-item">
        <router-link  to="/register">
        <a class="text-danger">Please register first</a>
        </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
  props : ['isLogin'],
  data(){
    return{
      isLogin : false
    }
  },
  methods : {
    logout : function(){
      localStorage.removeItem('token')
      this.$router.push('/')
    },
    register : function(){
      axios.post('http://localhost:1212/users/register',{
                username : this.username,
                email: this.email,
                password: this.password
            })
             .then(data=>{
                 console.log('from vue client',data.data.token)
                 localStorage.setItem('token', data.data.token)
                 this.isLogin = true
                 this.$router.push('/register')
             })
             .catch(err=>{
                 console.log('Username or password failed')
             })
    }
  }
}
</script>

