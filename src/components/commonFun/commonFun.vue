<template>
  <!-- <div>分类页面</div> -->
  <div>
    <div class="funLink">
      88888888888888
    </div>
    <canvas></canvas>
  </div>
</template>
<script>
import commonFunBg from '../../../static/js/commonFunBg.js'
export default {
  mounted() {
    commonFunBg();
  },
}
</script>
<style scoped>
  canvas{
     background-color: #25003a;
  }
  .funLink{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    color: white;
  }
</style>
