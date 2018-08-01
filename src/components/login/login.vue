<template>
  <div class="login">
      <li> 登录</li>
      <p>
        <span>帐号密码登录</span>
        <span>手机验证登录</span>
      </p>
      <div>
        <span>帐号</span><input type="text" placeholder="手机号/邮箱/门店会员卡" ref="phoneNum">
      </div>
      <div>
        <span>密码</span><input type="text" placeholder="请输入6-20位易购密码" ref="password">
      </div>
      <li class="sub" @click="loginIn()">登录</li>
      <li @click="toRegist()" class="reg">快速注册</li>
  </div>
</template>

<script>
export default {
  components:{
  },
  methods:{
    toRegist(){
      this.$store.dispatch('toRegist');
    },
    loginIn(){
      let phoneNum = this.$refs.phoneNum.value;
      let password = this.$refs.password.value;
      let dd={
        phoneNum:phoneNum,
        password:password
      } 
      this.$store.dispatch('loginIn',dd);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .login{
    >li:first-child{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-size: 0.28rem;
      border-bottom: 0.01rem solid #efefef;
    }
    >P:nth-child(2){
      display: flex;
      justify-content: space-around;
      font-size: 0.28rem;
      height: 1rem;
      line-height: 1rem;
    }
    >div:nth-child(3),>div:nth-child(4){
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.28rem;
      border-bottom: 0.01rem solid #efefef;
      span{
        padding:0 0.3rem 0 0.5rem;
        letter-spacing:0.3rem; 
      }
    }
  }
  input{ 
    border:none; 
  }
  input:focus {
    outline:none;
  }
  .sub{
    width: 90%;
    margin-left: 5%;
    font-size: 0.3rem;
    border-radius:0.1rem;
    color: white;
    text-align: center;
    margin-top: 1rem;
    line-height: 0.8rem;
    height: 0.8rem;
    background: orange;
  }
  .reg{
    width: 2rem;
    height: 0.5rem;
    border-radius:0.1rem;
    border: 0.01rem solid orange;
    margin:1.3rem auto;
    text-align: center;
    line-height: 0.5rem;
    color: orange;
    font-size: 0.24rem;
  }
</style>
