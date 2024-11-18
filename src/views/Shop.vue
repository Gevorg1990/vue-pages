<template>
  <div class="shop-page">
    <div v-for="(item, index) in items" :key="index" class="shop-item">
      <figure class="shop-item__img-box">
        <img :src="item.images[0].src" alt="Shop Item Image" />
      </figure>
      <p>{{ item.des[0] }}</p>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        const response = await fetch('http://localhost:3000/api/items');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        this.items = await response.json();
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
  },
};

</script>