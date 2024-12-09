<template>
  <div class="header df a-center j-ctr">
    <LanguageSwitcher />

    <div id="nav" class="nav df a-center">
      <router-link class="router-link fs20" to="/"> {{$t('menu.home')}} </router-link>
      <img src="../../public/logo.svg" alt="logo">
      <router-link class="router-link fs20" to="/about">{{$t('menu.about')}}</router-link>
    </div>

  <div style="display: flex; z-index: 11; position: absolute; right: 13.5px; width: 50px; height: 50px;">
    <router-link class="router-link router-link--wishlist pr df j-ctr a-center" to="/wishlist">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" x="0" y="0" viewBox="0 0 100 100" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path fill="#ff0000" fill-rule="evenodd" d="M44.13 31.186c-5.644-5.644-14.795-5.644-20.44 0-5.644 5.645-5.644 14.796 0 20.44L50.2 78.135l26.279-26.28c5.644-5.644 5.644-14.796 0-20.44s-14.796-5.644-20.44 0l-3.476 3.475a3.344 3.344 0 0 1-4.728 0zm-23.754-3.314c7.475-7.475 19.594-7.475 27.07 0l2.753 2.754 2.525-2.525c7.475-7.475 19.594-7.475 27.07 0s7.474 19.594 0 27.069L51.897 83.064a2.364 2.364 0 0 1-.311.262 2.372 2.372 0 0 1-3.069-.244L20.376 54.94c-7.475-7.475-7.475-19.594 0-27.07z" clip-rule="evenodd" opacity="1" data-original="#000000" class=""></path></g></svg>
      <!-- Display the global item count -->
      <span class="fs10 pa">{{ globalStore.itemCount }} </span>
    </router-link>

  </div>
  </div>
</template>

<script>
import {useGlobalStore} from "../store/useGlobalStore";

import LanguageSwitcher from "../LanguageSwitcher";

export default {
  setup() {
    // Use the global store
    const globalStore = useGlobalStore();

    return { globalStore };
  },
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      items: [], // Stores fetched items
    };
  },

  methods: {
    // Fetch items from the server and update the global item count

    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  height: 100px;
  z-index: 11;
  width: 100%;

  &:before {
    content: "";
    top: 0;
    background: url("../../public/Vector.png") repeat-x;
    background-size: contain;
    width: 100%;
    position: absolute;
    height: 100%;
  }
}

.nav {
  gap: 80px;
  z-index: 1;
}

.router-link {
  transition: text-shadow 0.3s ease;

  &-active {
    user-select: none;
    pointer-events: none;
    cursor: default;
    color: $textColor3;
  }

  &:not(&-active):hover {
    text-shadow: 0 0 16px $textColor3;
  }

  &--wishlist {
    span {
      color: white !important;
    }

    svg {
      transition: transform 0.3s ease;
    }

    svg:hover {
      //animation: pulse 1s ease infinite;
      transform: scale(1.1);
    }
  }

}
</style>
