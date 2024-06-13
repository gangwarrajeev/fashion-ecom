<template>
  <div>
    <slot name="slot_header">
      <Header></Header>
    </slot>
    <slot name="slot_body">
      <div></div>
    </slot>
    
    <slot name="slot_footer">
      <Footer></Footer>
    </slot>
  </div>  
</template>
<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    components:{
        Header,
        Footer
    }
}
</script>
<style scoped>

</style>