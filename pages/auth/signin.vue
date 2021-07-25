<template>
  <div>
    <div class="login-root">
      <div
        class="box-root flex-flex flex-direction--column"
        style="min-height: 100vh; flex-grow: 1"
      >
        <div class="loginbackground box-background--white padding-top--64">
          <div class="loginbackground-gridContainer">
            <div
              class="box-root flex-flex"
              style="grid-area: top / start / 8 / end"
            >
              <div
                class="box-root"
                style="
                  background-image: linear-gradient(
                    white 0%,
                    rgb(247, 250, 252) 33%
                  );
                  flex-grow: 1;
                "
              ></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5">
              <div
                class="
                  box-root
                  box-divider--light-all-2
                  animationLeftRight
                  tans3s
                "
                style="flex-grow: 1"
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style="grid-area: 6 / start / auto / 2"
            >
              <div
                class="box-root box-background--blue800"
                style="flex-grow: 1"
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style="grid-area: 7 / start / auto / 4"
            >
              <div
                class="box-root box-background--blue animationLeftRight"
                style="flex-grow: 1"
              ></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6">
              <div
                class="
                  box-root
                  box-background--gray100
                  animationLeftRight
                  tans3s
                "
                style="flex-grow: 1"
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style="grid-area: 2 / 15 / auto / end"
            >
              <div
                class="
                  box-root
                  box-background--cyan200
                  animationRightLeft
                  tans4s
                "
                style="flex-grow: 1"
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style="grid-area: 3 / 14 / auto / end"
            >
              <div
                class="box-root box-background--blue animationRightLeft"
                style="flex-grow: 1"
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style="grid-area: 4 / 17 / auto / 20"
            >
              <div
                class="
                  box-root
                  box-background--gray100
                  animationRightLeft
                  tans4s
                "
                style="flex-grow: 1"
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style="grid-area: 5 / 14 / auto / 17"
            >
              <div
                class="
                  box-root
                  box-divider--light-all-2
                  animationRightLeft
                  tans3s
                "
                style="flex-grow: 1"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="box-root padding-top--24 flex-flex flex-direction--column"
          style="flex-grow: 1; z-index: 9"
        >
          <div
            class="
              box-root
              padding-top--48
              padding-bottom--24
              flex-flex
              flex-justifyContent--center
            "
          ></div>
          <div class="formbg-outer">
            <div class="formbg">
              <div class="formbg-inner padding-horizontal--48">
                <span class="padding-bottom--15">Sign in to your account</span>
                <form @submit.prevent id="stripe-login">
                  <div class="field padding-bottom--24">
                    <label for="email">Email</label>
                    <input v-model="auth.email" type="email" name="email" />
                  </div>
                  <div class="field padding-bottom--24">
                    <div class="grid--50-50">
                      <label for="password">Password</label>
                    </div>
                    <input
                      v-model="auth.password"
                      type="password"
                      name="password"
                    />
                  </div>
                  <div class="field padding-bottom--24">
                    <input
                      @click="login"
                      type="submit"
                      name="submit"
                      value="Login"
                    />
                  </div>
                  <div class="field padding-bottom--24">
                    <input
                      @click="createUser"
                      type="submit"
                      name="Register"
                      value="Register"
                    />
                  </div>

                  <div v-if="MailVerification">
                    <p class="red">{{ this.MailVerification }}</p>
                  </div>
                  <div v-if="showerror">
                    <p class="red">{{ this.showerror }}</p>
                  </div>
                  <div v-if="emailMessage">
                    <p class="red">{{ this.emailMessage }}</p>
                  </div>
                  <div v-if="registerMessage">
                    <p class="red">{{ this.registerMessage }}</p>
                  </div>
                  <div v-if="notauser">
                    <p class="red">{{ this.notauser }}</p>
                  </div>
                  <br />
                  <div class="field">
                    <a @click="googlelogin" class="ssolink" href="#"
                      >Use single sign-on (Google) instead</a
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showerror: "",
      registerMessage: "",
      emailMessage: "",
      MailVerification: "",
      notauser: "",
      auth: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // Recapcha Submit
    onVerify: function (response) {
      if (response) this.disableflag = false;
    },
    //Sign in
    login() {
      let that = this;

      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error) {
          that.showerror = error.message;
        })
        .then((user) => {
          if (this.$fire.auth.currentUser.emailVerified === true) {
            that.$router.push("/dashboard");
          } else {
            this.MailVerification =
              "Please Verify your Emai. \n Email not Verified";
          }
        });
    },
    //Sign In With Google
    googlelogin() {
      let that = this;
      const provider = new $nuxt.$fireModule.auth.GoogleAuthProvider();
      this.$fire.auth
        .signInWithPopup(provider)
        .catch(function (error) {
          that.showerror = error.message;
        })
        .then((user) => {
          that.$router.push("/dashboard");
        });
    },

    //Sign Up Create New User
    async createUser() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.auth.email,
          this.auth.password
        );

        let user = this.$fire.auth.currentUser;
        user.sendEmailVerification().then(() => {
          this.emailMessage =
            "Please Visit your Email account and Verify your Account by clicking on the link recieved";
        });
        this.registerMessage = "New User Registed";
        this.auth.email = "";
        this.auth.password = "";
        const userUid = user.uid;
        const email = user.email;
        const displayName = user.displayName;

        // set Person
        const person = {
          useruid: userUid,
          email: email,
          displayName: displayName,
        };
        const messageRef = this.$fire.firestore
          .collection("users")
          .doc(userUid)
          .set(person);
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  color: #1a1f36;
  box-sizing: border-box;
  word-wrap: break-word;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Ubuntu, sans-serif;
}
body {
  min-height: 100%;
  background-color: #ffffff;
}
h1 {
  letter-spacing: -1px;
}
.red {
  color: red;
  text-align: center;
  font-weight: bold;
}
a {
  color: #5469d4;
  text-decoration: unset;
}
.login-root {
  background: #fff;
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
.loginbackground {
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
}
.flex-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.center-center {
  align-items: center;
  justify-content: center;
}
.box-root {
  box-sizing: border-box;
}
.flex-direction--column {
  -ms-flex-direction: column;
  flex-direction: column;
}
.padding-top--64 {
  padding-top: 64px;
}
.padding-top--24 {
  padding-top: 24px;
}
.padding-top--48 {
  padding-top: 48px;
}
.padding-bottom--24 {
  padding-bottom: 24px;
}
.padding-horizontal--48 {
  padding: 48px;
}
.padding-bottom--15 {
  padding-bottom: 15px;
}

.flex-justifyContent--center {
  -ms-flex-pack: center;
  justify-content: center;
}

.formbg {
  margin: 0px auto;
  width: 100%;
  max-width: 448px;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
}
span {
  display: block;
  font-size: 20px;
  line-height: 28px;
  color: #1a1f36;
}
label {
  margin-bottom: 10px;
}
.reset-pass a,
label {
  font-size: 14px;
  font-weight: 600;
  display: block;
}
.reset-pass > a {
  text-align: right;
  margin-bottom: 10px;
}
.grid--50-50 {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
}

.field input {
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

input[type="submit"] {
  background-color: rgb(84, 105, 212);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(84, 105, 212) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
.field-checkbox input {
  width: 20px;
  height: 15px;
  margin-right: 5px;
  box-shadow: unset;
  min-height: unset;
}
.field-checkbox label {
  display: flex;
  align-items: center;
  margin: 0;
}
a.ssolink {
  display: block;
  text-align: center;
  font-weight: 600;
}
.footer-link span {
  font-size: 14px;
  text-align: center;
}
.listing a {
  color: #697386;
  font-weight: 600;
  margin: 0 10px;
}

.animationRightLeft {
  animation: animationRightLeft 2s ease-in-out infinite;
}
.animationLeftRight {
  animation: animationLeftRight 2s ease-in-out infinite;
}
.tans3s {
  animation: animationLeftRight 3s ease-in-out infinite;
}
.tans4s {
  animation: animationLeftRight 4s ease-in-out infinite;
}
</style>
