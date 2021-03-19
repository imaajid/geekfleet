<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin"
    >
      <nav class="page-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">Dashboard</a></li>
          <li class="breadcrumb-item active" aria-current="page">Users</li>
        </ol>
      </nav>
      <div class="d-flex align-items-center flex-wrap text-nowrap">
        <router-link to="/usercreate" class="btn btn-primary btn-icon-text">
          <i class="btn-icon-prepend" data-feather="plus"></i>
          Create User
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">User</h6>
            <p class="card-description">All the users are listed here.</p>
            <div class="table-responsive">
              <table id="dataTableExample" class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>phone</th>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users" :key="index">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.address }}</td>

                    <td>
                      <form class="d-inline-block">
                        <button
                          @click="deleteuser(user.id)"
                          id="id"
                          class="btn btn-danger btn-icon-text"
                        >
                          <i class="btn-icon-prepend" data-feather="trash"></i>
                          Delete
                        </button>
                      </form>
                      <router-link
                        to="{name: 'useredit',
                       params: { id: user.id }
                       }"
                        class="btn btn-warning btn-icon-text"
                      >
                        <i class="btn-icon-prepend" data-feather="edit"></i>
                        Edit
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from "@/db/index";
import dashboard from "../../layouts/DashBoard";
export default {
  name: "userList",
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.$emit("update:layout", dashboard);
  },
  mounted() {
    db.collection("user")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let obj = {
            id: doc.id,
            name: doc.data().name,
            phone: doc.data().phone,
            address: doc.data().address,
          };
          this.users.push(obj);
        });
      });
  },
  //   watch: {
  //     $route: "fetchData",
  //   },
  methods: {
    fetchData() {
      db.collection("user")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.id = doc.id;
            this.name = doc.data().name;
            this.phone = doc.data().phone;
            this.address = doc.data().address;
          });
        });
    },
    async deleteuser(id) {
      db.collection("user")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
  },
};
</script>


