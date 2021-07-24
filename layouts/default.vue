<template>
  <div>
    <b-navbar type="is-primary">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <h2>Nuxt Firebase Auth With Email Verification</h2>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-danger">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
