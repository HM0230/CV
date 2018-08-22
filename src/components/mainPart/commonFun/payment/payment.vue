<template>
    <div>
        <head-part :title='"三方支付"' :backUrl='"commonFun"'></head-part>
        <x-button mini plain type="primary" @click.native="pay('wxpay')">wxpay</x-button>
        <x-button mini plain type="primary" @click.native="pay('alipay')">Alipay</x-button>
    </div>
</template>
<script>
import headPart from '../../../header/header'
import { XButton } from 'vux'
export default {
    components:{
        XButton,
        headPart
    },
    data(){
        return {
            wxChannel : null,
            aliChannel:null,
            channel:null,
            ALIPAYSERVER:'http://demo.dcloud.net.cn/helloh5/payment/alipay.php?total=0.01',
		    WXPAYSERVER:'http://demo.dcloud.net.cn/helloh5/payment/wxpay.php?total=10',
        }
    },
    mounted() {
        plus.payment.getChannels((channels)=>{
            this.aliChannel=channels[0];
            this.wxChannel=channels[1];
            console.log(channels);
        },(e)=>{
            alert("获取支付通道失败："+e.message);
        });
    },
    methods:{
        pay(id){
            var PAYSERVER='';
    		if(id=='alipay'){
       			PAYSERVER=this.ALIPAYSERVER;
       			this.channel = this.aliChannel;
   	 		}else if(id=='wxpay'){
        			PAYSERVER=this.WXPAYSERVER;
        			this.channel = this.wxChannel;
    		}else{
        			plus.nativeUI.alert("不支持此支付通道！",null,"捐赠");
        			return;
            }
            var _this=this;
    		var xhr=new XMLHttpRequest();
    		xhr.onreadystatechange=function(){
        		switch(xhr.readyState){
            		case 4:
            		if(xhr.status==200){
                        plus.payment.request(_this.channel,xhr.responseText,function(result){
                            plus.nativeUI.alert("支付成功！",function(){
                            back();
                        });
                        },function(error){
                            plus.nativeUI.alert("支付失败：" + error.code);
                        });
                    }else{
                        alert("获取订单信息失败！");
                    }
                    break;
            		default:
            		break;
        		}
   		    }
    		xhr.open('GET',PAYSERVER);
    		xhr.send();
        }
    }
}
</script>
<style scoped>

</style>
