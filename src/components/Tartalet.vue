<template>
  <div class="tartalet center cake" id="tartalet">
    <h2 class="tartalet__title title">{{ $t('Tartalet.title') }}</h2>
    <ul class="tartalet__list list">
      <li class="tartalet__item item" v-for="item in items" :key="item.id" @click="navigateToPage(item.id)">
        <Carousel :images="item.images" />
        <p class="tartalet__item-name item-name">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Carousel from './Carousel.vue';
import i18n from '/src/i18n.js';

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

    watchEffect(updateItems);

    const navigateToPage = (id) => {
      router.push({ name: 'tartaletcakePage', params: { id } });
    };

    return {
      items,
      navigateToPage
    };
  }
};
</script>
