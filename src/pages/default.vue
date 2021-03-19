<template>
  <div class="main-wrapper">
    <Sidebar />
    <div class="page-wrapper">
      <Header />
      <div class="page-content">
        <router-view />
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style>
@import "./assets/css/demo_1/style.css";
</style>