<template>
  <div id="app">
    <layout>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </layout>
  </div>
</template>

<script>
import Layout from '@partial/Layout'

export default {
  name: 'app',
  components: { Layout },
}
</script>

<style scoped lang="scss">
  main {
    padding: 40px 20px;
  }
</style>
