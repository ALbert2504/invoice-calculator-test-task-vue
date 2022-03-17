<template>
  <tr v-if="product" class="products-table__row">
    <td class="products-table__cell">
      <input
        type="checkbox"
        :checked="checked"
        :value="product.id"
        :name="product.name"
        class="products-table__checkbox"
        @change="updateSelectedItems"
      >
    </td>
    <td class="products-table__cell">{{ product.name }}</td>
    <td class="products-table__cell">{{ product.price }}</td>
    <td class="products-table__cell">{{ product.quantity }}</td>
    <td class="products-table__cell">{{ product.price * product.quantity }}</td>
  </tr>
  <tr class="products-table__row products-table__row--empty" v-else>
    <td class="products-table__cell"></td>
    <td class="products-table__cell"></td>
    <td class="products-table__cell"></td>
    <td class="products-table__cell"></td>
    <td class="products-table__cell"></td>
  </tr>
</template>

<script>
  export default {
    props: ['product'],
    methods: {
      updateSelectedItems(e) {
        this.$store.dispatch('updateSelectedItems', e.target);
      }
    },
    computed: {
      checked() {
        return this.$store.getters.selectedItems.includes(this.product.id);
      }
    }
  };
</script>

<style scoped>
  .products-table__row--empty {
    height: 26px;
  }
  .products-table__cell {
    border-left: solid 3px #000000;
    border-right: solid 3px #000000;
    padding: 4px 0;
  }
  .products-table__checkbox {
    margin-left: 4px;
  }
</style>