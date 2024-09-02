<template>
  <div class="tartalet center" id="tartalet">
    <h2 class="tartalet__title">test tartalet</h2>
    <ul>
      <li v-for="(item, idx) in items" :key="item.id" @click="navigateToPage(item.id)">
        <Carousel :images="item.images" />
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Carousel from './Carousel.vue';
import i18n from '/src/i18n.js'; // Adjust the path to where your i18n instance is defined

export default {
  components: {
    Carousel,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const items = ref([]);

    const updateItems = () => {
      items.value = store.getters.itemsTartalet.map(item => ({
        ...item,
        name: i18n.global.t(item.nameKey)  // Translate dynamically
      }));
    };

    // Use watchEffect to reactively update items when the language changes
    watchEffect(updateItems);

    const navigateToPage = (id) => {
      router.push({ name: 'ItemPage', params: { id } });
    };

    return {
      items,
      navigateToPage
    };
  }
};
</script>

<style lang="scss" scoped>
.tartalet {
  &.center {
    padding: 60px 30px;
  }

  &__title {
    font-size: 32px;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    gap: 40px;
  }
}
</style>
