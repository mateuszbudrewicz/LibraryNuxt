<template>
  <div class="col-12 ">
    <h3>Add new book</h3>
    <div class="row d-flex justify-content-center">
      <div class="col-md-2 input-group mb-2">
        Title:
      </div>
      <div class="col-md-6 input-group ">
        <input type="text" class="form-control" v-model="title">
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-2 input-group mb-2">
        Descritpion:
      </div>
      <div class="col-md-6 input-group">
        <input type="text" class="form-control" v-model="description">
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-2 input-group mb-2">
        Category:
      </div>
      <div class="col-md-6 input-group mb-2">
        <select class="custom-select" v-model="category" @change="getSubCategory(category)">
          <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.name }}</option>
        </select>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-2 input-group mb-2">
        Subcategory:
      </div>
      <div class="col-md-6 input-group mb-2">
        <select class="custom-select" v-model="subcategory">
          <option :value="subcategory.id" v-for="subcategory in subcategories" :key="subcategory.id">{{
            subcategory.name }}</option>
        </select>
      </div>
    </div>
    <button class="btn btn-success" @click="addBook"><i class="fas fa-plus"></i> Add new book</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        category: '',
        subcategory: '',
        subcategories: []
      }
    },
    computed: {
      categories() {
        return this.$store.getters.categories
      }
    },
     async mounted() {
      await this.$store.dispatch('getCategories')
    },
    methods: {
      async addBook() {
        await this.$store.dispatch('addBook', {
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
      }
    }
  }

</script>

<style>
  .form-group {
    margin: 3px;
  }

  .btn {
    margin-top: 10px;
  }

  .input-group {
    margin-top: 5px;
  }

</style>
