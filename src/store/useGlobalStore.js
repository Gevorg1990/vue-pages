import { defineStore } from 'pinia';
import { ref, onBeforeMount } from 'vue';

export const useGlobalStore = defineStore('global', () => {

    const items = ref([]);        // Initialize the items array
    const itemCount = ref(0);     // Initialize the item count

    // Fetch items from the API
    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:3000/items');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Fetch the items and update the store state
            items.value = await response.json();

            // Update the global item count with the length of the items array
            itemCount.value = items.value.length;

        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    // Lifecycle hook: fetch items automatically when the store is created
    onBeforeMount(() => {
        fetchItems(); // Automatically fetch items when the store is initialized
    });


    const getitemsLangth = () => {
        fetchItems();
    }

    return { items, itemCount, fetchItems, getitemsLangth };
});
