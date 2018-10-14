<template>
    <div>
        <head-part :title='"三方分享"' :backUrl='"commonFun"'></head-part>
        <x-button mini plain type="primary" @click.native="share('qq')">QQ</x-button>
        <x-button mini plain type="primary" @click.native="share('weixin','WXSceneTimeline')">微信朋友圈</x-button>
        <x-button mini plain type="primary" @click.native="share('weixin','WXSceneSession')">微信好友</x-button>
        <!-- <x-button mini plain type="primary" @click.native="share('sinaweibo')">微博</x-button> -->
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
    data(){
        return {    
            shares:null
        }
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
        this.shares=shares;
        // var that=this;
        // plus.key.addEventListener("backbutton",function(){
        //     that.$router.push({name:'commonFun'})
        // });
    },
    methods:{
        share(id,ex){
            var that=this;
            var s = null;
            if (!id || !(s = this.shares[id])) {
				Toast("无效的分享服务！");
				return;
			}
			if (s.authenticated) {
				Toast("---已授权---");
				that.shareMessage(s, ex);
			} else {
				Toast("---未授权---");
				s.authorize(function() {
					that.shareMessage(s, ex);
				}, function(e) {
					Toast("认证授权失败");
				});
			}
        },
        shareMessage(s, ex) {
			var msg = {
				content: '分享-详情',
				//href: 'http://blog.csdn.net/zhuming3834',
                href:'http://192.168.5.198:8080/index',
				title: 'HGDQ-分享测试-title',
				content: 'HGDQ-分享测试-content',
				thumbs: ['http://img3.3lian.com/2013/v10/4/87.jpg'],
				pictures: ['http://img3.3lian.com/2013/v10/4/87.jpg'],
				extra: {
					scene: ex
				}
			};
			s.send(msg, function() {
				Toast("分享成功!");
			}, function(e) {
				Toast("分享失败!");
			});
		}
    }
}
</script>
<style scoped>

</style>
