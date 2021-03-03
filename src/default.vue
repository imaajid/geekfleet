<template>
  <div class="">
    <Sidebar />

    <div class="page-wrapper">
      <!-- partial:partials/_navbar.html -->
      <Header />
      <!-- partial -->
      <div class="page-content"></div>
      <!-- partial:partials/_footer.html -->

      <!-- partial -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {};
  },
  components: {
    Sidebar: () =>
      import(/* webpackChunkName: "sidebar" */ "./components/Sidebar"),
    Header: () =>
      import(/* webpackChunkName: "header" */ "./components/Navbar"),
  },
};
</script>