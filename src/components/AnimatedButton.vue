<template>
  <div class="button pr">
    <label :for="'button'" @click="notifyParent">
      <div class="button_inner q">
        <img :src="iconGroup" alt="icon-group">
         <div class="b_l_quad">
          <div
              class="button_spots"
              v-for="index in 52"
              :key="index"
          >
            <img :src="icons[index % icons.length]" alt="icon" class="icon"/>
          </div>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    notifyParent: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      iconGroup : require('@/assets/icon-group.svg'),
      icons: [
        require('@/assets/icon-star.svg'),
        require('@/assets/icon-heart.svg'),
        require('@/assets/icon-like.svg'),
        require('@/assets/icon-emoji.svg'),
      ]
    }
  },
  methods: {
    notifyParent() {
      this.notifyParent();
    }
  }
};
</script>

<!--<style scoped>-->
<!--a {-->
<!--  color: white;-->
<!--  padding-top: 20px;-->
<!--  font-size: 10px;-->
<!--  opacity: 0.6;-->
<!--  position: relative;-->
<!--  top: 10px;-->
<!--  transition: all 0.3s;-->
<!--  font-weight: 100;-->
<!--  text-decoration: none;-->
<!--}-->
<!--a:hover {-->
<!--  opacity: 1;-->
<!--}-->
<!--i.l {-->
<!--  margin-right: 3px;-->
<!--}-->
<!--input {-->
<!--  display: none;-->
<!--}-->

<!--input:checked + label .button_inner {-->
<!--  background: transparent;-->
<!--  transform: rotate(90deg);-->
<!--  width: 100px;-->
<!--  border-radius: 100px;-->
<!--  box-shadow: 0px 0px 0px 440px rgba(0, 0, 0, 0);-->
<!--  animation: finalbox 0.4s 4.42s cubic-bezier(0.39, 2.01, 0.27, 0.75) forwards;-->
<!--}-->

<!--input:checked + label i.l {-->
<!--  left: 14px;-->
<!--  opacity: 1;-->
<!--  top: 11px;-->
<!--  animation: down 1s 0.25s infinite, final 0.2s 4s forwards;-->
<!--}-->

<!--input:checked + label .tick {-->
<!--  position: absolute;-->
<!--  left: 2px;-->
<!--  right: 0;-->
<!--  transform: scale(0) rotate(-90deg);-->
<!--  color: #00c1fc;-->
<!--  top: 11px;-->
<!--  margin: auto;-->
<!--  font-size: 22px;-->
<!--  animation: tick 0.3s 4.7s forwards;-->
<!--}-->

<!--.button_spots {-->
<!--  opacity: 1;-->
<!--}-->

<!--.button {-->
<!--  position: absolute;-->
<!--  top: 50%;-->
<!--  left: 0;-->
<!--  right: 0;-->
<!--  margin: auto;-->
<!--  text-align: center;-->
<!--  height: 360px;-->
<!--  width: 200px;-->
<!--  transform: translateY(-50%);-->
<!--}-->

<!--h1 {-->
<!--  font-weight: 100;-->
<!--  color: white;-->
<!--  font-size: 24px;-->
<!--  margin: 0;-->
<!--  text-transform: uppercase;-->
<!--}-->

<!--h2 {-->
<!--  font-weight: 100;-->
<!--  color: #00c4ff;-->
<!--  opacity: 1;-->
<!--  font-size: 14px;-->
<!--  margin: 4px 0px 0px 0px;-->
<!--}-->

<!--.b_l_quad .button_spots {-->
<!--  position: absolute;-->
<!--  border-radius: 100px;-->
<!--  background: green;-->
<!--  opacity: 0;-->
<!--  animation: opacity 1s;-->
<!--}-->

<!--.button_inner {-->
<!--  border-radius: 2px;-->
<!--  position: absolute;-->
<!--  width: 200px;-->
<!--  height: 50px;-->
<!--  left: 0;-->
<!--  right: 0;-->
<!--  top: 50%;-->
<!--  margin: auto;-->
<!--  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.04);-->
<!--  font-weight: 100;-->
<!--  font-size: 12px;-->
<!--  cursor: pointer;-->
<!--  border: 2px solid #ffffff;-->
<!--  color: white;-->
<!--  text-align: center;-->
<!--  transition: all 0.3s, box-shadow 0.2s, transform 0.2s 0.2s;-->
<!--}-->

<!--.button_inner:hover {-->
<!--  color: #2c3940;-->
<!--  background: white;-->
<!--  box-shadow: 0px 17px 18px -14px rgba(0, 0, 0, 0.08);-->
<!--}-->

<!--span.t {-->
<!--  position: relative;-->
<!--  top: 6px;-->
<!--  opacity: 1;-->
<!--  left: -10px;-->
<!--  transition: left 0.4s 0.1s;-->
<!--}-->

<!--i.l {-->
<!--  position: relative;-->
<!--  left: -19px;-->
<!--  top: 20px;-->
<!--  color: #00c4ff;-->
<!--  font-size: 25px;-->
<!--  opacity: 0;-->
<!--  transition: left 0.3s 0s, top 0.3s 0s, opacity 0.3s 0s;-->
<!--}-->

<!--.button_inner:hover i.l {-->
<!--  top: 12px;-->
<!--  opacity: 1;-->
<!--}-->

<!--@keyframes opacity {-->
<!--  from {-->
<!--  }-->
<!--  to {-->
<!--    opacity: 0;-->
<!--  }-->
<!--}-->

<!--@keyframes rotate {-->
<!--  from {-->
<!--    opacity: 0.8;-->
<!--  }-->
<!--  to {-->
<!--    transform: rotate(360deg);-->
<!--    opacity: 0.8;-->
<!--  }-->
<!--}-->

<!--@keyframes down {-->
<!--  from {-->
<!--    left: 10px;-->
<!--  }-->
<!--  to {-->
<!--    left: 57px;-->
<!--  }-->
<!--}-->

<!--@keyframes finalbox {-->
<!--  to {-->
<!--    width: 50px;-->
<!--  }-->
<!--}-->

<!--@keyframes tick {-->
<!--  to {-->
<!--    transform: scale(1) rotate(-90deg);-->
<!--  }-->
<!--}-->
<!--</style>-->
