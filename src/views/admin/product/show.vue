<template>
    <layout-view>
      <template v-slot:slot_body>
        <h2>Hay o a, lfgsdf;l</h2>
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
  import { ref } from 'vue'
  import LayoutView from "../layout/Layout.vue"
  
  // reactive state
  const count = ref(0)
  const userData = ref({
      id:104,
      name:"Shyam Kumar Yadav",
      email:"yadavshyam@gmail.com",
      mobile:7456968574
    })
  

  

  </script>