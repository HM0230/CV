<template>
    <div>
        <x-button mini plain type="primary" @click.native="share('qq')">QQ</x-button>
        <x-button mini plain type="primary" @click.native="share('weixin')">微信</x-button>
        <x-button mini plain type="primary" @click.native="share('sinaweibo')">微博</x-button>
    </div>
</template>
<script>
import headPart from '../../../header/header'
import { XButton } from 'vux'
import { Toast } from 'mint-ui';
export default {
    components:{
        headPart,
        XButton,
        Toast
    },
    mounted() {
        var  shares = {};
        plus.share.getServices(function(s) {
            for (var i in s) {
                var t = s[i];
                shares[t.id] = t;
            }
            Toast("获取分享服务列表成功");
        }, function(e) {
            Toast("获取分享服务列表失败：" + e.message);
        });
    },
}
</script>
<style scoped>

</style>
