<template lang="html">
    <div>
        <h3>Aquí cada personaje</h3>
        <p>{{this.$route.params.id}}</p>
        <ul>
            <li v-for="char in character">
                {{char.name}}
                {{char.description}}
            
            </li>
        </ul>
        <img :src="url" alt="">
    </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
    name: 'Character',

    mounted() {

        this.getImage()
        this.$store.dispatch('getCharacter', this.$route.params.id)
    },
    data() {
        return {
            url: "",
            size: 'standard_large.jpg'
        }
    },

    computed: {
        ...mapState({
            character: state => state.character,
            preUrl: state => state.url,
        })
    },
    
    methods: {
        getImage() {
            this.url = `${this.preUrl}${this.size}`
            
        } 
    },

}
</script>

<style lang="css"></style>