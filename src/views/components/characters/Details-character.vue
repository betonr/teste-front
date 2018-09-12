<template>
    <section v-if="character != undefined">

        <el-dialog 
            title="Detalhes do Personagem"
            :visible="boxVisible"
            width="70%"
            :before-close="closeModal">

            <div class="box-details">
                <img 
                    :src="`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`" 
                    :title="`foto do personagem ${character[0].name}`" />

                <h1 class="name">{{ character[0].name }}</h1>

                <p class="title">
                    <i class="el-icon-tickets" />
                    Confira os quadrinhos, series e histórias relacionados ao personagem:
                </p>
                <el-tabs type="border-card" class="tabs-infos">
                    <el-tab-pane label="Quarinhos">
                        <m-comics-character :id="character[0].id"/>
                    </el-tab-pane>

                    <el-tab-pane label="Series">
                        <m-series-character :id="character[0].id"/>
                    </el-tab-pane>

                    <el-tab-pane label="Histórias">
                        <m-stories-character :id="character[0].id"/>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-dialog>

    </section>
</template>

<script>
import ComicsCharacter from '@/views/components/characters/details-character/Comics'
import SeriesCharacter from '@/views/components/characters/details-character/Series'
import StoriesCharacter from '@/views/components/characters/details-character/Stories'

export default {
    props: ['character', 'boxVisible'],

    components: {
        'm-comics-character': ComicsCharacter,
        'm-series-character': SeriesCharacter,
        'm-stories-character': StoriesCharacter
    },

    methods: {
        closeModal() {
            this.$emit('closeDetails')
        }
    }
}
</script>

<style lang="sass" scoped>
.box-details
    img
        width: 200px
        display: block
        margin: 0px auto !important
        border-radius: 10px

    h1
        text-align: center
        margin: 10px 0
        font-size: 2em

    p.title
        margin: 20px 20px 0px 20px
        font-weight: 600
        font-size: 1.2em

    .tabs-infos
        box-shadow: none !important
        margin: 10px 20px 10px 20px
</style>
