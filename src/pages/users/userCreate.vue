<template>
  <div>
        <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <nav class="page-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Dashboard</a></li>
                <li class="breadcrumb-item"><a href="">Users</a></li>
                <li class="breadcrumb-item active" aria-current="page">Create User</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Users Form</h6>
                     <form @submit.prevent="saveUser" class="forms-sample">
                    
                        
                        <!-- <div class="form-group">
                            <label> Id</label>
                            <input v-model="id" type="number" class="form-control" autocomplete="off"
                                  >
                        </div> -->
                        <div class="form-group">
                            <label for="Name">Name</label>
                            <input v-model="name" type="text" class="form-control" 
                                   placeholder="Name">
                        </div>
                       
                        <div class="form-group">
                            <label for="phone_no">Phone No</label>
                            <div class="input-group-prepend">
                                <span class="input-group-text">+92</span>
                                <input v-model="phone" type="text" class="form-control" placeholder="3352968699" 
                                       >
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="business_email">Address</label>
                            <input v-model="address" type="text" class="form-control" autocomplete="off"
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
    import db from '@/db/index';
    export default {
      name: 'userCreate',
      data () {
        return {
         
          name: null,
          phone: null,
          address: null,
         
        }
      },
      methods: {
        saveUser () {
          db.collection('user').add({
           
            name: this.name,
            phone: this.phone,
            address: this.address   
          })
          .then(docRef => {
            console.log('user added: ', docRef.id)
            this.$router.push('/userlist')
          })
          .catch(error => {
            console.error('Error adding user: ', error)
          })
        }
      }
    }
</script>
