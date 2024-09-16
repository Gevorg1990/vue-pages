<template>
  <div class="header df a-center j-ctr">
    <LanguageSwitcher />

    <div id="nav" class="nav df a-center">
      <router-link class="router-link fs20" to="/"> {{$t('menu.home')}} </router-link>
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
    // lng() {
    //   return this.$t('menu.home');
    // },
  },
}
</script>

<style lang="scss">

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

}

.router-link-active {
  color: $textColor3;
}
</style>