<template>
  <div>
    <header>
      <nav-bar />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
<script>
import NavBar from '@partial/NavBar.vue'

export default {
  name: 'Layout',
  components: { NavBar },
}
</script>

<style scoped lang="scss">
  main {
    padding: 40px 20px;
  }
</style>
