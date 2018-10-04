<template>
  <section class="container">
    <h3>Library</h3>
    <div class="row d-flex justify-content-center">
      <div class="col-md-5">
        <input class="form-control" type="text" v-model="search" placeholder="Search book">
      </div>
      <div class="row">
        <div class="btn-group col-md-12 d-flex justify-content-center">
          <button class="btn btn-secondary" @click="sortTitle(sortButtonTitle = !sortButtonTitle)"><i class="fas fa-sort"></i>
            Sort Title</button>
          <button class=" btn btn-secondary" @click="sortDescription(sortButtonDesc = !sortButtonDesc)"><i class="fas fa-sort"></i>
            Sort Description</button>
        </div>
        <div class="btn-group col-md-12 input-group-text d-flex justify-content-center">
          <input type="checkbox" v-model="checkAll" @change="checkedAll">
          <button class="col-md-3 col-sm-12 btn btn-danger" @click="deleteChecked"><i class="fas fa-trash"></i> Delete
            selected</button>
          <button class="col-md-3 col-sm-12 btn btn-info" @click="fromFile(myJson.books)"><i class="fas fa-file-download"></i>
            Books From File</button>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <book class="col-md-5 d-flex book-margin" v-for="(book, index) in books" :key="book.id" :book="book" :index="index"></book>
    </div>
  </section>
</template>

<script>
  import book from '~/components/book'
  import json from '~/store/books'

  export default {
    data() {
      return {
        search: '',
        sortButtonTitle: false,
        sortButtonDesc: false,
        checkAll: false,
        myJson: json,
      }
    },
    async mounted() {
      await this.$store.dispatch('getBooks')
      await this.$store.dispatch('getRates')
      await this.$store.dispatch('getCategories')
    },
    computed: {
      books() {
        return this.$store.getters.books.filter((book) => {
          return book.title.toLowerCase().match(this.search.toLowerCase()) || book.description.toLowerCase().match(
            this.search.toLowerCase())
        })
      }
    },
    components: {
      book,
    },
    methods: {
      sortTitle(sortButtonTitle) {
        return this.$store.getters.books.sort((a, b) => {
          if (sortButtonTitle) {
            return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
          } else {
            return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
          }
        })
      },
      sortDescription(sortButtonDesc) {
        return this.$store.getters.books.sort((a, b) => {
          if (sortButtonDesc) {
            return a.description.toLowerCase() < b.description.toLowerCase() ? -1 : 1
          } else {
            return a.description.toLowerCase() < b.description.toLowerCase() ? 1 : -1
          }
        })
      },
      async fromFile(books) {
        await this.$store.dispatch('fromFile', books)
      },
      async deleteChecked() {
        await this.$store.dispatch('deleteChecked')
      },
      checkAllmethod(checkAll) {
        this.$store.dispatch('checkAll', {
          checkAll: this.checkAll
        })
      },
      checkedAll() {
        this.$store.dispatch('checkedAll', this.checkAll)
      }
    }
  }

</script>

<style scoped>
  .menu {
    text-align: center;
    margin: 20px;
  }

  .container {
    text-align: center;
  }

  .delete {
    margin: 5px;
  }

  .btn {
    margin: 2px;
    text-align: center
  }

  .row {
    margin: 10px;
    text-align: center;
  }

.book-margin{
  margin: 10px;
}
</style>
