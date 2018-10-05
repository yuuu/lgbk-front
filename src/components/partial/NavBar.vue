<template>
  <b-navbar toggleable="md" type="dark" variant="primary">
    <b-navbar-brand href="#">Lgbk</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/signin">Signin</b-nav-item>
        <b-nav-item to="/register">Register</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped lang="scss">
  .navbar-nav > .nav-item > .nav-link {
    color: white;
    text-decoration: none;
    &:hover {
      color: white;
      text-decoration: none;
    }
  }
</style>
