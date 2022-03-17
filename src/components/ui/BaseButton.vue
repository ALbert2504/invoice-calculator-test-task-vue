<template>
  <button class="base-button" :class="`base-button--${type}`">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: ['type'],
  };
</script>

<style scoped>
  .base-button {
    padding: 0 6px;
    height: 32px;
    background-color: transparent;
    border: solid 3px #000000;
    box-shadow: 2px 2px 2px 1px #000000;
    font-size: 16px;
    transition: transform .3s ease-in-out, box-shadow .3s ease-in-out;
  }
  .base-button:hover {
    cursor: pointer;
  }
  .base-button:active {
    transform: translateY(1px);
  }

  .base-button--success {
    border: solid 3px #226100;
    box-shadow: 2px 2px 2px 1px #226100;
    color: #226100;
    font-size: 16px;
    transition: transform .3s ease-in-out, box-shadow .3s ease-in-out;
  }
  .base-button--success:active {
    box-shadow: 2px 1px 2px 1px #226100;
  }

  .base-button--danger {
    border: solid 3px #ff0000;
    box-shadow: 2px 2px 2px 1px #ff0000;
    color: #ff0000;
    font-size: 16px;
    transition: transform .3s ease-in-out, box-shadow .3s ease-in-out;
  }
  .base-button--danger:active {
    box-shadow: 2px 1px 2px 1px #ff0000;
  }
</style>