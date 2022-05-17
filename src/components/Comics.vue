<template lang="html">
    <div>
    <div class="container__cards">
        <div class="card" v-for="comic in comics" @click="toogle"> 
            <img class="card__image" :src="comic.thumbnail.path + '/standard_fantastic.' + comic.thumbnail.extension " :alt="comic.id"/>
            <h3 class="card__title">{{comic.title}}</h3>
            <div class="card__information">
                <h4 class="card__subtitle">stories</h4>
                <ul v-for="story in comic.stories.items.slice(0,3)">
                    <li>{{story.name}}</li>
                </ul>
                <h4 class="card__subtitle">description</h4>
                <p v-if="comic.description != ''">
                    {{comic.description}}
                </p>
                <p v-else>
                    This comic doesnt have a description.
                </p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
    name: 'Comics',

    mounted() {
        this.$store.dispatch('getComics', this.$route.params.id)
    },

    computed: {
        ...mapState({
            comics: state => state.comics,
        })
    },
    
    methods: {
        toogle(event) {
            const div = event.path[1]
            const eleInfo = div.querySelector('.card__information');
            div.classList.toggle('card--active');

            if (!div.classList.contains('card--active'))
            eleInfo.classList.toggle('card__information--collapse')
            else
            setTimeout(() => eleInfo.classList.toggle('card__information--collapse'), 270);
        }
    },

}
</script>

<style lang="css">

</style>