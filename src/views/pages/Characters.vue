<template>
    <section class="content">
        
        <el-input type="text" v-model="textSearch" placeholder="Busque por um personagem ..." clearable />
        
        <div class="list-characters"> 
            <article v-for="character in charactersList.slice((pager-1)*10, (pager*10))" :key="character.id">
                <m-card-character :character="character" @details="openDetails" />
            </article>
        </div>

        <m-details-character 
            v-show="character != null" 
            :character="character"
            :boxVisible="character != null" 
            @closeDetails="character = null" />

        <div class="box-paginator" v-show="charactersList.length > 0">
            <el-pagination
                background
                :current-page.sync="pager"
                layout="prev, pager, next"
                :total="charactersList.length">
            </el-pagination>
        </div>

    </section>
</template>

<script>
import Characters from '@/middleware/Characters'

import CardCharacter from '@/views/components/characters/Card-character'
import DetailsCharacter from '@/views/components/characters/Details-character'

export default {
    components: {
        'm-card-character': CardCharacter,
        'm-details-character': DetailsCharacter
    },

    data: () => ({
        textSearch: '',
        charactersList: [],
        charactersListDefault: [],
        character: null,
        pager: 1,
        loading: null            
    }),

    async mounted() {
        try {
            this._startLoading()

            const response = await Characters.get()
            this.charactersList = response.data.data.results
            this.charactersListDefault = response.data.data.results

            this.loading.close()

        } catch(error) {
            this.$alert('OPSSS: Desculpe, mas encontramos um erro ao tentar nos conectar com o servidor de dados, entre em contato com nosso suporte!', 'Erro', {
                dangerouslyUseHTMLString: true,
                confirmButtonText: 'OK',
                type: 'error'
            })
            this.loading.close()
        }
    },

    watch: {
        textSearch(text) {
            if(text == '') this.charactersList = this.charactersListDefault
            else this.charactersList = this.charactersListDefault.filter( character => character.name.toLowerCase().indexOf(text.toLowerCase()) >= 0 )
        }
    },

    methods: {
        openDetails(id) {
            this.character = this.charactersList.some( character => character.id == id ) == true ? this.charactersList.filter( character => character.id == id ) : null 
        },
        _startLoading() {
            this.loading = this.$loading({
                lock: true,
                text: 'Carregando os dados',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
        }
    }
}
</script>

<style lang="sass" scoped>
.content
    padding: 25px 5%

    .list-characters
        padding: 10px 20px

    .box-paginator
        display: flex
        justify-content: center
        margin: 20px
</style>