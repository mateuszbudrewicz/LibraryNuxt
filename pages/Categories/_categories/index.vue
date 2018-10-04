<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <nuxt-link :to='`/Categories/${current.alias}`' class="breadcrumb-item active" tag="li"><a>{{ current.name }}</a></nuxt-link>
      </ol>
    </nav>
    <div class="row d-flex justify-content-center">
      <ul class="list-group col-md-4 col-sm-12 text-center" v-for="sub in subcategory" :key="sub.id">
        <li class="list-group-item list-group-item-action badge badge-light">
          <nuxt-link :to="`/Categories/${current.alias}/${sub.alias}`"><i class="fas fa-book"></i> {{ sub.name }}</nuxt-link>
        </li>
      </ul>
    </div>
    <hr>
    <div class="list">
      <h3>All books from {{ current.name }} category: </h3>
      <div class="d-flex justify-content-center">
        <table class="table table-striped table-bordered ">
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
    computed: {

    },
    data() {
      return {
        books: [],
        subcategory: [],
        current: ''
      }
    },
    async mounted() {
      await this.$store.dispatch('getCategories')
      let id = this.$store.getters.categories.find(item => {
        if (item.alias == this.$route.params.categories) {
          return item
        }
      })
      this.current = id
      await this.$http.get('http://bootcamp.opole.pl/books/my-books/category/' + id.id + '/srv3')
        .then(response => {
          return response.body.books
        })
        .then(data => {
          for (let i in data) {
            this.books.push(data[i])
          }
        })
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

  .subCategory {
    text-align: center;
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
    width: 80%;
  }

</style>
