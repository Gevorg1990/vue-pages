import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      itemsTartalet: [
        { id: 1, nameKey: 'cake.name-1', des: 'cake.description-1', images: [{ src: 'https://picsum.photos/id/1/200/200/'}, { src: 'https://picsum.photos/id/10/200/200/'}] },
        { id: 2, nameKey: 'cake.name-2', des: 'cake.description-2', images: [{ src: 'https://picsum.photos/id/11/200/200/'}, { src: 'https://picsum.photos/id/15/200/200/'}] },
      ],
      itemsCake: [
        { id: 1, name: 'chocolate cake', des: 'delicious chocolate cake', src: 'https://picsum.photos/id/10/200/200/' },
        { id: 2, name: 'vanilla cake', des: 'tasty vanilla cake', src: 'https://picsum.photos/id/11/200/200/' },
        { id: 3, name: 'red velvet cake', des: 'classic red velvet cake', src: 'https://picsum.photos/id/12/200/200/' }
      ]
    };
  },
  getters: {
    itemsTartalet(state) {
      return state.itemsTartalet;
    },
    itemsCake(state) {
      return state.itemsCake;
    }
  }
});


export default store;
