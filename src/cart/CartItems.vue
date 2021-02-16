<template>
  <div class="list-of-products">
    <div class="product" v-for="(item,index) in lineItems" :key="index">
        <div class="discount">{{item.discount}}% off</div>
        <img class="item-image" :src="item.image">
        <div class="item-description">
          <div class="item-name">{{item.name}}</div>
          <div class="price">
            <strike><span class="item-actual-price"> $ {{item.price.display}}</span></strike> <span class="item-final-price"> {{item.price.actual}}  </span></div>
          <!-- <button class="btn btn--primary" data-keshav-data="Samsung Series 4" onclick="addToCart(this)">Add To Cart</button> -->
          <right-button @onRightButtonClick="addtoCart(item)" label="Add To Cart"> </right-button>
        </div>
    </div>
  </div>
</template>
<script>
import { cartStubData } from "./constants";
import axios from 'axios';
import RightButton from "./RightButton"

export default {
  name: "CartItems",
  data() {
    return {
      lineItems: {}
    }
  },
  components: {
    RightButton
  },
  mixins: [],
  computed: {
  },
  mounted() {
    // used the stub data
    this.lineItems = cartStubData.items


    // var url = "https://api.jsonbin.io/b/5f6b6cd665b18913fc51f71f"
    // return new Promise(function (resolve, reject) {
    //   axios.get(url).then(response => {
    //     resolve(response.data);
    //   }).catch((err) => {
    //     reject(err)
    //   })
    // })

  },
  methods: {
    addtoCart(item) {
      this.$emit("updateLineItems", item)
    }
  }
}

</script>
<style lang="scss">
</style>
