<template>
  <div class="cart-page">
    <cart-header :itemCount="lineItems.length" />
    <cart-items @updateLineItems="updateLineItems"/>
    <order-summary :lineItems="lineItems" @updateLineItems="updateLineItems" />
  </div>
</template>
<script>

import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

export default {
  name: "Cart",
  data() {
    return {
      itemCount: 0,
      lineItems: []
    }
  },
  components: {
    CartHeader,
    CartItems,
    OrderSummary
  },
  mixins: [],
  computed: {
  },
  methods: {
    updateLineItems (item, isItemRemoved = false, index = -1) {
      if (isItemRemoved) {
        this.lineItems.splice(index, 1)
      } else {
        this.lineItems.push(item)
      }

    }
  }
}

</script>
<style lang="scss">
  @import "../assets/styles/cart/cart.scss";
</style>
