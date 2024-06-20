<template>
    <i :class="props.className" :title="props.title" :style="{color:fontColor}" @click="handleOnClick()"></i>
</template>
<script setup>
import { reactive, computed } from 'vue'
 const props = defineProps({
    className: { type: String, required: true },
    title: {type: String, required:false},
    color: {type: String, required:false},
    handleClick: { type: Function, required : false},
    id: {type: Number, required:false}
 })
// console.log('props',props)
 const fontColor = computed(() => {
  return props.color ? props.color : 'white';
})

const handleOnClick = () => {
    try {
        if(typeof props.handleClick =='function'){
            if(props.id!==undefined){
                props.handleClick(props.id);
            }else{
                props.handleClick("");
            }
            
        }
    } catch (error) {
        console.error((error))
    }
}


</script>