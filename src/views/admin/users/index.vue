<template>
  <layout-view>
    <template v-slot:slot_body>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="usersData.length">
            <tr v-for="(userData,userIndex) in usersData" :key="userIndex">
              <th scope="row">{{ userData.id }}</th>
              <td>{{ userData.name }}</td>
              <td>{{userData.email}}</td>
              <td>{{ userData.mobile }}</td>
              <td>
                <i class="fa fa-edit"></i>&nbsp;
                <i class="fa fa-trash"></i>&nbsp;
                <i class="fa fa-eye"></i>
              </td>
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
const usersData = ref([
  {
    id:101,
    name:"Rajeev Kumar",
    email:"rajeevkumar@gmail.com",
    mobile:9898987474
  },
  {
    id:102,
    name:"Akshit Seth",
    email:"sethakshit@gmail.com",
    mobile:9898988547
  },
  {
    id:103,
    name:"Anurag Yadav",
    email:"yadavanurag@gmail.com",
    mobile:9898912345
  }, {
    id:104,
    name:"Shyam Kumar Yadav",
    email:"yadavshyam@gmail.com",
    mobile:7456968574
  }
])

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>