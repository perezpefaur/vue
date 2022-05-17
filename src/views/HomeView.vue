<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Characters />
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'
import Characters from '@/components/Characters.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Characters
  },

  
} 
</script>
