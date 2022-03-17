<template>
  <form class="add-form" @submit.prevent="handleSubmit">
    <input
        v-model.trim="product.name"
        class="add-form__input add-form__input--large"
        type="text"
        name="name"
        placeholder="Product name"
    >
    <input
        v-model.trim.number="product.price"
        class="add-form__input add-form__input--small"
        type="number"
        min="0"
        name="price"
        placeholder="Price"
        @keydown="removeLetters"
    >
    <input
        v-model.trim.number="product.quantity"
        class="add-form__input add-form__input--small"
        type="number"
        min="0"
        name="quantity"
        placeholder="Qty"
        @keydown="removeLetters"
    >
    <base-button type="success" class="add-form__btn">Add</base-button>
  </form>
</template>

<script>
  import { isFormItemValid } from '@/helpers';
  import BaseButton from "@/components/ui/BaseButton";

  export default {
    components: {BaseButton},
    data() {
      return {
        product: {
          name: '',
          price: '',
          quantity: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        if (!Object.entries(this.product).every(isFormItemValid)) {
          return alert('Please fill all the fields correctly.');
        }

        this.$store.dispatch('addProduct', this.product);
        this.product.name = '';
        this.product.price = '';
        this.product.quantity = '';
      },
      removeLetters(e) {
        // Excluding 'e' and '-' signs
        if (e.keyCode === 69 || e.keyCode === 109) {
          e.preventDefault();
        }
      },
    },
  };
</script>

<style scoped>
  .add-form {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;
  }
  .add-form__input {
    width: 100%;
    padding: 4px 4px;
    font-size: 16px;
    font-weight: 500;
    border: solid 3px #000000;
    margin-right: 16px;
  }
  .add-form__input--large {
    max-width: 400px;
  }
  .add-form__input--small {
    max-width: 80px;
  }
  .add-form__btn {
    margin-left: auto;
  }
</style>