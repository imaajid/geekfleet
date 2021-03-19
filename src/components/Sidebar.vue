<template>
  <div>
    <nav class="sidebar">
      <div class="sidebar-header">
        <a href="#" class="sidebar-brand"> Noble<span>UI</span> </a>
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
              <span style="padding-left: 7px">Dashboard</span>
            </a>
          </li>
          <li class="nav-item nav-category">web apps</li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#emails"
              role="button"
              aria-expanded="false"
              aria-controls="emails"
            >
              <i class="link-icon" data-feather="mail"></i>
              <users-icon size="1.2x" class="custom-class"></users-icon>
              <span style="padding-left: 7px">user</span>
              <i class="link-arrow" data-feather="chevron-down"></i>
            </a>
            <div class="collapse" id="emails">
              <ul class="nav sub-menu">
                <li class="nav-item">
                  <router-link to="/userlist" class="nav-link"
                    >List User</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/useredit" class="nav-link"
                    >Edit User</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/usercreate" class="nav-link"
                    >Create User</router-link
                  >
                </li>
              </ul>
            </div>
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
              <activity-icon size="1.2x" class="custom-class"></activity-icon>

              <span style="padding-left: 7px">Tickets</span>
              <i class="link-arrow" data-feather="chevron-down"></i>
            </a>
            <div class="collapse" id="tickets">
              <ul class="nav sub-menu">
                <li class="nav-item">
                  <router-link to="/ticketlist" class="nav-link"
                    >List Tickets</router-link
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
              <SmartphoneIcon 
                name="stay_primary_portrait"
              ></SmartphoneIcon>
              <span style="padding-left: 7px">Device</span>
              <i class="link-arrow" data-feather="chevron-down"></i>
            </a>
            <div class="collapse" id="device">
              <ul class="nav sub-menu">
                <li class="nav-item">
                  <router-link to="/devicelist" class="nav-link"
                    >List Device</router-link
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
import {
  AirplayIcon,
  AtSignIcon,
  ActivityIcon,
  BoxIcon,
  ShieldIcon,
  LockIcon,
  UsersIcon,
  ListIcon,
  PackageIcon,
  SmartphoneIcon,
} from "vue-feather-icons";

export default {
  components: {
    // Icons
    AirplayIcon,
    ActivityIcon,
    BoxIcon,
    ShieldIcon,
    LockIcon,
    UsersIcon,
    ListIcon,
    PackageIcon,
    SmartphoneIcon,
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>