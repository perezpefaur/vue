<template>
  <div class="home">
    <Characters />
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'
import Characters from '@/components/Characters.vue'
import Comics from '@/components/Comics.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Characters,
    Comics,
  },

  
} 
</script>
