<template>
  <b-container>
    <h3>Index</h3>
  </b-container>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'DatesIndex',
  created() {
    let res = Axios.get('http://localhost:8082/api/v1/dates')
    window.console.log(res);
  }
}
</script>

<style scoped lang="scss">
</style>
