<template>
  <layout-view>
    <template v-slot:slot_body>
      <div>
        <div><router-link :to="{name:'productCategory.create'}" class=" btn btn-primary p-1 mb-1"><fa-fa-icon className=" fa fa-plus " title="Add New Category"></fa-fa-icon> Add New Category</router-link></div>
        <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="categoriesData.length" v-for="(item,index) in categoriesData">
            <td>{{  item.id}}</td>
            <td>{{  item.name}}</td>
            <td>{{  item.description}}</td>
            <td>{{  item.status}}</td>
            <td>{{  item.image}}</td>
            <td>
              <router-link :to="{name:`productCategory.update`,params:{id:item.id}}"><fa-fa-icon className=" fa fa-edit " color="blue"></fa-fa-icon></router-link>
              <fa-fa-icon className=" fa fa-trash " color="red" :handleClick="deleteCategory" :id="item.id"></fa-fa-icon>
            </td>
          </tr>
          <tr v-else>
            <td colspan="6"  class="text-center">No Data Found.</td>
          </tr>
        </tbody>
      </table>
      </div>
    </template>
  </layout-view>
</template>
<script setup>
import LayoutView from '../layout/Layout.vue';
import faFaIcon from '../../../components/faFaIcon.vue';
import { toast } from 'vue3-toastify';
// import { count } from '@/stores/ProductCategory/index'
import axios from 'axios';
import { 
  onMounted,
  onUpdated,
  onUnmounted,
  onActivated,
  onDeactivated,
  ref
} from 'vue'

const categoriesData = ref([]);
onMounted(() => {
  console.log(`the component is now mounted.`)
  getCategoriesData();
})

onUpdated(() => {
 
  console.log('updated')
})

onUnmounted(() =>{
  console.log('unmounted')
})
// onActivated(() =>{
//   console.log('onActivated')
// })
// onDeactivated(() =>{
//   console.log('onActivated')
// })
const api_get_categories_data = ref("/api/product-category/");
const api_delete_category_data = ref("/api/product-category/")
const deleteCategory = (categoryId="") =>{

  if(confirm("Do you want to delete this category?")){

    axios.delete(api_delete_category_data.value+`${categoryId}`)
      .then((response) =>{
        console.log('categoriesData',categoriesData)
        if(response?.data?.status_code===200){
          const mssg = response?.data?.mssg || "something went wrong"
          toast.success(mssg)
        }
        getCategoriesData();
        
     
      }).catch((err)=>{
        console.log('get error',err);
        toast.error('something went wrong')
      })
  }
}



const getCategoriesData = () =>{
  try {
    axios.get(api_get_categories_data.value)
    .then((response) =>{
      console.log('categoriesData',categoriesData)
      categoriesData.value = response.data?.categoryData || [] 
      console.log('allCategoriesdAta',response)
    }).catch((err)=>{
      console.log('get error',err);
    })
  } catch (error) {
    console.log('errr',error);
  }
}
</script>