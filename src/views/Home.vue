<template>
  <div class="home">
    <h2 class="home__header-title font-italiano"> The <mark>Perfect</mark> Baked Cake Everyday</h2>
    <span class="font-italiano db fs30">“Where there is cake, there is hope.”</span>

    <div class="home__soc-box">

      <div class="home__soc-box-wrapper">

        <a class="home__soc-link home__soc-link--fb" href="https://www.facebook.com/gevorg.gasparyan.7528/" target="_blank"></a>
        <a class="home__soc-link home__soc-link--ig" href="#" target="_blank"></a>
        <a class="home__soc-link home__soc-link--tg" href="#" target="_blank"></a>

      </div>



    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Carousel
  },

  data() {
    return {
      imageList: [
        { src: '/images/home-bg/bg1.png', alt: 'Image 1' },
        { src: '/images//home-bg/bg2.png', alt: 'Image 2' },
        { src: '/images/home-bg/bg3.png', alt: 'Image 3' },
      ]
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100dvh;
  background-image: url(/images/home-bg/bg1.png);
  transition: background-image 1s ease-in-out;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__header-title {
    max-width: 600px;
    font-size: 6rem;
    text-align: center;
    margin-bottom: 40px;
    line-height: 100px;

    mark {
      font-family: inherit;
      background: unset;
      color: #FF8886;
      text-shadow:0 0 16px #FF8886;

    }
    /* Apply the animation to the mark element */



    /* Apply the animation to the mark element */
    mark {
      animation: pulse 1.5s infinite; /* Adjust duration as needed */
    }

    @keyframes pulse {
      0% {
        text-shadow: 0 0 16px rgba(255, 136, 134, 0.7);
      }
      50% {
        text-shadow: 0 0 24px rgba(255, 136, 134, 1);
      }
      100% {
        text-shadow: 0 0 16px rgba(255, 136, 134, 0.7);
      }
    }


  }

  &__soc-box {
    height: 100%;
    position: absolute;
    width: 30px;
    left: 86px;

    &:before,
    &:after {
      background-color: #FF8886;
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
    }

    &:before {
      height: calc(70% - 75px);
      top: 0;
    }

    &:after {
      height: calc(30% - 75px);
      bottom: 0;
    }

  }

  &__soc-box-wrapper {
    position: relative;
    top: calc(70% - 75px);
  }

  &__soc-link {
    filter: grayscale(1);
    margin: 15px 0;
    width: 30px;
    height: 30px;
    transition: filter 0.3s ease;

    &--fb {
      background: url("/images/icons-soc/icon-fb.svg");
    }

    &--ig {
      background: url("/images/icons-soc/icon-ig.svg");
    }

    &--tg {
      background: url("/images/icons-soc/icon-tg.svg");
    }

    &:hover {
      filter: grayscale(0);
    }


  }
}


</style>
