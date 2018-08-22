<template>
    <div>
        <head-part :title='"Map"' :backUrl='"commonFun"'></head-part>
        <div class="topImg">
            <img :src="info.figureurl" alt="">
            <div>
                <p>{{info.nickname}}</p>
                <p>{{info.gender}}</p>
                <p>{{info.province}} {{info.city}}</p>
            </div>
        </div>
        <x-button mini plain type="primary" @click.native="authLogin('qq')">QQ</x-button>
        <x-button mini plain type="primary" @click.native="authLogin('weixin')">微信</x-button>
        <x-button mini plain type="primary" @click.native="authLogin('sinaweibo')">微博</x-button>
        <x-button mini plain type="primary" @click.native='authLogout'>logout</x-button>
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
            auths:null,
            info:{}
        }
    },
    mounted() {
        this.loadDefaultInfo();
        plus.oauth.getServices((services) =>{
            this.auths = services;
        }, (e)=> {
            alert("获取登录服务列表失败：" + e.message + " - " + e.code);
        });
    },
    methods:{
        loadDefaultInfo(){
            this.$http.get('/static/data/default.json')
            .then(({data:{result}})=>{
                // console.log(result)
                this.info={
                    nickname:result.nickname,
                    province:result.province,
                    figureurl:result.figureurl,
                    gender:result.gender,
                    city:result.city
                }
                // console.log(this.info)
            }).then((err)=>{
                console.log(err);
            })
        },
        authLogin(type){
            var s;
			for (var i = 0; i < this.auths.length; i++) {
				if (this.auths[i].id == type) {
					s = this.auths[i];
					break;
				}
            }
            // console.log(JSON.stringify(s))
            // console.log(s.authResult)
            // if (!s.authResult) {
                // console.log('false')
				s.login((e)=> {
                    Toast("登录认证成功！");
                    s.getUserInfo((e)=> {
                        var josnStr = s.userInfo;
                        // var jsonObj = s.userInfo;
                        // console.log("获取用户信息成功：" +JSON.stringify(josnStr));
                        // showData(type,jsonObj);
                        // authLogout();
                        if(type=='qq'||type=='weixin'){
                            this.info={
                                nickname:josnStr.nickname,
                                province:josnStr.province,
                                figureurl:josnStr.figureurl?josnStr.figureurl:josnStr.headimgurl,
                                gender:josnStr.gender?josnStr.gender:(josnStr.sex==2?'女':'男'),
                                city:josnStr.city
                            }
                        }else if(type=='sinaweibo'){
                            this.info={
                                nickname:josnStr.screen_name,
                                province:josnStr.location.split(' ')[0],
                                figureurl:josnStr.profile_image_url,
                                gender:josnStr.gender=='f'?'女':'男',
                                city:josnStr.location.split(' ')[1]
                            }
                        }
                    }, (e)=> {
                        alert("获取用户信息失败：" + e.message + " - " + e.code);
                    });
				}, (e)=> {
					Toast("登录认证失败！");
				});
			// } else {
                // console.log('true')
				// Toast("已经登录认证！");
			// }
        },
        authLogout() {
			for (var i in this.auths) {
				var s = this.auths[i];
				if (s.authResult) {
					s.logout(function(e) {
						Toast("注销登录认证成功！");
					}, function(e) {
						Toast("注销登录认证失败！");
					});
				}
			}
		}
    }
}
</script>

<style lang='less' scoped>
    .topImg{
        display: flex;
        flex-direction: row;
        padding: 0.2rem;
        img{
            height: 1rem;
            width: 1rem;
            border-radius: 50%;
        }
        div{
            flex: 1;
            padding-left: 0.2rem;
            font-size: 0.2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            
        }
    }
</style>
