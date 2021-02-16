<template>
  <div class="display-button" :class="className">
    <button
      class="btn-primary"
      @click="rightButtonClick"
    >{{label}}</button>
  </div>
</template>

<script>
export default {
  name: 'RightButton',
  props: ['label', 'className'],
  data () {
    return {
      clicked: false
    }
  },
  methods: {
    rightButtonClick () {
      // To prevent multiple clicks on the button
      this.$emit('onRightButtonClick')
    }
  }
}
</script>

<style>
</style>


