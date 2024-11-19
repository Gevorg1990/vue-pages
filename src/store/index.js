import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      itemsTartalet: [
        {
          id: 1,
          nameKey: 'Tart.item-1.name',
          sort: [
            'Tart.item-1.sundry-1',
            'Tart.item-1.sundry-2',
            'Tart.item-1.sundry-3',
          ],
          min: [
              4,5,6
          ],

          max: [
              30,30
          ],
          count:['1000', '800', '650'],
          des: [
              'Tart.item-1.description-1',
              'Tart.item-1.description-2',
              'Tart.item-1.description-3'
          ],
          images: [
            { src: '/avatars-img/avatar1.png'},
            { src: 'https://picsum.photos/id/20/600/600/'},
            { src: 'https://picsum.photos/id/20/600/600/'}
          ]
        },
        {
          id: 2,
          nameKey: 'Tart.item-2.name',
          min: [
            20,30
          ],
          max: [
             10,20
          ],
          sort: [
            'Tart.item-2.sundry-1',
            'Tart.item-2.sundry-2',
          ],
          count:['300', '7000'],
          des: [
              'Tart.item-2.description-1',
              'Tart.item-2.description-2',
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
