<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item"><a href="">Event</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Event
          </li>
        </ol>
      </nav>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">New Event</h6>
            <form @submit.prevent="saveEvent" class="forms-sample">
              <!-- <div class="form-group">
                <label for="name">id</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="id for the event"
                  v-model="id"
                  id="id"
                  autocomplete="off"
                  name="id"
                />
              </div> -->
              <div class="form-group">
                <label for="name"> Event Title</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="eventForm.title"
                  id="name"
                  autocomplete="off"
                  placeholder="Title for the event"
                  name="name"
                />
              </div>
              <div class="form-group">
                <label for="name"> Event Time</label>
                <input
                  type="time"
                  class="form-control"
                  v-model="eventForm.time"
                  id="name"
                  autocomplete="off"
                  placeholder="name"
                  name="name"
                />
              </div>
              <div class="form-group">
                <label for="name"> Number of Guests</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="eventForm.guests"
                  id="name"
                  autocomplete="off"
                  placeholder="name"
                  name="name"
                />
              </div>
              <!-- <div class="form-group">
                <label for="name">
                  Number of guests that have already signed up</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="name"
                  id="name"
                  autocomplete="off"
                  placeholder="name"
                  name="name"
                />
              </div> -->
              <div class="form-group">
                <label for="name"> Description </label>
                <textarea
                  v-model="eventForm.description"
                  class="form-control"
                  id="description"
                  name="description"
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
  name: "categoriesCreate",
  data() {
    return {
      eventForm: {},
    };
  },
  methods: {
    saveEvent() {
      if (this.eventForm.title && this.eventForm.guests) {
        db.collection("events")
          .add(this.eventForm)
          .then((docRef) => {
            console.log("Event added: ", docRef.id);
            this.$router.push("/eventlist");
          })
          .catch((error) => {
            console.error("Error adding Event: ", error);
          });
      }
    },
  },
};
</script>
