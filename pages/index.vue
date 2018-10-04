<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div class="jumbotron">
          <h1 class="display-4">Books library</h1>
        </div>
      </div>
      <div class="row home">
        <div class="col-md-12"></div>
        <h3>Książki dla miłośników seriali</h3>
        <p>Książki i seriale mają ze sobą wiele wspólnego.
          Jedne i drugie są powszechną, łatwo dostępną i szalenie przyjemną formą obcowania z kulturą i
          popkulturą. Jedne i drugie występują w takiej obfitości i różnorodności, że każdy znajdzie wśród
          nich coś dla siebie. Wiele seriali to ekranizacje książek, nie brakuje też książek, które powstały
          w oparciu o seriale. Wybraliśmy dla Was pięć tytułów,które łączą świat książek ze światem seriali
          - każdy fan filmowych opowieści w odcinkach przeczyta
          je z przyjemnością!</p>
        <p>Miejska Biblioteka Publiczna w Szczecinie jest instytucją kultury miasta Szczecina. Na terenie miasta
          działają 34 filie biblioteczne. Celem naszej działalności jest zaspokajanie oraz rozwijanie potrzeb
          czytelniczych społeczeństwa, wspomaganie systemu edukacji i wychowania oraz upowszechnianie wiedzy i
          informacji na temat kultury i nauki. Zapraszamy do korzystania z naszej oferty.</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {}
    }

  }

</script>

<style scoped>

  .menu {
    text-align: center;
    margin: 20px;
  }

  .jumbotron {
    background-image: url('../assets/images/compass.jpg')
  }

  .row {
    margin: 10px;
    text-align: center;
  }

  .home {
    text-align: justify;
  }

</style>
