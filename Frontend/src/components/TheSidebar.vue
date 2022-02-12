<template>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="nav-profile-image">
                  <img src="img/avatar/face.jpg" alt="profile">
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2">David Grey. H</span>
                  <span class="text-secondary text-small">Project Manager</span>
                </div>
                <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>  
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'dashboard'}">
                  <span class="menu-title">Dashboard</span>
                  <i class="mdi mdi-home menu-icon"></i>
                </router-link>
            </li>            
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'device'}">
                  <span class="menu-title">Devices</span>
                  <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'settings'}">
                  <span class="menu-title">Setting</span>
                  <i class="mdi mdi-chart-bar menu-icon"></i>
                </router-link>
            </li>
            <li class="nav-item sidebar-actions">
                <span class="nav-link">
                <div class="border-bottom">
                    <h6 class="font-weight-normal mb-3">Devices</h6>
                </div>
                <router-link class="btn btn-block btn-lg btn-gradient-primary mt-4" :to="{name: 'device-add'}" >+ Add a device</router-link>
                <div class="mt-4">
                    <div class="border-bottom">
                    <p class="text-secondary">Categories</p>
                    </div>
                    <ul class="gradient-bullet-list mt-4">
                    <li>Mobile</li>
                    <li>iPon</li>
                    </ul>
                </div>
                </span>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>