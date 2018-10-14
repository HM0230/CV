<template>
	<div class="barcodeBox">
		<div style="z-index:2">
			<head-part :title='"barcode"' :backUrl='"commonFun"'></head-part>
		</div>
		<div style="z-index:1">
			<div id= "barcode"></div>
		</div>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
	import headPart from '../../../header/header'
	import { setTimeout } from 'timers';
	export default {
		components:{
			Toast,
			headPart
		},
	    data: function(){
	        return {
				scan:null
	        }
	    },
	    mounted() {
			setTimeout(()=>this.startRecognize(), 100);
			// var that=this;
			// plus.key.addEventListener("backbutton",function(){
			// 	that.$router.push({name:'commonFun'})
			// });
	    },
	    methods: {
			onmarked( type, result ) {
				var text = '未知: ';
				switch(type){
					case plus.barcode.QR:
						text = 'QR: ';
						break;
					case plus.barcode.EAN13:
						text = 'EAN13: ';
						break;
					case plus.barcode.EAN8:
						text = 'EAN8: ';
						break;
				}
				console.log( text+result );
				this.scan.close();
			},
			startRecognize(){
				this.scan = new plus.barcode.Barcode('barcode');
				this.scan.onmarked = this.onmarked;
				this.scan.start();
				this.scan.setFlash(true);
			},
			setFlash(){
				this.scan.setFlash();
			}
		},
		beforeDestroy(){
			this.scan.close();
		}
	}
</script>
<style lang="less" scoped>
	.barcodeBox{
		background: black;//改到这儿了
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
	}
	#barcode {
		position: absolute;
		top: 1rem;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 5;
	}
</style>
