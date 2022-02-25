<template>
  <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <router-link class="navbar-brand brand-logo" :to="{ name: 'home' }">
        <img src="/img/logo/logo.svg" alt="logo" />
      </router-link>
      <router-link class="navbar-brand brand-logo-mini" :to="{ name: 'home' }">
        <img src="/img/logo/logo-mini.svg" alt="logo" />
      </router-link>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-stretch">
      <button class="navbar-toggler navbar-toggler align-self-center" type="button" @click="toggle">
        <span class="mdi mdi-menu"></span>
      </button>
      <div class="search-field d-none d-md-block">
        <form class="d-flex align-items-center h-100" action="#">
          <div class="input-group">
            <div class="input-group-prepend bg-transparent">
              <i class="input-group-text border-0 mdi mdi-magnify"></i>
            </div>
            <input
              type="text"
              class="form-control bg-transparent border-0"
              placeholder="Search devices"
            />
          </div>
        </form>
      </div>
      <ul v-if="!isAuthenticated" class="navbar-nav navbar-nav-right">
        <li class="nav-item nav-logout d-none d-lg-block">
          <router-link class="nav-link" :to="{ name: 'login' }">
            <i class="mdi mdi-account-key"></i>
          </router-link>
        </li>
      </ul>
      <ul v-else class="navbar-nav navbar-nav-right">
        <li class="nav-item nav-logout d-none d-lg-block">
          <b-dropdown variant="outline-primary">
            <template #button-content>{{currentUser.username}}</template>
            <b-dropdown-item>Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type";

export default {
  name: "RwvHeader",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "login" });
      });
    },
    toggle: e => {
      e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle(
        "sidebar-icon-only"
      );
    }
  }
};
</script>
<style>
#__BVID__10 {
  height: 50px;
  background: white;
}
</style>