<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item"><a href="">Tickets</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Tickets
          </li>
        </ol>
      </nav>
    </div>

     <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">New Tickets</h6>
            
            <form @submit.prevent="saveTicket" class="forms-sample">
              <div class="form-group">
                <label for="name">Summary</label>
                <input
                  v-model="summary"
                  type="text"
                  class="form-control"
                  id="name"
                  autocomplete="off"
                  placeholder="Summary"
                  name="summary"
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  v-model="description"
                  class="form-control"
                  id="description"
                  name="description"
                  placeholder="Description"
                  rows="5"
                ></textarea>
              </div>
              <div class="form-group">
                <label>User Device</label>
                <select class="js-example-basic-single w-100" v-model="user_device">
                  <option value="PC/Laptop">PC/Laptop</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Networking">Networking</option>
                  <option value="Home_Device">Home Device</option>
                </select>
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
  name: "ticketcreate",
  data() {
    return {
      id: null,
      summary: null,
      description: null,
      user_device: null,
    };
  },
  methods: {
    saveTicket() {
      db.collection("tickets")
        .add({
          id: this.id,
          summary: this.summary,
          description: this.description,
          user_device: this.user_device,
          
        })
        .then((docRef) => {
          console.log("Ticket added: ", docRef.id);
          this.$router.push("/ticketlist");
        })
        .catch((error) => {
          console.error("Error adding user: ", error);
        });
    },
  },
};
</script>