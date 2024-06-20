<template>
    <layout-view>
        <template v-slot:slot_body>
            <div><router-link :to="{name:'productCategory.index'}" class=" btn btn-primary p-1 mb-1"><fa-fa-icon className=" fa fa-arrow-left " title="Back"></fa-fa-icon> Back </router-link></div>
            <div class="container mt-5">
                <h2 class="mb-4">{{formHeading}}</h2>
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
                        <input type="file" class="form-control-file" id="product_category_img" name="product_category_img" @change="handleFileUpload">
                    </div>
                    <button type="submit" class="btn btn-primary" >{{submitButtonText}}</button>
                </form>
            </div>
        </template>
    </layout-view>
</template>
<script setup>
import LayoutView from '../layout/Layout.vue';
import faFaIcon from '../../../components/faFaIcon.vue';
import { useForm } from 'vee-validate';
import { ref,reactive, onMounted,onUnmounted, watch  } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import { useRoute } from 'vue-router';

const api_save_category = ref("/api/product-category");
const api_get_category_data = ref("/api/product-category");
const categoryName = ref("");
const categoryDescription = ref("");
const categoryStatus = ref("");
const categoryImage = ref(null);
const categoryId = ref(null);
const submitButtonText = ref("Create");
const formHeading = ref("Add Category");
const formMethod = ref("post");
function handleFileUpload(event) {
    console.log('eve is',event.target.files)
      categoryImage.value = event.target.files[0];
      console.log('image is',categoryImage.value)
}
const route = useRoute();

onMounted(() => {
    
    console.log(route.query);
    console.log(route.params);
    categoryId.value = route.params?.id || "";
    if(categoryId.value!==""){
        submitButtonText.value = 'Update';
        formHeading.value = 'Edit Category'
        formMethod.value = 'put';
        api_save_category.value = api_save_category.value+`/${categoryId.value}`
        getCategoryData();
    }
})

onUnmounted(() => {
    console.log('unmounted');
    categoryName.value = null;
    categoryDescription.value = null;
    categoryStatus.value = null;
    categoryImage.value = null;
    categoryId.value = null;
    submitButtonText.value = null;
    formHeading.value = null;
    formMethod.value = null;
})

function saveCategory(){
    try{

        let formData = new FormData();
        if(categoryId!=="" && categoryId!==undefined){
            formData.append('id',categoryId.value); 
        }
        formData.append('name',categoryName.value);
        formData.append('description',categoryDescription.value);
        formData.append('status',categoryStatus.value);
        if (categoryImage) {
            formData.append('product_category_img',categoryImage.value);
        }
       

        // console.log('apiIs',api_save_category)
        
        axios.formMethod(api_save_category.value,formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        ).
        then((response) => {
            console.log('response is',response)
            if(response.data.status_code=='200'){
                toast.success('Category Created Successfully')
                categoryName.value = "";
                categoryDescription.value = "";
                categoryStatus.value = ""
                this.categoryImage = null;
            }
        }).catch((e)=>{
            console.log('erorr',e)
            const error = e?.response?.data?.errors?.[0] || "Something Went Wrong!";
            toast.error(error)
        });
    }catch(e){
        console.log('error while saving the category',e)
    }
}

function getCategoryData(){
    try {
        axios.get(`${api_get_category_data.value}/${categoryId.value}`)
        .then((response) =>{
            console.log('categoryData',response.data)
            if(response.data.status_code===200){
                const data = response.data?.categoryData  || [];
                categoryName.value = data?.name || ""
                categoryDescription.value = data?.description || ""
                categoryStatus.value = data?.status || ""
                categoryId.value = data?.id || ""
            }
        })
    } catch (error) {
        console.log('error',error)
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

<style>
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #909 !important;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #909 !important;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #909 !important;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #909 !important;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:    #909 !important;
}

::placeholder { /* Most modern browsers support this now. */
   color:    #909 !important;
}
</style>