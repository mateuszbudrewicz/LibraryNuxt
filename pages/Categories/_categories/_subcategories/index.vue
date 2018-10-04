<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <nuxt-link :to='`/Categories/${value.alias}`' class="breadcrumb-item" tag="li"><a>{{ value.name }}</a></nuxt-link>
        <nuxt-link :to='`/Categories/${value.alias}/${subVal.alias}`' class="breadcrumb-item active" tag="li"><a>{{
            subVal.name }}</a></nuxt-link>
      </ol>
    </nav>
    <div class="list">
      <h3>All books from {{ subVal.name }} subcategory: </h3>
      <div class="d-flex justify-content-center">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books" :key="book.id">
              <td>"{{book.title}}"</td>
              <td>{{book.description}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
  export default {

    data() {
      return {
        books: [],
        subcategory: [],
        value: '',
        subVal: ''
      }
    },
    async mounted() {
      await this.$store.dispatch('getCategories')
      let id = this.$store.getters.categories.find(item => {
        if (item.alias == this.$route.params.categories) {
          return item
        }
      })
      this.value = id
      await this.$http.post('http://bootcamp.opole.pl/subcategories', {
          id: id.id
        }, {
          emulateJSON: true
        })
        .then(response => {
          return response.body.sub_categories
        })
        .then(data => {
          for (let i in data) {
            this.subcategory.push(data[i])
          }
        })
      let subcat = this.subcategory.find(item => {
        if (item.alias == this.$route.params.subcategories) {
          return item
        }
      })
      this.subVal = subcat
      await this.$http.get('http://bootcamp.opole.pl/books/my-books/subcategory/' + subcat.id + '/srv3')
        .then(response => {
          return response.body.books
        })
        .then(data => {
          for (let i in data) {
            this.books.push(data[i])
          }
        })
    }
  }

</script>
<style scoped>
  .table {
    text-align: center;
    width: 80%
  }

  .table tr:hover {
    transition: 1s;
    transform: scale(1.01)
  }

  .table tr {
    transition: 0.7s;
  }

  .list {
    text-align: center;
  }

  .list-group-item:hover {
    transition: 1s;
    transform: scale(1.03)
  }

  .list-group-item {
    transition: 1s;
    margin: 10px;
  }

</style>
