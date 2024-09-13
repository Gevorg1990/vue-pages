<template>
  <nav class="language-box">
    <button class="language-box__btn-lang df a-center"   :class="[currentLanguageIcon, { 'dropdown-open': isDropdownOpen }]"
            @click="toggleDropdown">
      <span class="nav__lng-text">{{ currentLanguageLabel }}</span>
    </button>

    <transition name="dropdown-transition">
      <div class="language-box__list tc dropdown" v-show="isDropdownOpen">
        <button
            v-for="lang in languages"
            :key="lang.code"
            class="language-box__lng-item db fs14"
            :class="{
            active: lang.code === currentLanguage,
            [`icon-${lang.code}`]: true
          }"
            @click="changeLanguage(lang.code)"
        >
          {{ lang.label }}
        </button>
      </div>
    </transition>
  </nav>
</template>

<script>

import {watch} from "vue";

export default {
  data() {
    return {
      isDropdownOpen: false,
      languages: [
        { code: 'hy', label: 'Հայ' },
        { code: 'ru', label: 'Рус' },
        { code: 'en', label: 'Eng' },
      ],
    };
  },
  computed: {
    currentLanguageLabel() {
      const currentLang = this.languages.find(
          (lang) => lang.code === this.currentLanguage
      );
      return currentLang ? currentLang.label : 'Language';
    },
    currentLanguage() {
      return this.$i18n.locale;
    },
    currentLanguageIcon() {
      return `icon-${this.currentLanguage}`;
    },
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('language', lang);
      this.updateBodyClass(lang);
      this.isDropdownOpen = false;
    },
    updateBodyClass(locale) {
      document.body.className = `lang-${locale}`; // Update the <body> class
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleDocumentClick(event) {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleDocumentClick);
    this.updateBodyClass(this.currentLanguage); // Set initial class on mount
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  },
};
</script>

<style lang="scss">
.language-box {
  left: 13.5px;
  position: absolute;

  &__list {
    position: absolute;
    //background-color: #fff;
    z-index: 10;
    border-radius: 6px;
    top: 100%;
    left: 0;
    width: 100%;
    overflow: hidden;
  }

  &__btn-lang {
    background-size: 22px !important;
    background-position: left !important;
    height: 40px;
    min-width: 72px;
    display: flex;
    align-items: center;
    padding-left: 32px;
    cursor: pointer;
    color: $textColor1;
    transition: color 0.3s ease;

    &.dropdown-open,
    &:hover {
      color: $textColor3;

    }

  }

  &__lng-item {
    background-color: $bgColor1;
    padding: 8px 8px 8px 28px;
    width: 100%;
    transition: background-color 0.3s, color 0.3s ease;

    &:not(.active):hover {
      color: $textColor1;
      background-color: rgba($bgColor4, 1);
    }

    &.active {
      background: rgba($bgColor3, 1);
      color: $textColor1;
      cursor: default;
      user-select: none;
      pointer-events: none;
    }
  }

  .icon-hy,
  .icon-ru,
  .icon-en {
    background-repeat: no-repeat;
    background-position: 8px;
    background-size: 18px;
  }

  .icon-hy {background-image: url('assets/icons-lng/icon-am.svg');}
  .icon-ru {background-image: url('assets/icons-lng/icon-ru.svg');}
  .icon-en {background-image: url('assets/icons-lng/icon-en.svg');}

  &__lng-text {
    color: $textColor1;
  }

  /* Transition styles */
  .dropdown-transition-enter-active,
  .dropdown-transition-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .dropdown-transition-enter-from,
  .dropdown-transition-leave-to {
    opacity: 0;
    transform: translateY(-5px);
  }

  .dropdown-transition-enter-to,
  .dropdown-transition-leave-from {
    opacity: 1;
    transform: translateY(0);
  }

}
</style>
