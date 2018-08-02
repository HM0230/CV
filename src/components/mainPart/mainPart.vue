<template>
    <div class="mainPart" >
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <div id="bottomNav">
            <div>
                <router-link to="/">
                    <i class="iconfont">&#xe743;</i>
                    <p>基础css</p>
                </router-link>
            </div>
            <div>
                <router-link to="/commonFun">
                    <i class="iconfont">&#xe62d;</i>
                    <p>常见功能</p>
                </router-link>
            </div>
            <div>
                <router-link to="/list">
                    <i class="iconfont">&#xe61b;</i>
                    <p>项目经验</p>
                </router-link>
            </div>
            <div>
                <router-link to="/shoppingCar">
                    <i class="iconfont">&#xe62b;</i>
                    <p>其他</p>
                </router-link>
            </div>
            <div>
                <router-link to="/mine">
                    <i class="iconfont">&#xe625;</i>
                    <p>我的简历</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
   computed:{
       ...mapGetters([
       ])
   }
}
</script>
<style lang="less" scoped>
    .mainPart{
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        >div:nth-child(2){
            border-top: 0.01rem solid  rgb(219, 219, 218);
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 1rem;
            display: flex;
            flex-direction: row;
            div{
                width: 100%;
                a{
                    text-align: center;
                    // display: flex;
                    // flex-direction: column;
                    // justify-content: space-between;
                    padding-bottom: 0.05rem;
                    display: block;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    svg,i{
                        font-size:0.5rem;
                        margin-top: 0.11rem;
                        width: 100%;
                        height: 0.5rem;
                    }
                }
            }
        }
    }
    .router-link-exact-active{
        color: orange;
    }
    router-view{
        height: 6.80rem;
        border: 0.01rem solid;
    }
    #bottomNav{
        background-color:white;
    }
</style>
