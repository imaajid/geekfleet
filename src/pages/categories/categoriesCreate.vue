<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item"><a href="">Categories</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Categories
          </li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">New Categories</h6>
            <form @submit.prevent="saveCategories" class="forms-sample">
              <div class="form-group">
                <label for="name">id</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="id"
                  id="id"
                  autocomplete="off"
                  name="id"
                />
              </div>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="name"
                  id="name"
                  autocomplete="off"
                  placeholder="name"
                  name="name"
                />
              </div>
              <button type="submit" class="btn btn-primary mr-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/db/index";
export default {
  name: "categoriesCreate",
  data() {
    return {
      id: null,
      name: null,
    };
  },
  methods: {
    saveCategories() {
      db.collection("categories")
        .add({
          id: this.id,
          name: this.name,
        })
        .then((docRef) => {
          console.log("Categories added: ", docRef.id);
          this.$router.push("/categorieslist");
        })
        .catch((error) => {
          console.error("Error adding user: ", error);
        });
    },
  },
};
</script>
