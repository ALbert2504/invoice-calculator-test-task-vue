<template>
  <div class="container">
    <TheHeader />
    <AddForm />
    <ProductsTable />
  </div>
</template>

<script>
  import TheHeader from './components/layout/TheHeader';
  import AddForm from './components/AddForm';
  import ProductsTable from './components/ProductsTable';

  export default {
    components: {
      TheHeader,
      AddForm,
      ProductsTable,
    },
  };
</script>

<style>
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-family: Helvetica, sans-serif;
  }
  button, input {
    outline: none;
  }

  .container {
    max-width: 768px;
    margin: 0 auto;
    padding: 0 12px;
  }
</style>