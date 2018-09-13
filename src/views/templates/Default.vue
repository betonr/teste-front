<template>
    <div class="general">
        <m-header />

        <!-- CONTENT PAGE -->
        <router-view />

        <m-footer />        
    </div>
</template>

<script>
import Header from '@/views/components/default/Header'
import Footer from '@/views/components/default/Footer'

export default {
    name: "Default",

    components: {
        'm-header': Header,
        'm-footer': Footer
    }
}
</script>

<style lang="sass" scoped>
</style>
