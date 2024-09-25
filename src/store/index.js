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
          count:['700', '800', '1000'],
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
          count:['300', '7000'],
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
            'Cheesecake.item-1.sundry-2',
          ],
          count:['450', '900', '1280'],
          des: [
            'Cheesecake.item-1.description-1',
            'Cheesecake.item-1.description-2',
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
          count:['1600', '200', '1200'],
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
    tartaletCounts(state) {
      return state.itemsTartalet.flatMap(item => item.count);
    },
    itemsCheesecake(state) {
      return state.itemsCheesecake;
    },
    cheesecakeCounts(state) {
      return state.itemsCheesecake.flatMap(item => item.count);
    }
  }
});


export default store;
