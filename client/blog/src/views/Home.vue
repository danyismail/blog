<template>
  <div class="home">
    <Header :isLogin='isLogin' />
    <div>
      <Sidebar />
      <Main  />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import Main from '@/components/Main.vue';

export default {
  props : ['isLogin'],
  name: 'home',
  components: {
    Header,
    Sidebar,
    Main
  }
};
</script>
