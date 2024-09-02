<template>
  <div class="header df a-center j-ctr">
    <LanguageSwitcher />

    <div id="nav" class="nav df a-center">
      <router-link class="router-link fs20" to="/vue-pages">{{ lng }}</router-link>
      <img src="../../public/logo.svg" alt="logo">
      <router-link class="router-link fs20" to="/about">{{$t('menu.about')}}</router-link>
    </div>
  </div>

</template>
<script>
import LanguageSwitcher from "../LanguageSwitcher";
export default {
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      lng : ''
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },

  },
  computed: {
    lng() {
      return this.$t('menu.home');
    },
  },
}
</script>

<style lang="scss">

.header {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  height: 117px;
  z-index: 3;
  width: 100%;
}

.nav {
  gap: 80px;
}

.router-link {

}

.router-link-active {
  color: red;
}
</style>