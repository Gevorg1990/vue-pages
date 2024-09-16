<template>
  <div class="cheesecake center cake" id="cheesecake">
    <h2 class="cheesecake__title title">{{ $t("Cheesecake.title") }}</h2>
    <ul class="cheesecake__list list">
      <li class="cheesecake__item item" v-for="(item, idx) in items" :key="item.id" @click="navigateToPage(item.id)">
        <Carousel :images="item.images" />
        <p class="cheesecake__item-name item-name">{{ item.name }}</p>
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
      items.value = store.getters.itemsCheesecake.map(item => ({
        ...item,
        name: i18n.global.t(item.nameKey)
      }));
    };

    // Use watchEffect to reactively update items when the language changes
    watchEffect(updateItems);

    const navigateToPage = (id) => {
      router.push({ name: 'cheesecakePage', params: { id } });
    };

    return {
      items,
      navigateToPage
    };
  }
};
</script>

<style lang="scss" >
.cheesecake {


}
</style>
