<template>
    <section v-loading="loading">
        <el-alert
            v-show="storiesList == null"
            title="Desculpe, não conseguimos encontrar Histórias relacionadas a esse personagem."
            type="warning"
            show-icon />

        <div class="stories" v-if="storiesList != null && storiesList.length > 0">
            <div v-for="stories in storiesList.slice((pager-1)*10, (pager*10))" :key="stories.id">
                <p>{{ stories.title }}</p>
            </div>
        </div>

        <div class="box-paginator" v-if="storiesList != null && storiesList.length > 0">
            <el-pagination
                background
                :current-page.sync="pager"
                layout="prev, pager, next"
                :total="storiesList.length">
            </el-pagination>
        </div>
    </section>
</template>

<script>
import Characters from '@/middleware/Characters'

export default {
    props: ['id'],

    data: () => ({
        pager: 1,
        storiesList: [],
        loading: false
    }),

    mounted() {
        this._getStories(this.id)
    },

    watch: {
        id(newId) {
            this._getStories(newId)
        }
    },

    methods: {
        async _getStories(id) {
            try {
                this.loading = true
                let response = await Characters.getStoriesById(id)
                this.storiesList = response.data.data.results

                if(response.data.data.results.length <= 0) this.storiesList = null
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
.stories 
    border-bottom: 1px solid rgba(#000, 0.06)
    p
        padding: 10px
        border-top: 1px solid rgba(#000, 0.06)

.box-paginator
        display: flex
        justify-content: center
        margin: 20px
</style>
