<template>
  <div class="home pr" v-cloak :style="{ backgroundImage: 'url(' + currentImage + ')' }">
    <h2 class="home__header-title font-italiano">
      The <mark>Perfect</mark> Baked Cake Everyday
    </h2>
    <span class="font-italiano db fs30">“Where there is cake, there is hope.”</span>

    <div class="home__soc-box">
      <div class="home__soc-box-wrapper">
        <a class="home__soc-link home__soc-link--fb" href="https://www.facebook.com/gevorg.gasparyan.7528/" target="_blank" aria-label="Facebook"></a>
        <a class="home__soc-link home__soc-link--ig" href="#" target="_blank" aria-label="Instagram"></a>
        <a class="home__soc-link home__soc-link--tg" href="#" target="_blank" aria-label="Telegram"></a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

// Import images
import bg1 from '../assets/home-bg/bg1.webp';
import bg2 from '../assets/home-bg/bg2.webp';
import bg3 from '../assets/home-bg/bg3.webp';

export default {
  name: 'Home',

  setup() {
    // Use the imported images
    const imageUrls = [bg1, bg2, bg3];

    const currentImage = ref(imageUrls[0]);
    let intervalId;

    const updateBackgroundImage = () => {
      const newImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
      currentImage.value = newImageUrl;

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
      currentImage,
    };
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
      background: url('../assets/icons-soc/icon-fb.svg');
    }

    &--ig {
      background: url('../assets/icons-soc/icon-ig.svg');
    }

    &--tg {
      background: url('../assets/icons-soc/icon-tg.svg');
    }

    &:hover {
      filter: grayscale(0);
    }
  }
}
</style>
