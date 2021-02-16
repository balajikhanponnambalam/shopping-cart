<template>
  <div class="order-summary-details">
    <div class="added-items">
      <div class="list-of-items">
        <span class="items"> Items  {{lineItems.length}}</span>
        <span class="quantity"> Qty </span>
        <span class="Price"> Price </span>
      </div>
      <div class="cart-item" v-for="(item, index) in lineItems" :key="index">
          <div class="cart_item_details">
            <div class="image-name">
              <img class="cart_item_img" :src="item.image" :alt="item.name">
              <span class="cart_item_name">{{item.name}}</span>
              <right-button :className="'remove'" @onRightButtonClick="removeItem(item, index)" label="X"> </right-button>
            </div>
            <div class="quantity-item">
              <right-button :className="'minus'" @onRightButtonClick="removeItem(item, index)" label="-"> </right-button>
              <span class="cart_item_quantity">1</span>
              <right-button :className="'add'" @onRightButtonClick="addItem(item)" label="+"> </right-button>
            </div>
            <span class="cart_item_price">$ {{item.price.actual}}</span>
        </div>
      </div>
    </div>
    <div class="summary">
      <div class="price-details">
        <div class="total-section"> Total </div>
        <div class="item-count"> Item (<span >{{lineItems.length}}</span>) </div>
        <div class="total_product_price">$ {{totalActualAmount}}</div><br>
        <div class="discount">   Discount</div>
        <div class="total_discount">$ {{totalDiscount}}</div>
      </div>
      <div class="order_total"><div class="order_label">Order Total:</div>
        <div class="netamount">$ {{totalNetAmount}}</div>
      </div>
    </div>
  </div>
</template>
<script>

import RightButton from "./RightButton"
import { sumBy as _sumBy } from 'lodash'

export default {
  name: "OrderSummary",
  props: ['lineItems'],
  components: {
    RightButton
  },
  mixins: [],
  computed: {
    totalActualAmount () {
      let total = _sumBy(this.lineItems, (item) => item.price.display)
      return total
    },
    totalNetAmount () {
      let total = _sumBy(this.lineItems, (item) => item.price.actual)
      return total
    },
    totalDiscount () {
      let discount = _sumBy(this.lineItems, (item) => item.discount)
      return discount
    }

  },
  methods: {
    addItem(item) {
      // call the updateLineItems to update all the place(cart and order summary)
      this.$emit("updateLineItems", item)
    },
    removeItem(item, index) {
      // call the updateLineItems to update all the place(cart and order summary)
      let isRemove = true
      this.$emit("updateLineItems", item, isRemove, index)
    }

  }
}
</script>
<style lang="scss">
</style>
