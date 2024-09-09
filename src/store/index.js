import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      itemsTartalet: [
        {
          id: 1,
          nameKey: 'cake-1.name',
          n: [
            'cake-1.n1',
            'cake-1.n2',
            'cake-1.n3',
          ],
          des: [
              'cake-1.description-1',
              'cake-1.description-2',
              'cake-1.description-3'
          ],
          images: [
            { src: './tartlets-img/t1.jpg'},
            { src: 'https://picsum.photos/id/15/200/200/'},
            { src: 'https://picsum.photos/id/20/200/200/'}
          ]
        },
        {
          id: 2,
          nameKey: 'cake-2.name',
          n: [
            'cake-2.n1',
            'cake-2.n2',
          ],
          des: [
              'cake-2.description-1',
              'cake-2.description-2',
          ],
          images: [
            { src: 'https://picsum.photos/id/43/200/200/'},
            { src: 'https://picsum.photos/id/78/200/200/'},
          ]
        },
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
