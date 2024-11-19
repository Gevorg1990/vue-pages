<template>
  <base href="http://localhost:8081/">
<!--  <div style="background-image: url('./test4.svg'); background-color: #211103; background-repeat: repeat-y; min-height: 100vh">-->
<div style="background-color: #211103; background-repeat: repeat-y; min-height: 100vh">
  <Header />

  <router-view/>
</div>

<!--  </div>-->


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

  /* CSS for falling animation */


</style>
