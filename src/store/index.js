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
            // { src: './tartlets-img/t1.jpg'},
            { src: 'https://picsum.photos/id/15/200/200/'},
            { src: 'https://picsum.photos/id/20/200/200/'}
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
            { src: 'https://picsum.photos/id/43/200/200/'},
            { src: 'https://picsum.photos/id/78/200/200/'},
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
            { src: 'https://picsum.photos/id/20/200/200/'},
            { src: 'https://picsum.photos/id/25/200/200/'},
            { src: 'https://picsum.photos/id/95/200/200/'}
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
            { src: 'https://picsum.photos/id/10/200/200/'},
            { src: 'https://picsum.photos/id/15/200/200/'},
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
