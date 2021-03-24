<template>
  <div>
        <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <nav class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Dashboard</a></li>
                <li class="breadcrumb-item"><a href="">Users</a></li>
                <li class="breadcrumb-item active" aria-current="page">Update User</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">User Update Form</h6>
                    <form  @submit.prevent="updateUser" class="forms-sample">
                    
                        <div  class="form-group">
                            <label for="name"> Name</label>
                            <input type="text" v-model="name" class="form-control" autocomplete="off"
                                   placeholder="Name" >
                        </div>
                        <div class="form-group">
                            <label for="email">phone</label>
                            <input type="number"  v-model="phone" class="form-control" autocomplete="off"
                                   placeholder="phone">
                        </div>
                        <div class="form-group">
                            <label for="address">Address</label>
                            <input type="text"   v-model="address" class="form-control" autocomplete="off"
                                   placeholder="Address">
                        </div>
                        <button type="submit" class="btn btn-primary mr-2">Submit</button>
                        <a href="" class="btn btn-light">Cancel</a>
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
  name: "useredit",
  data() {
    return {
      name: null,
      phone: null,
      address: null,
    };
  },
  methods: {
   onEdit() {
        db.collection('user')
          .where('id', '==', this.$route.params.id).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.set({
                id: this.$route.params.id,
                name: this.useredit.name,
                phone: this.useredit.phone,
                address: this.useredit.address
              })
            })
          })
      },
  },
};
</script>