<template>
  <div class="products-table-container">
    <table class="products-table">
      <thead
          class="products-table__head"
          :class="{'products-table__head--border-bottom': !products.length}"
      >
        <tr  class="products-table__row">
          <th class="products-table__heading">
            <input type="checkbox" class="products-table__checkbox" @change="handleSelectAll" :checked="isAllSelected">
          </th>
          <th class="products-table__heading">Product name</th>
          <th class="products-table__heading">Price</th>
          <th class="products-table__heading">Qty</th>
          <th class="products-table__heading">Sum</th>
        </tr>
      </thead>
      <tbody class="products-table__body">
        <ProductItem v-for="product in products" :product="product" :key="product.id" />
        <template v-if="emptyRows > 0">
          <ProductItem v-for="i in emptyRows" :product="null" :key="i" />
        </template>
      </tbody>
      <tfoot class="products-table__foot">
        <tr class="products-table__row">
          <td class="products-table__cell">
            <base-button @click="handleDelete" type="danger">Delete</base-button>
          </td>
          <td class="products-table__cell"></td>
          <td class="products-table__cell"></td>
          <td class="products-table__cell">
            <span class="products-table__sum">
              Total:
            </span>
          </td>
          <td class="products-table__cell">
            <span class="products-table__sum">
              $ {{ productsTotalPrice }}
            </span>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
  import ProductItem from '@/components/ProductItem';
  import BaseButton from "@/components/ui/BaseButton";

  export default {
    components: {
      BaseButton,
      ProductItem,
    },
    methods: {
      handleDelete() {
        if (!this.selectedItems.length) {
          return alert('No selected products.');
        }

        this.$store.dispatch('deleteSelectedItems');
      },
      handleSelectAll(e) {
        console.log(e.target.checked);
        this.$store.dispatch('editAll', e.target.checked);
      },
    },
    computed: {
      products() {
        return this.$store.getters.products;
      },
      productIds() {
        return this.products.map((product) => product.id)
      },
      selectedItems() {
        return this.$store.state.selectedItems;
      },
      productsTotalPrice() {
        return this.$store.getters.products.reduce((accumulator, value) => {
          return accumulator + (+value.price * +value.quantity);
        }, 0);
      },
      isAllSelected() {
        return this.selectedItems.length && this.productIds.every((productId) => this.selectedItems.includes(productId));
      },
      emptyRows() {
        return 10 - this.products.length;
      },
    },
  };
</script>

<style scoped>
  .products-table,
  .products-table__heading {
    border-top: solid 3px #000000;
    border-bottom: none;
  }
  .products-table__body .products-table__row:last-child,
  .products-table__head--border-bottom .products-table__row {
    border-bottom: solid 3px #000000;
  }
  .products-table__heading {
    border-left: solid 3px #000000;
    border-right: solid 3px #000000;
  }
  .products-table__heading:first-child {
    width: 30px;
  }
  .products-table {
    width: 100%;
    border-collapse: collapse;
  }

  .products-table__head .products-table__row {
    background-color: #cccccc;
  }
  .products-table__body .products-table__row:nth-of-type(odd) {
    background-color: #eeeeee;
  }
  .products-table__heading {
    padding: 4px 0;
    text-align: left;
  }
  .products-table__checkbox {
    margin-left: 4px;
  }
  .products-table__foot .products-table__cell {
    padding-top: 8px;
  }
  .products-table__sum {
    font-weight: bold;
  }
</style>