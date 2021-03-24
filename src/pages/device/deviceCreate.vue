<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item"><a href="">Device</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Device
          </li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">New Device</h6>
            <form @submit.prevent="saveDevice" class="forms-sample">
              <div class="form-group">
                <label for="name">id</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="id"
                  id="id"
                  autocomplete="off"
                  placeholder="Summary"
                  name="summary"
                />
              </div>
              <div class="form-group">
                <label for="name">Device Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="name"
                  id="name"
                  autocomplete="off"
                  placeholder="Summary"
                  name="summary"
                />
              </div>
              <div class="form-group">
                <label>Categories</label>
                <select
                  class="js-example-basic-single w-100"
                  v-model="categories"
                >
                  <option value="PC/Laptop">PC/Laptop</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Networking">Networking</option>
                  <option value="Home Device">Home Device</option>
                </select>
              </div>
              <div class="form-group">
                <label for="description">Serial Number</label>
                <textarea
                  class="form-control"
                  id="description"
                  v-model="serial_number"
                  name="description"
                  placeholder="Description"
                  rows="5"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="note">Note</label>
                <textarea
                  class="form-control"
                  id="note"
                  v-model="note"
                  name="note"
                  placeholder="Description"
                  rows="5"
                ></textarea>
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
  name: "devicecreate",
  data() {
    return {
      id: null,
      name: null,
      categories: null,
      serial_number: null,
      note: null,
    };
  },
  methods: {
    saveDevice() {
      db.collection("devices")
        .add({
          id: this.id,
          name: this.name,
          categories: this.categories,
          serial_number: this.serial_number,
          note: this.note,
        })
        .then((docRef) => {
          console.log("Devices added: ", docRef.id);
          this.$router.push("/devicelist");
        })
        .catch((error) => {
          console.error("Error adding user: ", error);
        });
    },
  },
};
</script>
