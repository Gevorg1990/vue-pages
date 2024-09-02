<template>
  <div>
    <h1>Item Details</h1>
    <div v-if="item">
      <h2>{{ item.name }}</h2>
      <img :src="item.src" alt="">
      <p>{{ item.des }}</p>
      <!-- You can include more detailed information here -->
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';


export default {
  setup() {
    const route = useRoute();
    const item = ref(null);

    onMounted(() => {
      const itemId = route.params.id;
      const store = useStore();
      const items = store.getters.itemsTartalet;

      item.value = items.find(i => i.id === Number(itemId));
    });

    return {
      item
    };
  }
};
</script>
