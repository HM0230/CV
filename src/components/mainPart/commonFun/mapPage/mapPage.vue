<template>
    <div>
        <head-part :title='"Map"' :backUrl='"commonFun"'></head-part>
        <div id="map">地图加载中...</div>
    </div>
</template>
<script>
import headPart from '../../../header/header'
export default {
    components:{
        headPart
    },
    data(){
        return {
            map
        }
    },
    mounted() {
        this.creatMap();
        // var that=this;
        // plus.key.addEventListener("backbutton",function(){
        //     that.$router.push({name:'commonFun'})
        // });
    },
    methods:{
        creatMap(){
            var _this=this;
            this.map = new plus.maps.Map("map");
            this.map.showUserLocation( true );
            // setTimeout(()=>{
                this.map.getUserLocation( function ( state, point ){
                    if( 0 == state ){
                        console.log( JSON.stringify(point) );
                        var center = new plus.maps.Point( point.longitude, point.latitude);
                        _this.map.centerAndZoom( center ,17);
                        plus.maps.Map.reverseGeocode(point,{},function(event){
                            var address = event.address;  // 转换后的地理位置
                            var point = event.coord;  // 转换后的坐标信息
                            var coordType = event.coordType;	// 转换后的坐标系类型
                            console.log(JSON.stringify(event))
                            console.log("Address:"+address);
                        },function(e){
                            console.log("Failed:"+JSON.stringify(e));
                        });
                    }else{
                        console.log( "Failed!" );
                        _this.map.centerAndZoom( new plus.maps.Point(118.78,32.04), 17 );
                    }
                } );
            // },200)
        }
    },
    beforeDestroy(){
        // console.log('leave');
        this.map.close(),this.map=null;
    }
}
</script>
<style scoped>
    #map{
        width: 100%;
        height: 200rem;
        text-align: center;
        background: #FFFFFF;
    }
</style>
