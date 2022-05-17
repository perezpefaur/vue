<template lang="html">
    <div>
        <div class="container" v-for="char in character">
            <img class="caracter-image" :src="char.thumbnail.path + '/standard_fantastic.' + char.thumbnail.extension " :alt="char.id"/>
            <div class="dummy"></div>
            <div class="description">
                <h1 class="char-name">{{char.name}}</h1>
                <p class="description-par">{{char.description}}</p>
            </div>
        </div>
        <Comics />
    </div>
</template>

<script>

import { mapState } from 'vuex';
import Comics from './Comics.vue'
export default {
    name: 'Character',

    mounted() {
        this.$store.dispatch('getCharacter', this.$route.params.id)
    },

    computed: {
        ...mapState({
            character: state => state.character,
        })
    },
    
    methods: {
    },
    components: {
        Comics,
     },

}
</script>

<style lang="css">
.container {
    display: flex;
    padding: 2% 20%;
}
.caracter-image{
    width: 100%;
    border: 5px solid rgb(0, 0, 0);
    max-width: 300px;
}
.description{
    border: 5px solid rgb(0, 0, 0);
    background-color: white;
    flex-direction: column;
    min-width: 400px;
}
.dummy{
    padding-left: 3%;
}
.char-name{
  line-height: 1.5;
  font-family: var(--font-family-title);
  font-weight: var(--font-weight-bold);
  font-size: 25px;
  padding: 2%;
}
.description-par {
    padding: 5%;
}

</style>