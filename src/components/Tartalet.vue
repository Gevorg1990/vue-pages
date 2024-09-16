<template>
  <div class="tartalet center cake" id="tartalet">
    <h2 class="tartalet__title title">{{ $t('Tartalet.title') }}</h2>
    <ul class="tartalet__list list">
      <li class="tartalet__item item" v-for="(item, idx) in items" :key="item.id" @click="navigateToPage(item.id)">
        <Carousel :images="item.images" />
        <p class="tartalet__item-name item-name">{{ item.name }}</p>
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
        name: i18n.global.t(item.nameKey)
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



}
</style>
