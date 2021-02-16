<template>
  <div id="app">
    <!-- after application loading into the DOM mount cart.vue -->
    <cart />

  </div>
</template>

<script>
import Cart from "./cart/Cart";
export default {
  name: 'app',
  components: {
    Cart
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
