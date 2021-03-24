<template>
 <div>
     <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <nav class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">Device</li>
            </ol>
        </nav>
        <div class="d-flex align-items-center flex-wrap text-nowrap">
            <router-link to="/devicecreate" class="btn btn-primary btn-icon-text">
                <i class="btn-icon-prepend" data-feather="plus"></i>
                Create Device
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
                                    #
                                </th>
                                <th>
                                    Device Name
                                </th>
                                <th>
                                    Categories
                                </th>
                                <th>
                                    Serial Number
                                </th>
                                <th>
                                    Note
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                          </thead>
                          <tbody>
                           
                            <tr v-for="(devices, index) in devices" :key="index">
                                
                                <td>{{devices.id}}</td>
                                <td>{{devices.name}}</td>
                                <td>{{devices.categories}}</td>
                                <td>{{devices.serial_number}}</td>
                                <td>{{devices.note}}</td>
                                <td>
                                    <form class="d-inline-block">
                                      
                                        <button  @click="deletedevice(devices.id)" class="btn btn-danger btn-icon-text">
                                            <i class="btn-icon-prepend" data-feather="trash"></i> Delete
                                        </button>
                                    </form>
                                    <router-link to="/deviceedit" class="btn btn-warning btn-icon-text">
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
  name: "devicelist",
  data() {
    return {
      devices: [],
    };
  },
  mounted() {
    db.collection("devices")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let obj = {
            id: doc.id,
            name: doc.data().name,
            categories: doc.data().categories,
            serial_number: doc.data().serial_number,
            note: doc.data().note,
            
          };
          this.devices.push(obj);
        });
      });
  },
  //   watch: {
  //     $route: "fetchData",
  //   },
  methods: {
    fetchData() {
      db.collection("devices")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
          
            this.name = doc.data().name;
            this.categories = doc.data().categories;
            this.serial_number = doc.data().serial_number;
            this.note = doc.data().note;
            
          });
        });
    },
    async deletedevice(id) {
      db.collection("devices")
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
