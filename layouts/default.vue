<template>
  <div class="container">
    <navbar></navbar>
     <transition name="fade">
    <nuxt/>
    </transition>
    <footerPage></footerPage>
  </div>
</template>

<script>
import navbar from '~/components/navbar'
import footerPage from '~/components/footerPage'

export default {
  
  components: {
    navbar,
    footerPage
  }
}
</script>


<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

