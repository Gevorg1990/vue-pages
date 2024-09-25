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
      iconGroup: require('@/assets/icons/icon-group.svg'),
      icons: [
        require('@/assets/icons/icon-star.svg'),
        require('@/assets/icons/icon-heart.svg'),
        require('@/assets/icons/icon-like.svg'),
        require('@/assets/icons/icon-emoji.svg'),
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
