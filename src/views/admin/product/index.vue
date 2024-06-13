<template>
    <layout-view>
      <template v-slot:slot_body>
        <router-view></router-view>
      </template>
    </layout-view>
  </template>
  <!-- <script>
  import LayoutView from "../layout/Layout.vue"
  export default{
    components:{
      LayoutView
    }
  }
  
  </script> -->
  <script setup>
  import { ref, onMounted } from 'vue'
  import LayoutView from "../layout/Layout.vue"
  
  // reactive state
  const count = ref(0)
  const productsData = ref([])
  

  
  // lifecycle hooks
  onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
  })
  </script>