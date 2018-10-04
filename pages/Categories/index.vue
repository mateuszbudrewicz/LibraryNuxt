<template>
<section class="container">
  <h3>Categories</h3>
 <br>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <categories v-for="(category, index) in categories" :key="category.id" :category="category" :index="index"></categories>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
  import categories from '~/components/categories'
  export default {
    components: {
      categories
    },
    computed: {
      categories() {
        return this.$store.getters.categories
      }
    },
    async mounted() {
      await this.$store.dispatch('getCategories')
    },
  }

</script>

<style>
.container{
    text-align: center
}
.jumbotron-fluid{
    background-image: url(https://cdn.pixabay.com/photo/2013/01/10/14/18/starfish-74535_960_720.jpg);
}
</style>
