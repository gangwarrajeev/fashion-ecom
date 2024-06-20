<script setup>
</script>
<template>

  <div> 
    <!-- key is used becuase when using same component with different url then component does not mount so need to pass key -->
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

