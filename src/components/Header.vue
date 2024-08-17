<template>
  <div class="header j-spc-btwn">
    <div id="nav" class="df">
      <router-link to="/">{{ $t('message.home') }}</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">test</router-link> |
    </div>

    <LanguageSwitcher />
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
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
}

.router-link-active {
  color: red;
}
</style>