<template>
    <header class="header">
        <div class="logo">
            <img :src="images.icon" title="logo da marvel" alt="[logo da marvel]" />
        </div>
        <h1>Marvel</h1>
    </header>
</template>

<script>
import MarvelIcon from '@/views/assets/images/marvel_favicon.png'

export default {
    data() {
        return {
            images: {
                icon: MarvelIcon
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.header
    width: 100%
    background: rgba(#000, 0.3)
    display: flex
    justify-content: center
    align-items: center
    box-shadow: 0px 1px 5px #CCC

    .logo
        padding: 7.5px 10px
        img
            width: 40px
    
    h1
        font-size: 2.6em
        text-transform: uppercase

</style>
