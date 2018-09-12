<template>
    <div class="card-character">
        <div class="box-thumbnail">
            <v-lazy-image 
                :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" 
                :title="`foto do personagem ${character.name}`" />
        </div>

        <div class="box-infos">
            <h1>{{ character.name }}</h1>
            <p><b>=> Quantidade de quadrinhos:</b> {{ character.comics.available }}</p>
            <el-button type="info" size="mini" @click="details(character.id)" plain>+ DETALHES</el-button>
        </div>
    </div>
</template>

<script>
import VLazyImage from "v-lazy-image"

export default {
    props: ['character'],

    components: {
        VLazyImage
    },

    methods: {
        details(id) {
            this.$emit('details', id)
        }
    }
}
</script>

<style lang="sass" scoped>
.card-character
    width: 100%
    margin: 10px 0 0 0
    padding: 10px
    border: 1px solid #CCC
    background: rgba(#000, 0.03)
    display: flex

    .box-thumbnail
        background: rgba(red, 0.3)
        padding: 3px 3px 1px 3px
        border-radius: 10px
        margin-right: 15px
        img 
            width: 100px
            border-radius: 10px
        .v-lazy-image
            filter: blur(5px)
            transition: filter 0.7s
        .v-lazy-image-loaded 
            filter: blur(0)                    

    .box-infos
        display: flex
        flex-direction: column
        align-items: start
        justify-content: space-between
        padding: 5px 0
</style>
