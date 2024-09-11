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
import Toolbar from './countries/components/Toolbar.vue';
import Footer from './countries/components/Footer.vue';
import AboutPeru from './countries/AboutPeru.vue';

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