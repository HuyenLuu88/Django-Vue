<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="card text-danger mt-5 col-7 mx-auto">
        <div class="card-body">
          <div class="row flex-grow">
            <div class="col-lg-12 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <img src="img/logo/logo.svg" width="140" height="30" />
                </div>            
                <div class="mb-4 mt-4 row">
                  <button type="button" class="col-8 mx-auto btn btn-gradient-danger btn-fw">
                    <i class="mdi mdi-twitter me-2"></i>Connect using twitter
                  </button>
                </div>
                <div class="mb-5 mt-4 row">
                  <button type="button" class="col-8 mx-auto btn btn-gradient-info btn-fw">
                    <i class="mdi mdi-facebook me-2"></i>Connect using facebook
                  </button>
                </div>
                <ul v-if="errors" class="error-messages">
                  <li class="bg-white text-danger" v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
                </ul>
                <form class="pt-3" v-on:submit.prevent="onSubmit(email, password)">
                  <div class="form-group">
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      v-model="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control form-control-lg"
                      type="password"
                      v-model="password"
                      placeholder="Password"
                    />
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" /> Keep me signed in
                        <i class="input-helper"></i>
                      </label>
                    </div>
                    <a href="#" class="auth-link text-black">Forgot password?</a>
                  </div>
                  <div class="mt-5">
                    <button
                      class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                      type="submit"
                    >Sign in</button>
                    <router-link :to="{ name: 'register' }"
                      class="btn btn-block btn-gradient-secondary btn-lg font-weight-medium auth-form-btn"
                      style="float: right"
                    >Sign Up</router-link>
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
import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.type";

export default {
  name: "RwvLogin",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit(email, password) {
      this.$store
        .dispatch(LOGIN, { email, password })
        .then(() => this.$router.push({ name: "dashboard" }));
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
