<template>
  <b-navbar type="is-dark">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="/"> Home </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <NuxtLink class="button is-primary" to="/auth/signin">
            <strong>Sign up</strong>
          </NuxtLink>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
