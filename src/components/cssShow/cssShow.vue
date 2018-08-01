<template>
    <div>
        <div class="homepage" id="homepage" ref="homePage">
            <div>
                <header>
                    
                </header>
                <div class="main">
            <!-- 轮播图	 -->
                    <div class="ad">
                        <div class="swiper-container" id="swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,k) in swiperImg" :key="k">
                                    <figure class="wp-avatar banner">
                                        <img v-cloak :src="item"/>
                                    </figure>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
            <!-- 购物分类导航 -->
                    <div class="guid">
                        <div class="guid01">
                            <div v-for="(v,k) in middlePart" :key="k">
                                <img :src="v.pic" alt="">
                                <span>{{v.tit}}</span>
                            </div>
                        </div>
                    </div>
            <!-- 特卖模块 -->
                    <div class="discount">
                        <div></div>
                        <div class="discount_pic">
                            <div>
                                <img src="../../../static/img/discount1.png">
                                <p>・属于你的特卖</p>
                            </div>
                            <div class="discount_pic_bottom">
                                <p>服饰</p>
                                <img src="../../../static/img/discount3.jpg" alt="">
                                <p>1.3折起</p>
                            </div>
                            <div class="discount_pic_bottom">
                                <p>母婴</p>
                                <img src="../../../static/img/discount4.jpg" alt="">
                                <p>5折起</p>
                            </div>
                        </div>
                        <div></div>
                    </div>	
            <!-- 掌上抢模块 -->
                    <div class="lasttime">
                        <div class="lasttimeleft">
                            <div class="secondkill">
                                <img src="../../../static/img/guid11.png" alt="">
                            </div>
                        </div>
                    </div>
            <!-- 秒杀轮播图 -->
                    <div class="swiper-container2 gallery-kill">
                        <div class="swiper-wrapper swiperTwo">
                            <div class="swiper-slide">
                                <div class="gallery-kill-img">
                                    <img src="../../../static/img/14.jpg" alt="">
                                </div>
                                <div class="price">
                                    <p class="currentprice red">¥500</p>
                                    <p class="oldprice">¥600</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="gallery-kill-img">
                                    <img src="../../../static/img/15.jpg" alt="">
                                </div>
                                <div class="price">
                                    <p class="currentprice red">¥100</p>
                                    <p class="oldprice">¥200</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="gallery-kill-img">
                                    <img src="../../../static/img/16.jpg" alt="">
                                </div>
                                <div class="price">
                                    <p class="currentprice red">¥299</p>
                                    <p class="oldprice">¥499</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="gallery-kill-img">
                                    <img src="../../../static/img/17.jpg" alt="">
                                </div>
                                <div class="price">
                                    <p class="currentprice red">¥399</p>
                                    <p class="oldprice">¥699</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="gallery-kill-img">
                                    <img src="../../../static/img/18.jpg" alt="">
                                </div>
                                <div class="price">
                                    <p class="currentprice red">¥777</p>
                                    <p class="oldprice">¥999</p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="gallery-kill-img">
                                    <img src="../../../static/img/19-1.jpg" alt="">
                                </div>
                                <div class="price">
                                    <p class="currentprice red">¥333</p>
                                    <p class="oldprice">¥888</p>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>	
                    <div class="adpic">
                        <img src="../../../static/img/20.jpg" alt="">
                    </div>
            <!-- 闪购 -->
                    <div  class="shopping">
                            <div class="shoppingtop">
                                <div class="shoppinglefttop">
                                    <p class="shoppinglefttop-1">闪购</p>
                                    <p class="shoppinglefttop-2">通通1块钱</p>
                                    <div class="shoppinglefttop-img">
                                        <img src="../../../static/img/21.jpg" alt="">
                                    </div>
                                </div>
                                <div class="shoppingrighttop shoppinglefttop"	>
                                    <p class="shoppinglefttop-1">发现好货</p>
                                    <p class="shoppinglefttop-2">发现品质生活</p>
                                    <div class="shoppinglefttop-img">
                                        <img src="../../../static/img/22.jpg" alt="">
                                    </div>
                                </div>		
                            </div>
                            <div class="shoppingfoot">
                                <div class="shoppingleftfoot">
                                    <p class="shoppingleftfoot-1">排行榜</p>
                                    <p class="shoppingleftfoot-2">实时热卖尖货</p>
                                    <div class="shoppingleftfoot-img">
                                        <img src="../../../static/img/23.jpg" alt="">
                                    </div>
                                </div>
                                <div class="shoppingrightfoot">
                                    <div class="shoppingrightfootl">
                                        <p class="shoppingrightfootl-1">会买专辑</p>
                                        <p class="shoppingrightfootl-2">教你买买买</p>
                                        <div class="shoppingrightfootl-img">
                                            <img src="../../../static/img/24.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="shoppingrightfootr">
                                        <p class="shoppingrightfootr-1">新品首发</p>
                                        <p class="shoppingrightfootr-2">新品享免费</p>
                                        <div class="shoppingrightfootr-img">
                                            <img src="../../../static/img/25.jpg" alt="">
                                        </div>
                                    </div>
                                </div>		
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import a from '../../../static/img/bg1.jpg'
import b from '../../../static/img/bg2.jpg'
import c from '../../../static/img/bg3.jpg'
import d from '../../../static/img/bg4.jpg'
import e from '../../../static/img/bg5.jpg'
import f from '../../../static/img/bg6.jpg'
import g from '../../../static/img/bg7.jpg'
import guid01 from '../../../static/img/guid1.png'
import guid02 from '../../../static/img/guid2.png'
import guid03 from '../../../static/img/guid3.png'
import guid04 from '../../../static/img/guid4.png'
import guid05 from '../../../static/img/guid5.png'
import guid06 from '../../../static/img/guid6.png'
import guid07 from '../../../static/img/guid7.png'
import guid08 from '../../../static/img/guid8.png'
import guid09 from '../../../static/img/guid9.png'
import guid010 from '../../../static/img/guid10.png'
import {mapGetters} from 'vuex'
import BScroll from 'better-scroll'
export default {
    computed:{
    },
    data(){
        return {
            swiperImg:[a,b,c,d,e,f,g],
            guid01:guid01,
            middlePart:[
                {pic:guid01,tit:'生活电器'},
                {pic:guid02,tit:'爆款手机'},
                {pic:guid03,tit:'赚钱'},
                {pic:guid04,tit:'身边苏宁'},
                {pic:guid05,tit:'会员专享'},
                {pic:guid06,tit:'服饰'},
                {pic:guid07,tit:'生活超市'},
                {pic:guid08,tit:'大聚惠'},
                {pic:guid09,tit:'红孩子母婴'},
                {pic:guid010,tit:'更多'},
            ]
        }
    },
    mounted(){
        // console.log($("#bottomNav").height())
        // var win=$(window).height()-$("#bottomNav").height()+'px';
        // $("#homepage").height(win);
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            speed: 600,
            autoplay: 2000,
            onTouchEnd: function() {
                swiper.startAutoplay()
            }
        });
        var swiper = new Swiper('.swiper-container2', {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: true,
            speed: 600,
            autoplay: 2000,
        });
        this.$nextTick( () => {
            if( !this.homePageSCroll ){
                this.homePageSCroll = new BScroll( this.$refs.homePage ,{
                    click:true
                });
            }else{
                this.homePageSCroll.refresh();
            }
        });
    }
}
</script>
<style lang="less" scoped>
    .homepage{
        background: white;
        position: absolute;
        top: 0;
        bottom: 1rem;
        width: 100%;
        overflow: hidden;
    }
    /*轮播图*/
    .swiper-container{
        .swiper-wrapper img{
            width: 100%;
            height:3.5rem;
        }
    }
    /*购物分类导航*/
    .guid{
        width: 100%;
        display: flex;
        flex-direction: column;
        >div{
            >div{
                width: 20%;
                float: left;
                display: flex;
                flex-direction: column;
                font-size: 0.3rem;
                text-align: center;
                margin-bottom: 0.16rem;
                img{
                    width: 0.7rem;
                    height: 0.7rem;
                    z-index: 10;
                    margin: 0.16rem auto;
                }
                span{
                    font-size: 0.25rem;
                }
            }
        }
    }
    /*特卖模块*/
    .discount{
        >div:first-child{
            width: 100%;
            height: 0.3rem;
            background: #e5e5e5;
        }
        >div:last-child{
            width: 100%;
            height: 0.3rem;
            background: #e5e5e5;
        }
    }
    .discount_pic{
        width: 100%;
        height: 3rem;
        background: url(../../../static/img/discount2.jpg);
        background-size: cover;
        position: relative;
        >div:first-child{
            height: 0.5rem;
            position: relative;
            img{
                width: 1.5rem;
                height: 0.34rem;
                padding-top: 0.08rem;
            }
            p{
                position: absolute;
                font-size: 0.12rem;
                left: 1.5rem;
                bottom: 0.14rem;
            }
        }
        >div:nth-child(2){
            position: absolute;
            right: 0.2rem;
            width: 1.5rem;
            height: 2.3rem;
            img{
                width: 100%;
            }
            p:first-child{
                text-align: center;
                font-weight: bold;
                width: 100%;
                margin-bottom: 0.05rem;
            }
            p:last-child{
                text-align: center;
                border-radius: 3rem;
                width: 70%;
                margin-left:15% ;
                margin-top: 0.05rem;
                background: orange;
            }
        }
        >div:nth-child(3){
            position: absolute;
            right: 2rem;
            width: 1.5rem;
            height: 2.3rem;
            img{
                width: 100%;
            }
            p:first-child{
                text-align: center;
                font-weight: bold;
                width: 100%;
                margin-bottom: 0.05rem;
            }
             p:last-child{
                text-align: center;
                border-radius: 3rem;
                width: 70%;
                margin-left:15% ;
                margin-top: 0.05rem;
                background: orange;
            }
        }
    }
    /* 掌上抢模块 */
    .lasttime{
        width: 100%;
        height: 0.54rem;
        display: flex;
        overflow: hidden;
    }
    .lasttime .lasttimeleft{
        height: 0.54rem;
        display: inline-block;
        float: left;
        display: flex;
        align-items:center;
    }
    .lasttime .lasttimeleft .secondkill,.lasttime-time,.lasttime-hour,.lasttime-mininute,.lasttime-second{
        display: inline-block;
        margin-right: 0.03rem;
        margin-left: 0.03rem;
    }
    .lasttime-time{
        width: 0.6rem;
    }
    .lasttime .lasttimeleft .secondkill {
        height: 0.54rem;
        margin-right: 0.2rem;
    }
    .lasttime .lasttimeleft .secondkill img{
        height: 0.54rem;
    }
    .lasttime .lasttime-hour,.lasttime-mininute,.lasttime-second{
        width: 0.24rem;
        height: 0.24rem;
        border: 0.01rem solid grey;
        line-height: 0.54rem;
        text-align: center;
        font-size: 0.15rem;
    }
    .lasttime .lasttime-right{
        height: 0.54rem;
        display: inline-block;
        float: right;
        padding-right: 0.2rem;
    }
    .lasttime .lasttime-right .lasttime-right-1,.lasttime-right-2{
        display: inline-block;
    }
    .lasttime .lasttime-right #lasttime-right-2 {
        font-size: 0.16rem;
    }
    .lasttime .lasttime-right .lasttime-right-1 {
        font-size: 0.16rem;
        height: 100%;
        line-height: 0.54rem;
        margin-left: 1.9rem;
    }
    /*秒杀轮播图*/
    .gallery-kill{
        padding-top: 0.3rem;
        height: auto;
        .swiper-slide{
            width: 20%;
            height:2.6rem;
            img{
                height:3.5rem;
            }
        }
    }
    .gallery-kill .swiper-slide img{
        width: 1.74rem;
        height: 1.74rem;
        padding: 0 0.1rem;
        box-sizing: border-box;	
    }
    .gallery-kill .swiper-slide .price{
        width: 1.74rem;
        padding: 0 0.1rem;	
        box-sizing: border-box;
        text-align: center;
    }
    .gallery-kill .swiper-slide .currentprice{
        font-size: 0.2rem;
        font-weight: bold;
        padding-top: 0.1rem;
        box-sizing: border-box;
    }
    .gallery-kill .swiper-slide .oldprice{
        font-size: 0.16rem;
        text-decoration: line-through;
    }
    .adpic{
        margin-bottom:0.3rem; 
        img{
            height:1.47rem;
            width: 100%;
        }
    }
    /* // 闪购 */
    .shopping{
        width: 100%;
    }
    .shoppingtop{
        width: 100%;
    }
    .shopping .shoppinglefttop{
        width: 49%;
        height: 1.8rem;
        position: relative;
        display: inline-block;
    }
    .shopping .shoppinglefttop .shoppinglefttop-img{
        
        margin-right: 0.2rem;
        margin-bottom: 0.2rem;
        width: 1.38rem;
        height: 1.38rem;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .shopping .shoppinglefttop .shoppinglefttop-img img{
       
        width: 1.38rem;
        height: 1.38rem;
    }
    .shopping .shoppinglefttop .shoppinglefttop-1{
        font-size: 0.32rem;
        position: absolute;
        padding-left: 0.1rem;
    }
    .shopping .shoppinglefttop .shoppinglefttop-2{
        font-size: 0.22rem;
        color: grey;
        position: absolute;
        padding-top: 0.1rem;
        top: 0.32rem;
        padding-left: 0.1rem;
    }
    .shopping .shoppinglefttop .shoppinglefttop-3{
        font-size: 0.22rem;
        color: white;
        position: absolute;
        top: 0.74rem;
        left: 0.1rem;
        background-color:  #ff4a7d;
    }
    #purple{
        background-color: #952dff;
    }
    .shoppingfoot{
       
        padding-top: 0.1rem;
        width: 100%;
        height: 2.0rem;
        display: flex;
    }
    .shopping .shoppingleftfoot{
         
        width: 49%;
        height: 2.0rem;
        position: relative;
        display: inline-block;
    }
    .shopping .shoppingleftfoot .shoppingleftfoot-img{
        margin:0 0.1rem 0.1rem 0;
        width: 1.6rem;
        height: 1.6rem;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .shopping .shoppingleftfoot .shoppingleftfoot-1{
        font-size: 0.32rem;
        position: absolute;
        padding-left: 0.1rem;
    }
    .shopping .shoppingleftfoot .shoppingleftfoot-2{
        font-size: 0.22rem;
        color: grey;
        position: absolute;
        padding-top: 0.1rem;
        top: 0.32rem;
        padding-left: 0.1rem;
    }
    .shopping .shoppingleftfoot .shoppingleftfoot-img img{
        width: 1.6rem;
        height: 1.6rem;

    }
    .shopping .shoppinglefttop .shoppingleftfoot-img{
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .shoppingrightfoot{
        display: inline-block;
        width: 49%;
        height: 2.0rem;
        box-sizing: border-box;
    }
    .shoppingrightfoot .shoppingrightfootl{
        width: 49%;
        height: 2.0rem;
        position: relative;
        display: inline-block;
    }
    .shoppingrightfoot .shoppingrightfootl .shoppingrightfootl-1{
        font-size: 0.32rem;
        position: absolute;
        padding-left: 0.1rem;
    }
    .shoppingrightfoot .shoppingrightfootl .shoppingrightfootl-2{
        font-size: 0.22rem;
        color: grey;
        position: absolute;
        padding-top: 0.1rem;
        top: 0.32rem;
        padding-left: 0.1rem;
    }
    .shoppingrightfoot .shoppingrightfootl .shoppingrightfootl-img{
        position: absolute;
        bottom: 0;
    }
    .shoppingrightfoot .shoppingrightfootl .shoppingrightfootl-img img{
        width: 1.42rem;
        height: 1.13rem;
    }
    .shoppingrightfoot .shoppingrightfootr{
        width: 48%;
        height: 2.0rem;
        position: relative;
        display: inline-block;
    }
    .shoppingrightfoot .shoppingrightfootr .shoppingrightfootr-1{
        font-size: 0.32rem;
        position: absolute;
        padding-left: 0.1rem;
    }
    .shoppingrightfoot .shoppingrightfootr .shoppingrightfootr-2{
        font-size: 0.22rem;
        color: grey;
        position: absolute;
        padding-top: 0.1rem;
        top: 0.32rem;
        padding-left: 0.1rem;
    }
    .shoppingrightfoot .shoppingrightfootr .shoppingrightfootr-img{
        position: absolute;
        bottom: 0;
    }
    .shoppingrightfoot .shoppingrightfootr .shoppingrightfootr-img img{
        width: 1.42rem;
        height: 1.13rem;
    }

</style>
