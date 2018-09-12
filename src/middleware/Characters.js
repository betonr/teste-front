import Api from '@/middleware/Api'

export default {
  get() {
    return Api().get('/v1/public/characters', {
      params: {
        limit: 50,
        orderBy: '-modified'
      }
    })
  },

  getComicsById(id) {
    return Api().get(`/v1/public/characters/${id}/comics`, {
      params: {
        limit: 30,
        orderBy: 'title'
      }
    })
  },

  getSeriesById(id) {
    return Api().get(`/v1/public/characters/${id}/series`, {
      params: {
        limit: 30,
        orderBy: 'title'
      }
    })
  },

  getStoriesById(id) {
    return Api().get(`/v1/public/characters/${id}/stories`, {
      params: {
        limit: 30,
        orderBy: 'modified'
      }
    })
  }
}