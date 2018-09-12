<template>
    <section v-loading="loading">
        <el-alert
            v-show="comicsList == null"
            title="Desculpe, não conseguimos encontrar Quadrinhos relacionados a esse personagem."
            type="warning"
            show-icon />

        <div class="comics" v-if="comicsList != null && comicsList.length > 0">
            <div v-for="comic in comicsList.slice((pager-1)*10, (pager*10))" :key="comic.id">
                <m-box-view :element="comic" />
            </div>
        </div>

        <div class="box-paginator" v-if="comicsList != null && comicsList.length > 0">
            <el-pagination
                background
                :current-page.sync="pager"
                layout="prev, pager, next"
                :total="comicsList.length">
            </el-pagination>
        </div>
    </section>
</template>

<script>
import Characters from '@/middleware/Characters'

import BoxView from '@/views/components/characters/details-character/Box-view'

export default {
    props: ['id'],

    components: {
        'm-box-view': BoxView
    },

    data: () => ({
        pager: 1,
        comicsList: [],
        loading: false
    }),

    mounted() {
        this._getComics(this.id)
    },

    watch: {
        id(newId) {
            this._getComics(newId)
        }
    },

    methods: {
        async _getComics(id) {
            try {
                this.loading = true
                let response = await Characters.getComicsById(id)
                this.comicsList = response.data.data.results

                if(response.data.data.results <= 0) this.comicsList = null
                this.loading = false

            } catch(error) {
                this.$alert('OPSSS: Desculpe, mas encontramos um erro ao tentar nos conectar com o servidor de dados, entre em contato com nosso suporte!', 'Erro', {
                    dangerouslyUseHTMLString: true,
                    confirmButtonText: 'OK',
                    type: 'error'
                })
                this.loading = false
            }
        }   
    }
}
</script>
<style lang="sass" scoped>
.comics
    display: flex
    flex-flow: row wrap
    justify-content: center

    .box-view
        width: 150px
        margin: 5px
        border: 1px solid #CCC
        background: rgba(#000, 0.1)
        text-align: center
        padding: 2px
        img 
            width: 100%

.box-paginator
        display: flex
        justify-content: center
        margin: 20px
</style>
