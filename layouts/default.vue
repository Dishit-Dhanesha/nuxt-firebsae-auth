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
            <button
              label="Launch card modal (Component)"
              type="is-primary"
              size="is-medium"
              @click="cardModal"
              class="button is-danger"
            >
              <strong>Sign up</strong>
            </button>

            <a
              class="button is-light"
              label="Launch card modal (Component)"
              type="is-primary"
              size="is-medium"
              @click="SignIncardModal"
            >
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
const SignUpModalForm = {
  props: ["email", "password"],
  template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Sign Up (New User)</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="$emit('close')" />
                        <b-button
                            label="Sign Up"
                            type="is-primary" />
                    </footer>
                </div>
            </form>
        `,
};
const SignInModalForm = {
  props: ["email", "password"],
  template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login (Existing User)</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="$emit('close')" />
                        <b-button
                            label="Login"
                            type="is-primary"
                            @click="flogin"
                             />
                    </footer>
                </div>
            </form>
        `,
};
export default {
  data() {
    return {};
  },
  methods: {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: SignUpModalForm,
        hasModalCard: true,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
      });
    },
    SignIncardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: SignInModalForm,
        hasModalCard: true,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
      });
    },
    flogin() {},
  },
};
</script>
