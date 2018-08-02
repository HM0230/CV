<template>
    <div class="regist" v-show='showRegist'>
        <li> 注册</li>
        <p>
            <span>新用户账户注册</span>
        </p>
        <div>
            <span>帐号</span><input type="text" placeholder="手机号/邮箱/门店会员卡">
        </div>
        <div>
            <span>密码</span><input type="text" placeholder="请输入6-20位易购密码" >
        </div>
        <div>
            <span>确认密码</span><input type="text" placeholder="请输入6-20位易购密码" >
        </div>
        <li class="sub">注册</li>
        <li @click="toLogin()" class="log">登陆</li>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed : {
        ...mapGetters([
            'showRegist'
        ])
    },
    methods:{
        toLogin(){
            this.$store.dispatch('toLogin')
        }
    }
}
</script>
<style lang="less" scoped>
    .regist{
       height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
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
        >div:nth-child(3),>div:nth-child(4),>div:nth-child(5){
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
        >div:nth-child(5){
            span{
                 letter-spacing: 0;
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
    .log{
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

