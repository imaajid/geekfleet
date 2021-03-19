<template>
  <auth-layout>
    <div class="col-md-8 pl-md-0">
      <div class="auth-form-wrapper px-4 py-5">
        <a href="#" class="noble-ui-logo d-block mb-2">Noble<span>UI</span></a>
        <h5 class="text-muted font-weight-normal mb-4">
          Welcome back! Log in to your account.
        </h5>
        <form class="forms-sample" @submit.prevent="submit">
          <div class="form-group">
            <label for="email">E-Mail Address</label>
            <input
              type="email"
              class="form-control"
              value=""
              required
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              required
              v-model="password"
            />
          </div>
          <div class="form-check form-check-flat form-check-primary">
            <label class="form-check-label">
              <input
                type="checkbox"
                class="form-check-input"
                name="remember"
                id="remember"
              />
              Remember Me
            </label>
          </div>
          <div class="mt-3">
            <button
              type="submit"
              class="btn btn-primary mr-2 mb-2 mb-md-0 text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </auth-layout>
</template>
<script>
import db from "@/db/index";
import firebase from "firebase";
import AuthLayout from "../../src/layouts/Auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    AuthLayout,
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.$router.push("/userlist");
        })
        .catch((err) => {
          console.error("Error adding user");
        });
    },
  },
};
</script>



