<template>
    <div>
        <head-part :title='"大图预览"' :backUrl='"commonFun"'></head-part>
        <div class="imgs" v-for="(item,index) in imgurls" :key="index" >
            <img @click="showBigImg(index)" class="pic" :src="item" alt="">
        </div>
        <bigimg :imgsUrl='imgurls'></bigimg>
    </div>
</template>
<script>
import imgurls from '../../../../../static/mockData/imgview.js'
import headPart from '../../../header/header'
import bigimg from './bigimg'
import {mapGetters} from 'vuex'
export default {
    components:{
        headPart,
        bigimg
    },
    computed:{
        ...mapGetters([
            'ifshowBigImg',
            // 'BigImgIndex',
        ]),
    },
    data(){
        return {
            imgurls:[]
        }
    },
    mounted() {
        // setTimeout(()=>{
            var img = document.getElementsByClassName('pic')
            // console.log(img)
            for(var i=0;i<img.length;i++){
                if(img[i].height>img[i].width){
                    img[i].setAttribute("class","width100")
                }else{
                    img[i].setAttribute("class","height100")
                }
            }
        // },100)
        
        // var that=this;
        // plus.key.addEventListener("backbutton",function(){
        //     that.$router.push({name:'commonFun'})
        // });
    },
    created() {
        this.imgurls=imgurls.result;
        // console.log(this.imgurls)
    },
    methods:{
        showBigImg(index){
            // console.log('1')
            this.$store.dispatch('showBigImg')
            this.$store.dispatch("setBigImgIndex",index);
        }
    }
}
</script>
<style lang='less' scoped>
    .imgs{
        float: left;
        width: 2rem;
        height: 2rem;
        .pic{
            width: 100%;
        }
    }
    .height100{
        height: 100%;
    }
    .width100{
        width: 100%;
    }
</style>
