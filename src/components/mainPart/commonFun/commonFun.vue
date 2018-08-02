<template>
  <!-- <div>分类页面</div> -->
  <div class="commonFunBox">
    <!-- <div class="funLink" > -->
      <mt-button type="danger" @click="toMap">Map</mt-button>
    <!-- </div> -->
    <canvas></canvas>
  </div>
</template>
<script>
import commonFunBg from '../../../../static/js/commonFunBg.js'
export default {
  mounted() {
    commonFunBg();
  },
  methods:{
    toMap(){
      this.$router.push({name:'mapPage'})
    }
  }
}
</script>
<style scoped>
  .commonFunBox{
      width: 100%;
      height: 100%;
      position: relative;
  }
  canvas{
      background-color: #25003a;
      position: absolute;
      width: 100%;
      height: 100%;
  }
  button{
      z-index: 5;
      position: absolute;
  }
</style>
