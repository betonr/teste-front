<template>
    <article class="box-view" v-if="element">
        <img 
            :src="`${element.thumbnail.path}.${element.thumbnail.extension}`" 
            :title="`capa do quadrinho ${element.title}`" />
        <h1>{{ element.title }}</h1>
    </article>
</template>

<script>
export default {
    props: ['element']
}
</script>

<style lang="sass" scoped>
.box-view
    width: 150px
    margin: 5px
    border: 1px solid #CCC
    background: rgba(#000, 0.1)
    text-align: center
    padding: 2px
    img 
        width: 100%
</style>

