<template>
    <section class="container">
        <div class="row add">
      <div class="col-12">
        <addBook></addBook>
      </div>
      </div>
    </section>
</template>

<script>
import addBook from '~/components/addBook'
export default {
    components: {
        addBook
    }

}
</script>

<style scoped>
.add{
    text-align: center;
}
</style>
