<template>
  <!-- <div>分类页面</div> -->
  <div class="commonFunBox">
    <!-- <div class="funLink" > -->
      <!-- <mt-button type="danger" @click="toMap">Map</mt-button> -->
        <x-button mini plain type="primary" @click.native="toMap">Map1</x-button>
        <x-button mini plain type="primary" @click.native="toMap">Map2</x-button>
        <x-button mini plain type="primary" >im</x-button>
        <x-button mini plain type="primary" >picture</x-button>
        <x-button mini plain type="primary" >QQ</x-button>
        <x-button mini plain type="primary" >wechat</x-button>
        <x-button mini plain type="primary" >sina</x-button>
        <x-button mini plain type="primary" >barcode</x-button>
        <x-button mini plain type="primary" >wxpay</x-button>
        <x-button mini plain type="primary" >alipay</x-button>
    <!-- </div> --> 
    <canvas></canvas>
  </div>
</template>
<script>
import commonFunBg from '../../../../static/js/commonFunBg.js'
import { XButton } from 'vux'
export default {
  components:{
    XButton
  },
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
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
  }
  button{
      z-index: 5;
      float: left;
  }
  .weui-btn + .weui-btn {
    margin-top: 0.2rem;
    margin-left: 0.2rem;
  }
  .weui-btn{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
  }
</style>
