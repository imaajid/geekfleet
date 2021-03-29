<template>
  <div>
    <nav class="sidebar">
      <div class="sidebar-header">
        <a href="/dashboard" class="sidebar-brand"> Noble<span>UI</span> </a>
        <div class="sidebar-toggler not-active">
      
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="sidebar-body">
        <ul class="nav">
          <li class="nav-item nav-category">Main</li>
          <li class="nav-item">
            <a href="dashboard-one.html" class="nav-link">
              <i class="link-icon" data-feather="box"></i>
              
              <airplay-icon size="20" class="custom-class"></airplay-icon>
              <span class="link-title">Dashboard</span>
            </a>
          </li>
          
        
          <!-- tickets -->
          <li class="nav-item nav-category">web apps</li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#tickets"
              role="button"
              aria-expanded="false"
              aria-controls="emails"
            >
              <vue-material-icon name="airplanemode_active"></vue-material-icon>
              <span class="link-title">Ticket</span>
              <i class="link-arrow" data-feather="chevron-down"></i>
            </a>
            <div class="collapse" id="tickets">
              <ul class="nav sub-menu">
                <li class="nav-item">
                  <router-link to="/ticketlist" class="nav-link"
                    >List Tickets</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/ticketcreate" class="nav-link"
                    >Create Ticket</router-link
                  >
                </li>
               
              </ul>
            </div>
          </li>
       <!-- categories -->
         <li class="nav-item nav-category">web apps</li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#categories"
              role="button"
              aria-expanded="false"
              aria-controls="emails"
            >
              <vue-material-icon name="switch_video"></vue-material-icon>
              <span class="link-title">category</span>
              <i class="link-arrow" data-feather="chevron-down"></i>
            </a>
            <div class="collapse" id="categories">
              <ul class="nav sub-menu">
                <li class="nav-item">
                  <router-link to="/categorieslist" class="nav-link"
                    >List categories</router-link
                  >
                </li>
                
                <li class="nav-item">
                  <router-link to="/categoriescreate" class="nav-link"
                    >Create category</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

<!-- Event -->
 <li class="nav-item nav-category">web apps</li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#event"
              role="button"
              aria-expanded="false"
              aria-controls="emails"
            >
              <vue-material-icon name="snooze"></vue-material-icon>
              <span class="link-title">Event</span>
              <i class="link-arrow" data-feather="chevron-down"></i>
            </a>
            <div class="collapse" id="event">
              <ul class="nav sub-menu">
                <li class="nav-item">
                  <router-link to="/eventlist" class="nav-link"
                    >List Event</router-link
                  >
                </li>
                
                <li class="nav-item">
                  <router-link to="/eventcreate" class="nav-link"
                    >Create Event</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <!-- Device    -->

          <li class="nav-item nav-category">web apps</li>
          <li class="nav-item"> 
             
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#device"
              aria-expanded="false"
              aria-controls="emails"
            >
              <vue-material-icon
                name="stay_primary_portrait"  
              ></vue-material-icon>
              <span class="link-title">Device</span>
              <i class="link-arrow" data-feather="chevron-down"></i>
            </a>
            <div class="collapse" id="device">
              <ul class="nav sub-menu">
                <li class="nav-item">
                  <router-link to="/devicelist" class="nav-link"
                    >List Device</router-link
                  >
                </li> 
                 <li class="nav-item">
                  <router-link to="/devicecreate" class="nav-link"
                    >Create Device</router-link
                  >
                </li>

                </ul>
            </div>
             
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { AirplayIcon, AtSignIcon } from "vue-feather-icons";
export default {
  components: {
    AirplayIcon,
    
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>