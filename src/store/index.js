import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      itemsTartalet: [
        {
          id: 1,
          nameKey: 'Tartalet.item-1.name',
          sort: [
            'Tartalet.item-1.sundry-1',
            'Tartalet.item-1.sundry-2',
            'Tartalet.item-1.sundry-3',
          ],
          des: [
              'Tartalet.item-1.description-1',
              'Tartalet.item-1.description-2',
              'Tartalet.item-1.description-3'
          ],
          images: [
            { src: 'https://picsum.photos/id/15/600/600/'},
            { src: 'https://picsum.photos/id/20/600/600/'},
            { src: 'https://picsum.photos/id/20/600/600/'}
          ]
        },
        {
          id: 2,
          nameKey: 'Tartalet.item-2.name',
          sort: [
            'Tartalet.item-2.sundry-1',
            'Tartalet.item-2.sundry-2',
          ],
          des: [
              'Tartalet.item-2.description-1',
              'Tartalet.item-2.description-2',
          ],
          images: [
            { src: 'https://picsum.photos/id/43/600/600/'},
            { src: 'https://picsum.photos/id/78/600/600/'},
          ]
        },
      ],

      itemsCheesecake: [
        {
          id: 1,

          nameKey: 'Cheesecake.item-1.name',
          sort: [
            'Cheesecake.item-1.sundry-1',
            'Cheesecake.item-1.sundry-2',
          ],
          des: [
            'Cheesecake.item-1.description-1',
            'Cheesecake.item-1.description-2',
          ],
          images: [
            { src: 'https://picsum.photos/id/20/600/600/'},
            { src: 'https://picsum.photos/id/25/600/600/'},
            { src: 'https://picsum.photos/id/95/600/600/'}
          ]
        },
        {
          id: 2,
          nameKey: 'Cheesecake.item-2.name',
          sort: [
            'Cheesecake.item-2.sundry-1',
            'Cheesecake.item-2.sundry-2',
          ],
          des: [
            'Cheesecake.item-2.description-1',
            'Cheesecake.item-2.description-2',
          ],
          images: [
            { src: 'https://picsum.photos/id/10/600/600/'},
            { src: 'https://picsum.photos/id/15/600/600/'},
          ]
        },
      ]
    };
  },
  getters: {
    itemsTartalet(state) {
      return state.itemsTartalet;
    },
    itemsCheesecake(state) {
      return state.itemsCheesecake;
    }
  }
});


export default store;
