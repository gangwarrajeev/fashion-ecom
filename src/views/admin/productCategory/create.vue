<template>
    <layout-view>
        <template v-slot:slot_body>
            <div class="container mt-5">
                <h2 class="mb-4">Add Category</h2>
                <form @submit.prevent="saveCategory()">
                    <div class="form-group">
                        <label for="categoryName">Category Name</label>
                        <input type="text" class="form-control" id="categoryName" placeholder="Enter category name"
                           v-model="categoryName" >
                    </div>
                    <div class="form-group">
                        <label for="categoryDescription">Category Description</label>
                        <textarea class="form-control" id="categoryDescription" rows="3"
                            placeholder="Enter category description" v-model="categoryDescription">{{ categoryDescription }}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="CategoryStatus">Category Status</label>
                        <select class="form-control" id="CategoryStatus" v-model="categoryStatus">
                            <option value="">Select status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="CategoryImage">Category Image</label>
                        <input type="file" class="form-control-file" id="CategoryImage" >
                    </div>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                </form>
            </div>
        </template>
    </layout-view>
</template>
<script setup>
import LayoutView from '../layout/Layout.vue';
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import axios from 'axios';


const api_save_category = ref("/api/product-category");
const categoryName = ref("");
const categoryDescription = ref("");
const categoryStatus = ref("");
const categoryImage = ref("")
function saveCategory(){
    try{
        const data = {
            name:categoryName.value,
            description:categoryDescription.value,
            status:categoryStatus.value
        }
        // console.log('apiIs',api_save_category)
        axios.post(api_save_category.value,data).
        then((response) => {
            console.log('response is',response)
        }).catch((e)=>{
            console.log('erorr',e)
        });
    }catch(e){
        console.log('error while saving the category',e)
    }
}


</script>
<!-- <script>
import { ref } from 'vue';

export default {
  setup() {
    const categoryName = ref('Electronics');
    return {
      categoryName
    };
  }
};
</script> -->