<template lang="hmtl">
<div>
    <h3>Characters</h3>

    <ul>
        <li v-for="character in characters">
        <router-link :to="{name: 'character', params: { id: character.id }}">{{character.name}}</router-link>
        </li>
    </ul>
</div></template>

<script>
import {secret_key, public_key} from '../marvel'
import axios from 'axios'
import { mapState } from 'vuex';
export default {
    name: 'Characters',
    mounted() {
        this.$store.dispatch('getCharacters')
        console.log(this.characters)
    },
    computed: {
        ...mapState({
            characters: state => state.characters
        })
    },
    methods:{
    
  }
    
};
</script>

<style lang="css">
</style>