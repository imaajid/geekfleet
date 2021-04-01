          
<template>
 <div>
     <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <nav class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">Categories</li>
            </ol>
        </nav>
        <div class="d-flex align-items-center flex-wrap text-nowrap">
            <router-link to="/eventcreate" class="btn btn-primary btn-icon-text">
                <i class="btn-icon-prepend" data-feather="plus"></i>
                Create Categories
            </router-link>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Event</h6>
                    <p class="card-description">All the Event are listed here.</p>
                    <div class="table-responsive">
                        <table id="dataTableExample" class="table">
                          <thead>
                            <tr>
                                
                                <th>
                                    Event Title
                                </th>
                                <th>
                                    Event Time
                                </th>
                                <th>
                                   Number of Guests
                                </th>
                                
                                <th>
                                    Description
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                          </thead>
                          <tbody>
                             <tr v-for="(events, index) in events" :key="index">
                                
                                
                                 <td>{{events.description}}</td>
                                  <td>{{events.time}}</td>
                                   <td>{{events.guests}}</td>
                                    <td>{{events.title}}</td>
                               
                                   <td>
                                    <form class="d-inline-block">
                                      
                                        <button @click="deleteevent(events.id)" class="btn btn-danger btn-icon-text">
                                            <i class="btn-icon-prepend" data-feather="trash"></i> Delete
                                        </button>
                                    </form>
                                    <router-link to="/" class="btn btn-warning btn-icon-text">
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
  name: "eventlist",
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    db.collection("events")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let obj = {
            id: doc.id,
            title: doc.data().title,
            time: doc.data().time,
            guests: doc.data().guests,
            description: doc.data().description,
            

           
          };
          this.events.push(obj);
        });
      });
  },
  //   watch: {
  //     $route: "fetchData",
  //   },
  methods: {
    fetchData() {
      db.collection("events")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.id = doc.id;
            this.title = doc.data().title;
            this.time = doc.data().time;
            this.guests = doc.data().guests;
            this.description = doc.data().description;

            
          });
        });
    },
    async deleteevent(id) {
      db.collection("events")
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


