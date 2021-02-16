<template>
  <div class="cart-header">
    <div class="cart-title">
      <div class="title">
         All Items
      </div>
      <div class="cart-added-item">
        Item {{itemCount}} is Added to Cart
      </div>
    </div>
  </div>
</template>
<script>

import Cart from "./CartHeader";
export default {
  name: "CartHeader",
  props: ['itemCount'],
  data() {
    return {

    }
  },
  components: {
  },
  mixins: [],
  computed: {
  }
}
</script>
<style lang="scss">
</style>
