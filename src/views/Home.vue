<template>
  <div class="home pr" v-cloak :style="{ backgroundImage: 'url(' + currentImage + ')' }">

    <div class="home__title-box font-header-title tc">
      <h2 class="home__header-title" v-html="translatedTitle"></h2>
      <span class="home__header-description db fs30">{{$t('message.home-description')}}</span>
    </div>

    <div class="home__soc-box">
      <div class="home__soc-box-wrapper pr">
        <a class="home__soc-link home__soc-link--fb" href="https://www.facebook.com/gevorg.gasparyan.7528/" target="_blank" aria-label="Facebook"
           @mouseover="showTooltip($t('go to Facebook'), $event, 'right')"
           @mouseleave="hideTooltip"
        ></a>
        <a class="home__soc-link home__soc-link--ig" href="#" target="_blank" aria-label="Instagram"></a>
        <a class="home__soc-link home__soc-link--tg" href="#" target="_blank" aria-label="Telegram"></a>
        <a class="home__soc-link home__soc-link--phone" href="tel:+37555024477" aria-label="Phone"></a>
      </div>
    </div>

    <div class="home__cake-box">
      <div class="home__cake-box-wrapper pr">
        <button
            class="home__cake-btn home__cake-btn--1"
            @mouseover="showTooltip($t('Tartalet.item-1.name'), $event, 'left')"
            @mouseleave="hideTooltip"
            type="button"
            @click="scrollToSection('tartalet')"
        ></button>
        <button
            class="home__cake-btn home__cake-btn--2"
            @mouseover="showTooltip($t('Tartalet.item-2.name'), $event, 'left')"
            @mouseleave="hideTooltip"
            type="button"
            @click="scrollToSection('cheesecake')"
        ></button>
        <button
            class="home__cake-btn home__cake-btn--3"
            @mouseover="showTooltip($t('cake-2.name'), $event, 'left')"
            @mouseleave="hideTooltip"
            type="button"
            @click="scrollToSection('tartalet')"
        ></button>

      </div>
    </div>

<!--    <span class="arrow-animate pa">go</span>-->
    <div class="scroll-prompt" @click="scrollToSection('tartalet')">
      <div class="scroll-prompt-arrow-container">
        <div class="scroll-prompt-arrow"><div></div></div>
        <div class="scroll-prompt-arrow"><div></div></div>
      </div>
    </div>
  </div>

  <Tartalet />

  <Cheesecake />

  <Coments />

  <Hexigon />

  <div
      v-if="tooltipVisible"
      :class=" `tooltip tooltip-${tooltipPositionClass}`"
      :style="{ left: tooltipPosition.left, top: tooltipPosition.top }"
      ref="tooltip"
  >
    {{ tooltipText }}
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import DOMPurify from 'dompurify';

// Import images
import bg1 from '../assets/home-bg/bg1.webp';
import bg2 from '../assets/home-bg/bg2.webp';
import bg3 from '../assets/home-bg/bg3.webp';
import Tartalet from "../components/Tartalet";
import Coments from "../components/Coments";
import Cheesecake from "../components/Cheesecake";
import Hexigon from "../components/Hexigon";

