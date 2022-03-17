const mutations = {
  addProduct(state, payload) {
    state.products.unshift(payload);
  },
  addSelectedItem(state, item) {
    state.selectedItems.push(item);
  },
  removeSelectedItem(state, id) {
    state.selectedItems = state.selectedItems.filter(item => item !== id);
  },
  deleteSelectedItems(state, ids) {
    state.products = state.products.filter((product) => !ids.includes(product.id));
  },
  editAll(state, payload) {
    state.selectedItems = payload;
  }
};

export default mutations;