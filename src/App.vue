<template>
 <div class="main-wrapper" id="app">  
   
        <Sidebar />
       
        <div class="page-wrapper">
            <!-- partial:partials/_navbar.html -->
            <Navbar />
            <!-- partial -->
            <div class="page-content">
                <router-view/>
            </div>
            <!-- partial:partials/_footer.html -->
         
            <!-- partial -->
 </div>
 </div>  


<!-- 

  <div >
    <Navbar/>
    
    <div class="container">
      <Sidebar/>
      
    </div>
    
  </div> -->
</template>




<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components:{
    Navbar,
    Sidebar

  }
}
</script>

<style>
 @import "./assets/css/demo_1/style.css";
</style>
