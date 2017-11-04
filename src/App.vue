<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang='scss'>
  @import './theme/style';

  #app {
    margin-top: $base-line-height * 4;
  }
</style>
