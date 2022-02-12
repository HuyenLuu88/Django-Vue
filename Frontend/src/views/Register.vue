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
                    <i class="mdi mdi-twitter me-2"></i>Register using twitter
                  </button>
                </div>
                <div class="mb-5 mt-4 row">
                  <button type="button" class="col-8 mx-auto btn btn-gradient-info btn-fw">
                    <i class="mdi mdi-facebook me-2"></i>Register using facebook
                  </button>
                </div>
                <ul v-if="errors" class="error-messages">
                  <li class="bg-white text-danger" v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
                </ul>
                <form class="pt-3" v-on:submit.prevent="onSubmit">
                  <div class="form-group">
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      v-model="username"
                      placeholder="Username"
                    />
                  </div>
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
                  <div class="mt-5">
                    <router-link
                      :to="{ name: 'login' }"
                      class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"                      
                    >Sign In</router-link>
                    <button
                      class="btn btn-block btn-gradient-secondary btn-lg font-weight-medium auth-form-btn"
                      type="submit"
                      style="float: right"
                    >Sign Up</button>                    
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
import { REGISTER } from "@/store/actions.type";

export default {
  name: "RwvRegister",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(REGISTER, {
          email: this.email,
          password: this.password,
          username: this.username
        })
        .then(() => this.$router.push({ name: "login" }));
    }
  }
};
</script>
