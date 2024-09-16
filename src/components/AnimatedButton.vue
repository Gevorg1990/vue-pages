<template>
  <div class="button pr">
    <label :for="'button'" @click="notifyParentHandler">
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
      iconGroup: require('@/assets/icon-group.svg'),
      icons: [
        require('@/assets/icon-star.svg'),
        require('@/assets/icon-heart.svg'),
        require('@/assets/icon-like.svg'),
        require('@/assets/icon-emoji.svg'),
      ]
    }
  },
  methods: {
    notifyParentHandler() {
      this.notifyParent();
    }
  }
};
</script>
