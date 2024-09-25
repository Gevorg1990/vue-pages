<template>
  <Carousel
      ref="carousel"
      :itemsToShow="1"
      :wrapAround="true"
      :transition = 0
  >
    <Slide v-for="(img, index) in images" :key="index">
      <div class="carousel__item">
        <img :src="img.src" >
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup() {
    const carousel = ref(null);

    onMounted(() => {
      const interval = setInterval(() => {
        carousel.value.next(); // move to the next slide
      }, Math.floor(Math.random() * (14000 - 8000 + 1)) + 8000); // autoplay interval in milliseconds

      onBeforeUnmount(() => {
        clearInterval(interval); // clear interval on component unmount
      });
    });

    return {
      carousel,
    };
  },
})
</script>


<style type="scss" lang="scss" scoped>

.carousel__slide {
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease, visibility 1s ease;
}
.carousel__item {
  max-height: 260px;
}

.carousel__slide--active {
  opacity: 1;
  visibility: visible;
}
.carousel__viewport {
  width: 100%;
  height: 100%;
}
</style>