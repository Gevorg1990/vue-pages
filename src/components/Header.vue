<template>
  <div class="header df a-center j-ctr">
    <LanguageSwitcher />

    <div id="nav" class="nav df a-center">
      <router-link class="router-link fs20" to="/vue-pages">home</router-link>
      <router-link class="router-link fs20" to="/about">About</router-link>

      <img src="../../public/logo.svg" alt="logo">

      <router-link class="router-link fs20" to="/test">test</router-link>
      <router-link class="router-link fs20" to="/test2">test2</router-link>
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

    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },

  }
}
</script>

<style lang="scss">

.header {
  position: absolute;
  left: 50%;
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