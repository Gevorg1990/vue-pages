<template>
  <div class="wishlist">
    <div v-for="(item, index) in items" :id="item.id" :key="item.id" class="wishlist__item">
      <figure class="wishlist__item-img-box">
        <img :src="item.image" alt="Shop Item Image" />
      </figure>
      <p>{{ item.description }}</p>
      <p>min {{ item.min }}</p>
      <p>max {{ item.max }}</p>
      <p>1 item count is {{item.count}}</p>
      <div class="pr">
        <button class="wishlist__item-delete-btn animate-btn" @click="deleteItem($event,item.id)" :data-target="item.description">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M13.2798 13.6799V27.8C13.2798 28.3522 13.7275 28.8 14.2798 28.8H25.7198C26.2721 28.8 26.7198 28.3522 26.7198 27.8V13.6799M16.6398      17.5341V25.5388M20.3731 17.5341V25.5388M23.7331 17.5341V21.5364C23.7331 23.0994 23.7331 23.9758 23.7331 25.5388" stroke="#F30F0F"/>
            <rect x="10.8999" y="11.5117" width="18.2" height="1.88001" rx="0.940003" stroke="#F30F0F"/>
            <rect x="15.3979" y="9.30005" width="8.6" height="1.88001" rx="0.940003" stroke="#F30F0F"/>
          </svg>
        </button>
      </div>

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
.wishlist {
  padding-top: 250px;
}
.wishlist__item {
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