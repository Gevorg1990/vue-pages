<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="../assets/icons-lng/icon-am.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
