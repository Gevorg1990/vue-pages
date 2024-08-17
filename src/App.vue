<template>

    <Header />

    <router-view/>

</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header,
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

</style>
