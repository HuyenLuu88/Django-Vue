<template>
  <div id="app">
    <RwvHeader />
    <div class="container-fluid page-body-wrapper">
      <RwvSidebar />
      <router-view></router-view>
    </div>
    <RwvFooter />
  </div>
</template>

<script>
import RwvHeader from "@/components/TheHeader";
import RwvFooter from "@/components/TheFooter";
import RwvSidebar from "@/components/TheSidebar";

export default {
  name: "App",
  components: {
    RwvHeader,
    RwvFooter,
    RwvSidebar
  }
};
</script>

<style></style>
