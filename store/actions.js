import Vue from 'vue'

export default {
    async getBooks({
      commit
    }) {
      await Vue.http.get('http://bootcamp.opole.pl/books/my-books/srv3')
        .then(response => {
          return response.data.books
        })
        .then(data => {
          const booksFromApi = []
          for (let i in data) {
            booksFromApi.unshift(data[i])
          }
          commit('get_books', booksFromApi)
        })
    },
    async getRates({
      commit
    }) {
      await Vue.http.get('http://bootcamp.opole.pl/books/my-rates/srv3')
        .then(response => {
          return response.body.rates
        })
        .then(data => {
          commit('get_rates', data)
        })
    },
    async getCategories({commit}){
      await Vue.http.get('http://bootcamp.opole.pl/categories')
        .then(response => {
          return response.body.categories
        })
        .then(data => {
          const categories = []
          for(let i in data){
            categories.push(data[i])
          }
          commit('get_categories', categories)
        })

    },
    async addBook({
      commit
    }, payload) {
      await Vue.http.post('http://bootcamp.opole.pl/books/add-book/srv3', payload, {
        emulateJSON: true
      })
      commit('add_book', payload)
      await Vue.http.get('http://bootcamp.opole.pl/books/my-books/srv3')
        .then(response => {
          return response.data.books
        })
        .then(data => {
          const booksFromApi = []
          for (let i in data) {
            booksFromApi.unshift(data[i])
          }
          commit('get_books', booksFromApi)
        })
    },
    async editBook({
      commit
    }, payload) {

      await Vue.http.post('http://bootcamp.opole.pl/books/edit-book/' + payload.id + '/srv3', {
        title: payload.title,
        description: payload.description,
        category: payload.category,
        subcategory: payload.subcategory
      }, {
        emulateJSON: true
      })
      commit('edit_book', payload)
    },
    async deleteBook({
      commit
    }, payload) {
      await Vue.http.delete('http://bootcamp.opole.pl/books/delete-book/' + payload.id + '/srv3')
      commit('delete_book', payload)
    },
    async deleteChecked({
      commit
    }) {
      for (let i in this.state.check) {
        await Vue.http.delete('http://bootcamp.opole.pl/books/delete-book/' + this.state.check[i].id + '/srv3')
        commit('delete_book', this.state.check[i])
      }
    },
    singleCheck({
      commit
    }, payload) {
      commit('single_check', payload)
    },
    async fromFile({
      commit
    }, payload) {
      for (let i in payload) {
        await Vue.http.post('http://bootcamp.opole.pl/books/add-book/srv3', {
          title: payload[i].title,
          description: payload[i].description
        }, {
          emulateJSON: true
        })
        commit('add_book', payload[i])
      }
    },
    async setRating({
      commit
    }, payload) {
      await Vue.http.post('http://bootcamp.opole.pl/books/rate/srv3', {
        id: payload.id,
        rate: payload.rate
      }, {
        emulateJSON: true
      })
      commit('set_rating', payload)
      await Vue.http.get('http://bootcamp.opole.pl/books/my-rates/srv3')
        .then(response => {
          return response.body.rates
        })
        .then(data => {
          commit('get_rates', data)
        })
    },
    checkedAll({
      commit
    }, payload) {
      commit('checked_all', payload)
    }
  }