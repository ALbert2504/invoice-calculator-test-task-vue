import { createStore } from 'vuex';

import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';
import { vuexLocal } from '@/store/plugins';

const store = createStore({
  state() {
    return {
      products: [],
      selectedItems: [],
    };
  },
  mutations,
  actions,
  getters,
  plugins: [vuexLocal.plugin],
});

export default store;