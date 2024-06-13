<template>
    <layout-view>
      <template v-slot:slot_body>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">SubCategory</th>
              <th scope="col">MRP</th>
              <th scope="col">Selling Price</th>
              <th scope="col">GST</th>
              <!-- <th scope="col">Coupon</th> -->
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="productsData.length">
              <tr v-for="(productData,productIndex) in productsData" :key="productIndex">
                <th scope="row">{{ productData.id }}</th>
                <td>{{ productData.name }}</td>
                <td>{{productData.email}}</td>
                <td>{{ productData.mobile }}</td>
                <td>
                  <i class="fa fa-edit"></i>&nbsp;
                  <i class="fa fa-trash"></i>&nbsp;
                  <i class="fa fa-eye"></i>
                </td>
              </tr>
            </template>
            <template v-else>
                <tr>
                    <td colspan="8">No Data Found.</td>
                </tr>
            </template>
          </tbody>
        </table>
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