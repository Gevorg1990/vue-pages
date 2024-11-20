<template>
  <div class="header df a-center j-ctr">
    <LanguageSwitcher />

    <div id="nav" class="nav df a-center">
      <router-link class="router-link fs20" to="/"> {{$t('menu.home')}} </router-link>
      <img src="../../public/logo.svg" alt="logo">
      <router-link class="router-link fs20" to="/about">{{$t('menu.about')}}</router-link>
    </div>

  <div style="display: flex; z-index: 11; position: absolute; right: 13.5px; width: 50px; height: 40px;">
    <router-link class="shop-link" to="/shop">
      <img src="../../public/love.gif" alt="love">
    </router-link>
    <!-- Display the global item count -->
    <span>{{ globalStore.itemCount }} </span>
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
}
</style>
