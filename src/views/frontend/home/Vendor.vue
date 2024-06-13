<template>
  <div class="container-fluid py-5">
    <div class="row px-xl-5">
      <div class="col">
        <div class="owl-carousel vendor-carousel">
          <div class="bg-light p-4">
            <img src="/assets/img/vendor-1.jpg" alt="" />
          </div>
          <div class="bg-light p-4">
            <img src="/assets/img/vendor-2.jpg" alt="" />
          </div>
          <div class="bg-light p-4">
            <img src="/assets/img/vendor-3.jpg" alt="" />
          </div>
          <div class="bg-light p-4">
            <img src="/assets/img/vendor-4.jpg" alt="" />
          </div>
          <div class="bg-light p-4">
            <img src="/assets/img/vendor-5.jpg" alt="" />
          </div>
          <div class="bg-light p-4">
            <img src="/assets/img/vendor-6.jpg" alt="" />
          </div>
          <div class="bg-light p-4">
            <img src="/assets/img/vendor-7.jpg" alt="" />
          </div>
          <div class="bg-light p-4">
            <img src="/assets/img/vendor-8.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.loadCarausal();
  },
  methods: {
    loadCarausal() {
      // Vendor carousel
      $(".vendor-carousel").owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 2,
          },
          576: {
            items: 3,
          },
          768: {
            items: 4,
          },
          992: {
            items: 5,
          },
          1200: {
            items: 6,
          },
        },
      });
    },
  },
};
</script>