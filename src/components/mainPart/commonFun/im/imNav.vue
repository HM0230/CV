<template>
    <div>
        <head-part :title='"barcode"' :backUrl='"commonFun"'></head-part>
        <x-button mini plain type="primary" @click.native="tolayim">layim</x-button>
    </div>
</template>
<script>
import { XButton } from 'vux'
import headPart from '../../../header/header'
export default {
    components:{
        XButton,
        headPart
    },
    mounted() {
        // var that=this;
        // plus.key.addEventListener("backbutton",function(){
        //     that.$router.push({name:'commonFun'})
        // });
    },
    methods:{
        tolayim(){
            this.$router.push({name:'layimCom'})
        }
    }
}
</script>
<style scoped>

</style>
