<template>
  <div id="app">
    <header>
      <nav-bar />
    </header>
    <main>
      <register />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Register from './components/Register.vue'

export default {
  name: 'app',
  components: { NavBar, Register },
}
</script>

<style scoped lang="scss">
  main {
    padding: 40px 20px;
  }
</style>
