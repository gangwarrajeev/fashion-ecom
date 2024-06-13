<template>
  <div class="admin-layout-container">
    <div class="container-scroller">
      <sidebar-view></sidebar-view>
      <div class="container-fluid page-body-wrapper">
        <navbar-view></navbar-view>
        <div class="main-panel">
          <div class="content-wrapper">
              <slot name="slot_body"></slot>
          </div>
          <footer-view></footer-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarView from "./Sidebar.vue"
import FooterView from "./Footer.vue"
import NavbarView from './Navbar.vue'
export default{
  components:{
    SidebarView,
    FooterView,
    NavbarView
  },
  methods:{
    
  }
}
</script>
<style >
@import url("/admin/assets/css/style.css");
@import url("/admin/assets/vendors/mdi/css/materialdesignicons.min.css");

</style>