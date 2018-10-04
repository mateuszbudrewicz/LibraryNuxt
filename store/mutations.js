import Vue from 'vue'

export default {
    get_books: (state, payload) => {
      state.books = payload
    },
    add_book: (state, payload) => {
      state.books.unshift(payload)
    },
    edit_book: (state, payload) => {
      state.books[payload.index].title = payload.title
      state.books[payload.index].description = payload.description
    },
    delete_book: (state, payload) => {
      state.books.splice(payload.index, 1)
    },
    single_check: (state, payload) => {
      if (payload.checked) {
        state.check.unshift(payload)
      } else {
        state.check.splice(payload.index, 1)
      }
    },
    set_rating: (state, payload) => {
      state.rates.unshift(payload)
    },
    get_rates: (state, payload) => {
      state.rates = payload
    },
    get_categories: (state, payload) => {
      state.categories = payload
    },
    checked_all: (state, payload) => {
      if (payload) {
        for (let i in state.books) {
          Vue.set(state.books[i], 'check', true)
          state.check.push(state.books[i])
          state.checkIndex.push(i)
        }
      } else {
        for (let i in state.books) {
          Vue.set(state.books[i], 'check', false)
        }
        state.check.splice(0, state.books.length)
        state.checkIndex.splice(0, state.checkIndex.length)
      }
    }
  }