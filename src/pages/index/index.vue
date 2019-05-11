<template>
  <div class="page" id="cart">

    <menu @selectd="selectdAction"></menu>

  </div>
</template>

<script>

import menu from '../../components/index/menu'

export default {

  components: {
    'index-menu': menu
  },

  data() {
    return {
      showIndex: 0
    }
  },

  methods: {
    selectdAction (index) {
      this.showIndex = index;
    }
  },

}
</script>

<style>

</style>
