<template>
  <div id="app">
    <router-view v-on:clickLogin='clickLogin'   :isLogin='isLogin' />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLogin : false
      }
    },
    methods : {
      clickLogin(value) {
        this.isLogin = value
      }


    }


  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.space{
  position: absolute;
  top: 65px;
  left : 200px;
}

.thin{
  margin-top: 6px;
  margin-left: 200px;
  width: 400px;
}
</style>
