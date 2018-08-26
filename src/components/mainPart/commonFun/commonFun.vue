<template>
  <!-- <div>分类页面</div> -->
  <div class="commonFunBox">
    <!-- <div class="funLink" > -->
      <!-- <mt-button type="danger" @click="toMap">Map</mt-button> -->
        <x-button mini plain type="primary" @click.native="toMap">Map1</x-button>
        <x-button mini plain type="primary" @click.native="toMap">Map2</x-button>
        <x-button mini plain type="primary" @click.native="toIm">im</x-button>
        <x-button mini plain type="primary" >picture</x-button>
        <x-button mini plain type="primary" @click.native="toBarcode">二维码识别</x-button>
        <x-button mini plain type="primary" @click.native="toAuthLogin">三方登录</x-button>
        <x-button mini plain type="primary" @click.native="toShare">三方分享</x-button>        
        <x-button mini plain type="primary" @click.native="toPay">三方支付</x-button>
        <x-button mini plain type="primary" @click.native="imgView">图片预览</x-button>
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
    },
    toBarcode(){
      this.$router.push({name:'barcode'})
    },
    toPay(){
      this.$router.push({name:'payment'})
    },
    toAuthLogin(){
      this.$router.push({name:'oauthLogin'})
    },
    toShare(){
      this.$router.push({name:'share'})
    },
    imgView(){
      
    },
    toIm(){
      this.$router.push({name:'imNav'})
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
