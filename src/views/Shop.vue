<template>
  <div class="shop-page">
    <div v-for="(item, index) in items" :id="item.id" :key="item.id" class="shop-item">
      <figure class="shop-item__img-box">
        <img :src="item.image" alt="Shop Item Image" />
      </figure>
      <p>{{ item.description }}</p>
      <p>min {{ item.min }}</p>
      <p>max {{ item.max }}</p>
      <p>1 item count is {{item.count}}</p>
      <button @click="deleteItem($event,item.id)" :data-target="item.description">Delete Item</button>
    </div>
  </div>
</template>

<script>
import {useGlobalStore} from "../store/useGlobalStore";

export default {
  setup() {
    // Use the global store
    const globalStore = useGlobalStore();
    return { globalStore }
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    // Fetch all items from the server
    async fetchItems() {
      try {
        const response = await fetch('http://localhost:3000/items');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        this.items = await response.json();
        console.log(this.items); // Log the items after fetching
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },

    async deleteItem($event,itemId) {
      try {

        const itemExists = this.items.some(item => item.id === itemId);

        if (!itemExists) {
          return;
        }

        // Access the clicked button (via event.target)
        const clickedButton = event.target.closest('button'); // Use closest to ensure you get the button element
        const clickedButtonAttr = clickedButton.getAttribute('data-target');

        let targetArray = JSON.parse(localStorage.getItem('data-target'));

        if (Array.isArray(targetArray)) {
          const index = targetArray.indexOf(clickedButtonAttr);
          if (index !== -1) {
            targetArray.splice(index, 1); // Remove 'Malinas' from the array
            console.log('Malinas removed from the array');
          } else {
            console.log('Malinas not found in the array');
          }

          localStorage.setItem('data-target', JSON.stringify(targetArray));
        }

        // Send the delete request to the backend
        const response = await fetch(`http://localhost:3000/items/${itemId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          // If the deletion fails on the backend, log the error message
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to delete item');
        }

        // If deletion is successful, update the local list by removing the item
        console.log('Item deleted successfully');
        this.items = this.items.filter(item => item.id !== itemId); // Remove item from the local array

        this.globalStore.getitemsLangth();

      } catch (error) {
        // Catch and log any errors
        console.error('Error deleting item:', error.message);
      }
    }
  },
};
</script>

<style lang="scss">
.shop-page {
  padding-top: 250px;
}
.shop-item {
  margin-bottom: 30px;
  display: flex;
  gap: 30px;
  width: 100%;

  figure {
    width: 100px;
    height: 100px;
  }
}
</style>