export default {
  name: 'Home',
  components: {Hexigon, Cheesecake, Coments, Tartalet},
  setup() {

    // Use the imported images
    const imageUrls = [bg1, bg2, bg3];

    const currentImage = ref(imageUrls[0]);
    let intervalId;
    let currentIndex = 0;

    const updateBackgroundImage = () => {
      currentImage.value = imageUrls[currentIndex];
      currentIndex = (currentIndex + 1) % imageUrls.length; // Move to the next image, loop back to start
      let home = document.querySelector('.home')

      document.querySelector('.home').classList.add('transitioning');
      setTimeout(() => {

        if(home.length) {
          home.classList.remove('transitioning');
        }

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
      tooltipText: '', // Holds the tooltip text
      tooltipVisible: false, // Controls tooltip visibility
      tooltipPosition: { left: 0, top: 0 }, // Position of the tooltip
      tooltipPositionClass: 'right' // Default position
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: "start",
        });
      }
    },
    showTooltip(text, event, position) {

      this.tooltipText = text;
      this.tooltipVisible = true;
      this.tooltipPositionClass = position;

      this.$nextTick(() => {
        const buttonRect = event.target.getBoundingClientRect();
        const tooltipElement = this.$refs.tooltip;

        if (tooltipElement) {
          const tooltipRect = tooltipElement.getBoundingClientRect();

          if (position === 'right') {
            this.tooltipPosition = {
              left: buttonRect.left + buttonRect.width + window.scrollX + 10 + 'px',
              top: buttonRect.top + window.scrollY + (buttonRect.height - tooltipRect.height) / 2 + 'px',
            };
          } else if (position === 'left') {
            this.tooltipPosition = {
              left: buttonRect.left + window.scrollX - tooltipRect.width - 10 + 'px',
              top: buttonRect.top + window.scrollY + (buttonRect.height - tooltipRect.height) / 2 + 'px',
            };
          } else if (position === 'top') {
            this.tooltipPosition = {
              left: buttonRect.left + window.scrollX + (buttonRect.width - tooltipRect.width) / 2 + 'px',
              top: buttonRect.top + window.scrollY - tooltipRect.height - 10 + 'px',
            };
          } else if (position === 'bottom') {
            this.tooltipPosition = {
              left: buttonRect.left + window.scrollX + (buttonRect.width - tooltipRect.width) / 2 + 'px',
              top: buttonRect.top + window.scrollY + buttonRect.height + 10 + 'px',
            };
          } else {
            console.error('Invalid position specified.');
          }
        } else {
          console.error('Tooltip element not found.');
        }
      });
    },


    hideTooltip(event) {
      this.tooltipVisible = false;
    },
  },
  computed: {
    translatedTitle() {
      // Replace placeholders with actual HTML tags
      const rawTitle = this.$t('message.home-title', {
        highlight: '<mark>',
        highlightEnd: '</mark>'
      });
      // Sanitize the final result
      return DOMPurify.sanitize(rawTitle, { ALLOWED_TAGS: ['mark'], ALLOWED_ATTR: [] });
    }
  }

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
  min-height: 680px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: inset 0 0 50px, 0 0 115px;
  border-radius: 0 0 100px 100px;
  overflow: hidden;


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
      height: calc(75% - 97.5px);
    }

    &:after {
      height: calc(25% - 97.5px);
    }

  }

  &__cake-box-wrapper {
    top: calc(25% - 60px);
  }

  &__soc-box-wrapper {
    top: calc(75% - 82px);
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

    &--phone {
      background: url('../assets/icons-soc/icon-phone.svg') no-repeat center;
    }

  }


  .scroll-prompt {
    cursor: pointer;
    position: absolute;
    z-index: 998;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 80px;

    .scroll-prompt-arrow-container {
      animation-name: bounce;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    }

    .scroll-prompt-arrow {
      animation-name: opacity;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    }
    .scroll-prompt-arrow:last-child {
      animation-direction: reverse;
    }
    .scroll-prompt-arrow > div {
      width: 30px;
      height: 30px;
      border-right: 8px solid $bdColor2;
      border-bottom: 8px solid $bdColor2;
      transform: rotate(45deg) translateZ(1px);
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    10% {
      opacity: 0.1;
    }

    20% {
      opacity: 0.2;
    }

    30% {
      opacity: 0.3;
    }

    40% {
      opacity: 0.4;
    }

    50% {
      opacity: 0.5;
    }

    60% {
      opacity: 0.6;
    }

    70% {
      opacity: 0.7;
    }

    80% {
      opacity: 0.8;
    }

    90% {
      opacity: 0.9;
    }

    100% {
      opacity: 1;
    }

  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }

    10% {
      transform: translateY(3px);
    }

    20% {
      transform: translateY(6px);
    }

    30% {
      transform: translateY(9px);
    }

    40% {
      transform: translateY(12px);
    }

    50% {
      transform: translateY(15px);
    }

    60% {
      transform: translateY(18px);
    }

    70% {
      transform: translateY(21px);
    }

    80% {
      transform: translateY(24px);
    }

    90% {
      transform: translateY(27px);
    }

    100% {
      transform: translateY(30px);
    }
  }
}
</style>
