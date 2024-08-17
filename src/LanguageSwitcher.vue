<template>
  <nav class="nav pr">
    <button class="nav__globe df a-center" :class="currentLanguageIcon" @click="toggleDropdown">
      <span class="nav__lng-text">{{ currentLanguageLabel }}</span>
    </button>

    <transition name="dropdown-transition">
      <div class="nav__list tc dropdown" v-show="isDropdownOpen">
        <button
            v-for="lang in languages"
            :key="lang.code"
            class="nav__lng-item db fs14"
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
export default {
  data() {
    return {
      isDropdownOpen: false,
      languages: [
        {code: "hy", label: "Հայ"},
        {code: "ru", label: "Рус"},
        {code: "en", label: "Eng"},
      ],
    };
  },
  computed: {
    currentLanguageLabel() {
      const currentLang = this.languages.find(
          (lang) => lang.code === this.currentLanguage
      );
      return currentLang ? currentLang.label : "Language";
    },
    currentLanguage() {
      return this.$i18n.locale;
    },
    currentLanguageIcon() {
      return `icon-${this.currentLanguage}`;
    },
    // currentUrl() {
    //   // Construct the current URL with the language parameter
    //   const basePath = this.$route.path.split('/').slice(2).join('/'); // Updated to handle routes correctly
    //   return `/${this.currentLanguage}/${basePath}`;
    // }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("language", lang);
      // this.$router.push({ path: this.currentUrl });
      this.isDropdownOpen = false;
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
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  },
};
</script>

<style lang="scss">
.nav {

  &__list {
    position: absolute;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
    border-radius: 6px;
    top: 100%;
    left: 0;
    width: 100%;
    overflow: hidden;
  }

  &__globe {
    background-size: 22px !important;
    background-position: left !important;
    height: 40px;
    min-width: 72px;
    display: flex;
    align-items: center;
    padding-left: 32px;
    cursor: pointer;
  }

  &__lng-item {
    padding: 8px 8px 8px 28px;
    width: 100%;
    transition: background-color 0.3s;

    &:not(.active):hover {
      background-color: silver;
    }

    &.active {
      color: #5bba47;
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


  .icon-hy {
    background-image: url("/images/icons-lng/icon-am.svg");
  }
  .icon-ru {
    background-image: url("/images/icons-lng/icon-ru.svg");
  }

  .icon-en {
    background-image: url("/images/icons-lng/icon-en.svg");
  }

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
