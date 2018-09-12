<template>
    <section v-loading="loading">
        <el-alert
            v-show="seriesList == null"
            title="Desculpe, não conseguimos encontrar Series relacionadas a esse personagem."
            type="warning"
            show-icon />

        <div class="series" v-if="seriesList != null && seriesList.length > 0">
            <div v-for="serie in seriesList.slice((pager-1)*10, (pager*10))" :key="serie.id">
                <m-box-view :element="serie" />
            </div>
        </div>

        <div class="box-paginator" v-if="seriesList != null && seriesList.length > 0">
            <el-pagination
                background
                :current-page.sync="pager"
                layout="prev, pager, next"
                :total="seriesList.length">
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
        seriesList: [],
        loading: false
    }),

    mounted() {
        this._getSeries(this.id)
    },

    watch: {
        id(newId) {
            this._getSeries(newId)
        }
    },

    methods: {
        async _getSeries(id) {
            try {
                this.loading = true
                let response = await Characters.getSeriesById(id)
                this.seriesList = response.data.data.results

                if(response.data.data.results.length <= 0) this.seriesList = null
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
.series
    display: flex
    flex-flow: row wrap
    justify-content: center

.box-paginator
        display: flex
        justify-content: center
        margin: 20px
</style>
