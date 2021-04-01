<template>
 <div>
     <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <nav class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">tickets</li>
            </ol>
        </nav>
        <div class="d-flex align-items-center flex-wrap text-nowrap">
            <router-link to="/ticketcreate" class="btn btn-primary btn-icon-text">
                <i class="btn-icon-prepend" data-feather="plus"></i>
                Create Ticket
            </router-link>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Tickets</h6>
                    <p class="card-description">All the ticket are listed here.</p>
                    <div class="table-responsive">
                        <table id="dataTableExample" class="table">
                          <thead>
                            <tr>
                               
                                <th>
                                    Summary
                                </th>
                                <th>
                                    Description
                                </th>
                                <th>
                                    User Device
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                          </thead>
                          <tbody>
                           
                            <tr v-for="(tickets, index) in tickets" :key="index">
                                
                               
                                <td>{{tickets.summary }}</td>
                                <td>{{tickets.description}}</td>
                                <td>{{tickets.user_device}}</td>
                                
                                <td>
                                    <form class="d-inline-block">
                                      
                                        <button @click="deleteticket(tickets.id)" class="btn btn-danger btn-icon-text">
                                            <i class="btn-icon-prepend" data-feather="trash"></i> Delete
                                        </button>
                                    </form>
                                    <router-link to="/ticketedit" class="btn btn-warning btn-icon-text">
                                        <i class="btn-icon-prepend" data-feather="edit"></i> Edit
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
export default {
  name: "ticketlist",
  data() {
    return {
      tickets: [],
    };
  },
  mounted() {
    db.collection("tickets")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let obj = {
            id:doc.data().id,
            summary: doc.data().summary,
            description: doc.data().description,
            user_device: doc.data().user_device,
           
            
          };
          this.tickets.push(obj);
        });
      });
  },
  //   watch: {
  //     $route: "fetchData",
  //   },
  methods: {
    fetchData() {
      db.collection("tickets")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
          this.id = doc.data().id;
            this.summary = doc.data().summary;
            this.description = doc.data().description;
            this.user_device = doc.data().user_device;
         
            
          });
        });
    },
    async deleteticket(id) {
      db.collection("tickets")
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
