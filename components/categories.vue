<template>
  <div class="col-md-4">
    <div class="card border-dark mb-3 category" style="max-width: 18rem;">
      <div class="card-header">{{ category.id }}. {{ category.name }}</div>
      <div class="card-body">
        <nuxt-link :to="`/Categories/${category.alias}`"><button class="btn btn-dark"><i class="fas fa-th-list"></i>
            Show books</button></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['category', 'index'],
    data() {
      return {

      }
    },

  }

</script>

<style>
  .card {
    transition: 0.5s;
    -webkit-box-shadow: 8px 7px 32px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 8px 7px 32px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 8px 7px 32px 0px rgba(0, 0, 0, 0.75);
  }
  .card-header{
    font-family: 'Oswald', sans-serif;
    color: #ecf0f1;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.644);
  }

  .card:hover {
    transform: scale(1.03);
  }

  .category {
    background-image: url('../assets/images/coffie.jpg');
    opacity: 0.9;
  }

</style>
