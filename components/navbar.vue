<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/"><i class="fas fa-home"></i> Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/Library"><i class="fas fa-book-reader"></i> Library</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/Categories"><i class="fas fa-th-list"></i> Categories</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/AddBook"><i class="fas fa-plus"></i> Add book</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/About"><i class="far fa-sticky-note"></i> About</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {

  }

</script>

<style>
  nav {
    font-family: 'Charmonman', cursive;
  }

  .collapse:not(.show) {
    display: inherit;
  }

</style>
