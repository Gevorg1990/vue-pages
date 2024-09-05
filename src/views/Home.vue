<template>
  <div class="home pr" v-cloak :style="{ backgroundImage: 'url(' + currentImage + ')' }">

    <div class="home__title-box font-header-title tc">
      <h2 class="home__header-title" v-html="$t('message.home-title')"></h2>
      <span class="home__header-description db fs30">{{$t('message.home-description')}}</span>
    </div>

    <div class="home__soc-box">
      <div class="home__soc-box-wrapper pr">
        <a class="home__soc-link home__soc-link--fb" href="https://www.facebook.com/gevorg.gasparyan.7528/" target="_blank" aria-label="Facebook"></a>
        <a class="home__soc-link home__soc-link--ig" href="#" target="_blank" aria-label="Instagram"></a>
        <a class="home__soc-link home__soc-link--tg" href="#" target="_blank" aria-label="Telegram"></a>
      </div>
    </div>

    <div class="home__cake-box">
      <div class="home__cake-box-wrapper pr">
        <button
            class="home__cake-btn home__cake-btn--1"
            v-tooltip="{ text: $t('cake.title-1'), placement: 'left' }"
            type="button"
            @click="scrollToSection('tartalet')"
        ></button>
        <button
            class="home__cake-btn home__cake-btn--2"
            v-tooltip="{ text: $t('cake.title-1'), placement: 'left' }"
            type="button"
            @click="scrollToSection('tartalet')"
        ></button>
        <button
            class="home__cake-btn home__cake-btn--3"
            v-tooltip="{ text: $t('cake.title-1'), placement: 'left' }"
            type="button"
            @click="scrollToSection('tartalet')"
        ></button>

      </div>
    </div>
  </div>

  <Tartalet />



  <Coments />

</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

// Import images
import bg1 from '../assets/home-bg/bg1.webp';
import bg2 from '../assets/home-bg/bg2.webp';
import bg3 from '../assets/home-bg/bg3.webp';
import Tartalet from "../components/Tartalet";
import Coments from "../components/Coments";

export default {
  name: 'Home',
  components: { Coments, Tartalet},
  setup() {

    // Use the imported images
    const imageUrls = [bg1, bg2, bg3];

    const currentImage = ref(imageUrls[0]);
    let intervalId;
    let currentIndex = 0;

    const updateBackgroundImage = () => {
      currentImage.value = imageUrls[currentIndex];
      currentIndex = (currentIndex + 1) % imageUrls.length; // Move to the next image, loop back to start

      document.querySelector('.home').classList.add('transitioning');
      setTimeout(() => {
        document.querySelector('.home').classList.remove('transitioning');
      }, 1000); // Ensure this matches the transition duration in CSS
    };


    onMounted(() => {
      updateBackgroundImage();
      intervalId = setInterval(updateBackgroundImage, 10000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return {
      currentImage
    };
  },

  data() {
    return {

    }
  },
  methods: {
    scrollToSection(sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },

};
</script>

<style lang="scss" scoped>

[v-cloak] {
  display: none;
}

.home {
  width: 100%;
  height: 100dvh;
  background-image: url("../assets/home-bg/bg1.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-image 1s ease-in-out;
  min-height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &.transitioning {
    transition: background-image 1s ease-in-out;
  }

  &__title-box > * {
    font-family: inherit;
  }

  &__header-title {
    max-width: 600px;
    text-align: center;
    line-height: 80px;
    margin-bottom: 40px;

    :deep(mark)  {
      font-family: inherit;
      background: unset;
      color: #FF8886;
      text-shadow: 0 0 16px #FF8886;
      animation: pulse 1.5s infinite;
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

  &__soc-box,
  &__cake-box {
    height: 100%;
    position: absolute;
    width: 40px;
    z-index: 10;

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
      top: 0;
    }

    &:after {
      bottom: 0;
    }

  }

  &__cake-box {
    right: 86px;

    &:before {
      height: calc(25% - 75px);
    }

    &:after {
      height: calc(75% - 75px);
    }

  }

  &__soc-box {
    left: 86px;

    &:before {
      height: calc(75% - 75px);
    }

    &:after {
      height: calc(25% - 75px);
    }

  }

  &__cake-box-wrapper {
    top: calc(25% - 60px);
  }

  &__soc-box-wrapper {
    top: calc(75% - 60px);
  }

  &__cake-btn,
  &__soc-link {
    filter: grayscale(1);
    margin-bottom: 15px;
    height: 30px;
    width: 40px;
    transition: filter 0.3s ease;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      filter: grayscale(0);
    }

  }

  &__cake-btn {
    &--1 {background: url('../assets/icons-cakes/icon-cake1.svg') no-repeat center;}
    &--2 {background: url('../assets/icons-cakes/icon-cake2.svg') no-repeat center;}
    &--3 {background: url('../assets/icons-cakes/icon-cake1.svg') no-repeat center;}
  }

  &__soc-link {

    &--fb {
      background: url('../assets/icons-soc/icon-fb.svg') no-repeat center;
    }

    &--ig {
      background: url('../assets/icons-soc/icon-ig.svg') no-repeat center;
    }

    &--tg {
      background: url('../assets/icons-soc/icon-tg.svg') no-repeat center;
    }

  }

}
</style>
