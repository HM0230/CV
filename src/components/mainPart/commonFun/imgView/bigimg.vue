<template>
    <div class="bigImgbox"  v-if="ifshowBigImg">
        <div class="swiper-container" @click="hideBigImg()">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,k) in imgsUrl" :key="k">
                    <div class="minImg">
                        <img :src="v" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import {mapGetters} from 'vuex'
export default {
    props:[
        'imgsUrl',
    ],
    computed:{
        ...mapGetters([
            'ifshowBigImg',
            'BigImgIndex',
        ]),
    },
    updated(){
        var _this=this;
        console.log('index'+_this.BigImgIndex);
        this.swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 600,
            initialSlide :_this.BigImgIndex,
            onTouchEnd: function() {
                swiper.startAutoplay()
            }
        });
    },
    mounted(){
        
    },
    methods:{
        hideBigImg(){
            this.$store.dispatch('hideBigImg');
        }
    }
}
</script>
<style lang="less" scoped>
    .swiper-container{
        width: 100%;
        height: 100%;
    }
    .swiper-slide{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .bigImgbox{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9999;
        background:black;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .minImg{
            width: 100%;
            // height: 100%;
            img{
                width: 100%;
                margin-top: auto;
            }
        }
    }
</style>