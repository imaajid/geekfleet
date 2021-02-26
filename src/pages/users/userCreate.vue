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
                    <form class="forms-sample" v-on:submit.prevent="onSubmit">
                        
                        <!-- <div class="form-group">
                            <label for="name"> Name</label>
                            <input v-model="productData.product_name" type="text" class="form-control" id="name" autocomplete="off"
                                   placeholder="Name" name="name">
                        </div> -->
                        <div class="form-group">
                            <label for="email">Name</label>
                            <input v-model="productData.product_name" type="text" class="form-control" 
                                   placeholder="Email">
                        </div>
                       <!--  <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" autocomplete="off"
                                   placeholder="Password" name="password">
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" class="form-control" id="confirm-password" autocomplete="off"
                                   placeholder="Password" name="confirm-password">
                        </div>
                        <div class="form-group">
                            <label for="phone_no">Phone No</label>
                            <div class="input-group-prepend">
                                <span class="input-group-text">+92</span>
                                <input type="text" class="form-control" placeholder="3352968699" id="phone_no"
                                       name="phone_no">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="business_email">Address</label>
                            <input type="email" class="form-control" id="business_email" autocomplete="off"
                                   placeholder="Business Email" name="business_email">
                        </div>
                        <div class="form-group">
                            <label for="address">Address</label>
                            <textarea class="form-control" id="address" name="address" placeholder="Address"
                             rows="5"></textarea>
                        </div> -->
                    
                       
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
import db from '@/db'
export default {
  name: 'usercreate',
    data () {
    return {
      editId: '',
      productData: {
        'id' : '',
        'product_id': '',
        'product_name': '',
        'product_price': ''
      },
      editProductData: {
        'id' : '',
        'product_id': '',
        'product_name': '',
        'product_price': ''
      },
      products: []
    }
  },

   onSubmit(){
      db.collection('products').add(this.productData).then(this.getProducts)
      this.productData.product_name = ''
     

    },
    // onDelete(product_id){
    //   db.collection('products').where('product_id', '==', product_id).get().then(querySnapshot =>{
    //     querySnapshot.forEach(doc=>{
    //       doc.ref.delete().then(this.getProducts)
    //     })
    //   })
    // }
    
   
}
</script>
