<template>
  <div id="app">
    <Toolbar />
    <main>
      <AboutPeru />
    </main>
    <Footer />
  </div>
</template>

<script>
import Toolbar from './components/public/Toolbar.vue';
import Footer from './components/public/Footer.vue';
import AboutPeru from './components/countries/AboutPeru.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    Footer,
    AboutPeru
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
main {
  flex: 1;
}
</style>