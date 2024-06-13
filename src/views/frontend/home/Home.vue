<template>
   <LayoutViewVue>
      <template v-slot:slot_body>
        <!-- Carousel Start -->
        <home-carasouls-vue></home-carasouls-vue>
        <!-- Carousel End -->

        <!-- Featured Start -->
        <features-vue></features-vue>
        <!-- Featured End -->

        <!-- Categories Start -->
        <Categories></Categories>
        <!-- Categories End -->

        <!--Featured Products Start -->
        <FeaturedProduct></FeaturedProduct>
        <!-- Products End -->

        <!-- Offer Start -->
        <offer-vue></offer-vue>
        <!-- Offer End -->

        <!-- Recent Products Start -->
        <recent-products-vue></recent-products-vue>
        <!-- Products End -->

        <!-- Vendor Start -->
        <vendor-vue></vendor-vue>
        <!-- Vendor End -->
        <!-- Back to Top -->
        <a href="#" class="btn btn-primary back-to-top"
          ><i class="fa fa-angle-double-up"></i
        ></a>
      </template>
    </LayoutViewVue>
</template>
<script>
import Categories from "./Categories.vue";
import FeaturedProduct from "./FeaturedProduct.vue";
import RecentProductsVue from "./RecentProducts.vue";
import VendorVue from "./Vendor.vue";
import OfferVue from "./Offer.vue";
import FeaturesVue from "./Features.vue";
import HomeCarasoulsVue from "./HomeCarasouls.vue";
import LayoutViewVue from "../layout/LayoutView.vue";
export default {
  components: {
    LayoutViewVue,
    Categories,
    FeaturedProduct,
    RecentProductsVue,
    VendorVue,
    OfferVue,
    FeaturesVue,
    HomeCarasoulsVue,
  },
};
</script>