<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col md="6">
        <b-card>
          <h3 slot="header">Signin</h3>
          <b-card-body>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group id="email-address" label="Email address" label-for="email-address-input" description="Enter email">
                <b-form-input id="email-address-input" type="email" v-model="email" required placeholder="Enter email" />
              </b-form-group>
              <b-form-group id="password" label="Password" label-for="password-input" description="Enter password">
                <b-form-input id="password-input" type="password" v-model="password" required placeholder="Enter password" />
              </b-form-group>
              <b-form-group id="remember">
                <b-form-checkbox v-model="remember">Remember me</b-form-checkbox>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
              <a href="#" class="btn btn-link">Forgot Your Password?</a>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Signin',
  data() {
    return {
      email: '',
      password: '',
      remember: false,
    }
  },
  methods: {
    onSubmit: function () {
      this.$router.push('/dates')
    },
    onReset: function () {
      this.email = '';
      this.password = '';
      this.remember = false;
    }
  }
}
</script>

<style scoped lang="scss">
</style>
