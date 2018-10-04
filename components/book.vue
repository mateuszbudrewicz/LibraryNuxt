<template>
    <div class="card text-white bg-dark mb-3 flex-fill">
      <div class="d-flex justify-content-end">
        <button class="col-md-4 btn btn-warning" @click="showBook"><i :class="[show ? 'fas fa-angle-double-up' : 'fas fa-angle-double-down']"></i></button>
        <button class="col-md-4 btn btn-danger" @click="deleteBook"><i class="fas fa-trash"></i></button>
      </div>
      <div class="card-header"> <input class="checkbox" type="checkbox" @click="singleCheck(checked = !checked)"
          v-model="book.check">Title: "{{book.title}}"
        <br>
        <br>
        <p>{{book.description}}</p>
      </div>
      <div class="card-body input-group mb-3 d-flex justify-content-center">
        <h5 class="card-title">
          <div class="editBook" v-if="show == false">
          </div>
          <transition name="fade">
          <div class="editBook" v-if="show == true">
            <input class="form-control input" type="text" v-model="title" placeholder="Edit Title">
            <input class="form-control input" type="text" v-model="description" placeholder="Edit Description">
            Category: <select class="custom-select" v-model="category" @change="getSubCategory(category)">
              <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.name }}</option>
              <option value="0">Reset category</option>
            </select>
            Subcategory: <select class="custom-select" v-model="subcategory">
              <option :value="subcategory.id" v-for="subcategory in subcategories" :key="subcategory.id">{{
                subcategory.name }}</option>
              <option value="0">Reset subcategory</option>
            </select><br>
            <button class="col-md-12 col-sm-12 btn btn-warning" @click="editBook"><i class="fas fa-pencil-alt"></i>
              Edit</button>
            <button class="col-md-12 col-sm-12 btn btn-success" @click="showBook"><i class="fas fa-stop-circle"></i>
              End of editing</button></div>
              </transition>
        </h5>
        <p class="card-text">Average of Rates:
          <star-rating v-if="rates, rates2" v-model="average" :increment="0.25" :star-size="25" @rating-selected="setRating(book.id, average)">}</star-rating>
          Votes: {{ratesBook}}</p>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['book', 'index'],
    data() {
      return {
        title: '',
        description: '',
        checked: false,
        show: false,
        rating: null,
        average: null,
        ratesBook: 0,
        category: '',
        subcategory: '',
        subcategories: [],
      }
    },
    computed: {
      rates() {
        return this.$store.getters.rates.filter(book => {
          if (book.book == this.book.id) {
            return this.$set(this, 'average', Number(book.sum / book.rates))
          } else {
            return false
          }
        })
      },
      rates2() {
        return this.$store.getters.rates.filter(book => {
          if (book.book == this.book.id) {
            return this.$set(this, 'ratesBook', Number(book.rates))
          } else {
            return false
          }
        })
      },
      categories() {
        return this.$store.getters.categories
      }
    },
    methods: {
      async editBook() {
        await this.$store.dispatch('editBook', {
          index: this.index,
          id: this.book.id,
          title: this.title,
          description: this.description,
          category: this.category,
          subcategory: this.subcategory
        })
        this.title = ''
        this.description = ''
        this.category = ''
        this.subcategory = ''
      },
      async deleteBook() {
        await this.$store.dispatch('deleteBook', {
          index: this.index,
          id: this.book.id
        })
      },
      singleCheck(checked) {
        this.$store.dispatch('singleCheck', {
          index: this.index,
          id: this.book.id,
          checked: checked
        })
      },
      async setRating(id, rating) {
        await this.$store.dispatch('setRating', {
          id: id,
          rate: rating,
        })
      },
      async getSubCategory(category) {
        await this.$http.post('http://bootcamp.opole.pl/subcategories', {
            id: category
          }, {
            emulateJSON: true
          })
          .then(response => {
            return response.body.sub_categories
          })
          .then(data => {
            this.subcategories = []
            for (let i in data) {
              this.subcategories.push(data[i])
            }
          })
      },
      showBook() {
        this.show = !this.show
      }
    }
  }

</script>

<style scoped>
  .book {
    text-align: center
  }

  .checkbox {
    margin: 5px;
  }

  .input {
    margin: 2px;
  }

  .card {
    transition: 0.5s;
    -webkit-box-shadow: 8px 7px 32px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 8px 7px 32px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 8px 7px 32px 0px rgba(0, 0, 0, 0.75);
  }

  .card-header {
    font-family: 'Oswald', sans-serif;
    color: #ecf0f1;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.644);
  }

  .btn {
    margin: 3px;
  }

  .card:hover {
    transform: scale(1.03);
  }

 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

</style>
