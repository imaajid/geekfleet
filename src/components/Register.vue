<template>
  <auth-layout>
    <div class="col-md-8 pl-md-0">
      <div class="auth-form-wrapper px-4 py-5">
        <a href="#" class="noble-ui-logo d-block mb-2">Noble<span>UI</span></a>
        <h5 class="text-muted font-weight-normal mb-4">
          Create a free account.
        </h5>
        <form class="forms-sample" @submit.prevent="registerMethod">
          <div class="form-group">
            <label for="exampleInputUsername1">Username</label>
            <input
              v-model="username"
              type="text"
              class="form-control"
              placeholder="Username"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="form-check form-check-flat form-check-primary">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" />
              Remember me
            </label>
          </div>
          <div class="mt-3">
            <button
              type="submit"
              class="btn btn-primary text-white mr-2 mb-2 mb-md-0"
            >
              Sing up
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
      username: null,
      email: null,
      password: null,
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  components: {
    AuthLayout,
  },
  methods: {
    registerMethod() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.$router.push("/login");
        })
        .catch((err) => {
          console.error("Error adding user");
        });
    },
  },
};
</script>
<style>
</style>