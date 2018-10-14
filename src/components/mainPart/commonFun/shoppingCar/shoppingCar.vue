<template>
    <div class="shoppingCarBox">
        <head-part :title='"购物车"' :backUrl='"commonFun"'></head-part>
        <div>
            <div class="commodity">
                <div v-for="(item,key) in goodsList" :key="key">
                    <!-- <div> -->
                    <div class="storeName">
                        <input type="checkbox" @change="storeChoose(item.id)" v-model="selecteStore" :value="item.id" :id="item.id" hidden>
                        <label :for="item.id"></label>
                        <span>{{item.storeName}}</span>
                    </div>  
                    <!-- </div> -->
                    <div class="goodsList" v-for="(i,k) in item.list" :key="k">
                        <input type="checkbox" :value="i.id" @change="goodsChoose()" v-model="selectedGoods" :id="'goodNum'+i.id" hidden>
                        <label :for="'goodNum'+i.id"></label>
                        <div class="goosPic"><img :src="i.image" alt=""></div>
                        <div class="goosDir">
                            <p>{{i.name}}</p>
                            <p>规格：{{i.type}}</p>
                            <p>￥{{i.price}}</p>
                        </div>
                        <div class="inputNumber">
                            <p><span @click="cutOne(item.id,i.id)">-</span><span>{{i.number}}</span><span @click="addOne(item.id,i.id)">+</span></p>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="Settlement">
                <div>
                    <input type="checkbox" @change="chooseAll('chooseAll')" value="all" id="chooseAll" hidden>
                    <label for="chooseAll"></label>
                    <span>全选</span>
                </div>
                <div>
                    <p>合计：<span>￥{{totalPrice}}</span></p>
                    <p>运费：<span>￥{{freight}}</span></p>
                </div>
                <button @click="submit" :class="totalPrice>0?'btnsty01':'btnsty02'">去结算</button>
            </div>
        </div>
        <!-- <div class="toLogin" v-if="!ifLoginIn" @click="loginIn">去登录</div> -->
    </div>
</template>
<script>
import goodslist from '../../../../../static/mockData/goods.js'
import headPart from '../../../header/header'
export default {
    data(){
        return {
            goodsList:[],
            selecteStore:[],
            selectedGoods:[],
            // ifLoginIn:null,
            totalPrice:'0.00',
            freight:'0.00'
        }
    },
    components:{
        headPart
    },
    watch:{
        selecteStore(newval,oldval){
            let arr =[];
            this.goodsList.map(item=>{
                arr.push(item.id)
            })
            if(this.Contain(arr,newval)){
                document.getElementById('chooseAll').checked=true;
            }else{
                document.getElementById('chooseAll').checked=false;
            }
        },
        selectedGoods(newval,oldval){
            this.Settlement();
        },
    },
    mounted(){
        // var that=this;
        // plus.key.addEventListener("backbutton",function(){
        //     that.$router.push({name:'commonFun'})
        // });
    },
    methods:{
        remove(arr, item) {
            let result=[];
                for(var i=0; i<arr.length; i++){
                if(arr[i]!=item){
                    result.push(arr[i]);
                }
            }
            return result;
        },
       Contain(arr01,arr02){
            let res = true;
            arr01.map(item=>{
                if(arr02.indexOf(item)==-1){
                    res = false;
                }
            })
            return res;
        },
        storeChoose(id){
            let check =document.getElementById(id);
            if(check.checked){
                this.goodsList.map(item=>{
                    if(item.id==id){
                        item.list.map(i=>{
                            if(this.selectedGoods.indexOf(i.id)==-1){
                                this.selectedGoods.push(i.id);
                            }
                        })
                    }
                })
            }else{
                this.selecteStore=this.remove(this.selecteStore,id)
                this.goodsList.map(item=>{
                    if(item.id==id){
                        item.list.map(i=>{
                           this.selectedGoods=this.remove(this.selectedGoods,i.id)
                        })
                    }
                })
            }
        },
        goodsChoose(){
            this.goodsList.map(item=>{
                let arr = [];
                item.list.map(i=>{
                    arr.push(i.id);
                })
                let res = this.Contain(arr,this.selectedGoods);
                if(res){
                    if(this.selecteStore.indexOf(item.id)==-1){
                        this.selecteStore.push(item.id);
                    }
                }else{
                    this.selecteStore=this.remove(this.selecteStore,item.id)
                }
            })
        },
        chooseAll(id){
            let check = document.getElementById(id);
            if(check.checked){
                this.selecteStore=[];
                this.selectedGoods=[];
                this.goodsList.map(item=>{
                    this.selecteStore.push(item.id);
                    item.list.map(i=>{
                        this.selectedGoods.push(i.id);
                    })
                })
            }else{
                this.selecteStore=[];
                this.selectedGoods=[];
            }
        },
        Settlement(){
            // console.log(this.selectedGoods);
            let totalPrice=0;
            this.goodsList.map(item=>{
                item.list.map(i=>{
                    if(this.selectedGoods.indexOf(i.id)>=0){
                        totalPrice+=(i.price*i.number);
                    }
                })
            })
            totalPrice=totalPrice.toFixed(2);
            this.totalPrice=totalPrice;
            // console.log(totalPrice)
        },
        submit(){
            // console.log(this.selectedGoods);
        },
        cutOne(Sid,Gid){
            this.goodsList.map((item,index)=>{
                if(item.id==Sid){
                    item.list.map((i,j)=>{
                        if(i.id==Gid){
                            if(i.number>1){
                                i.number--;
                            }
                        }
                    })
                }
            })
            this.Settlement();
        },
        addOne(Sid,Gid){
            this.goodsList.map((item,index)=>{
                if(item.id==Sid){
                    item.list.map((i,j)=>{
                        if(i.id==Gid){
                            i.number++;
                        }
                    })
                }
            })
            this.Settlement();
        }
    },
    created(){
        // if(getToken()){
            // this.ifLoginIn=true;
          
            // this.axios.get('/static/data/shoppingCar.json',
            //     {},
            // )
            // .then( ({data:{result:{goods}}})=> {
            //     this.goodsList=goods;
            // })
            // .catch( (error )=> {
            //     console.log('error');
            // })
        // }else{
        //     this.ifLoginIn=false;
        //     console.log('logout')
        // }
        this.goodsList = goodslist.result.goods;
        // console.log(goodslist.result)
    }
}
</script>
<style lang='less' scoped>
    button{
        outline:none;
    }
    .shoppingCarBox{
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        overflow: hidden;
    }
    .storeName{
        position: relative;
        padding-left: 0.3rem !important;
        text-align: left;
        height: 1rem;
        line-height: 1rem !important;
        font-size: 0.35rem;
        line-height: 0.4rem;
        padding-left: 0.1rem;
        border-bottom: 0.01rem solid #efefef;
        span{
            margin-left: 0.6rem;
        }
        span:before{
            content: "";
            display: inline-block;
            height: 0.4rem;
            width: 0.4rem;
            margin-right: 0.1rem;
            background: url(../../../../../static/img/icon/logomini.png);
            background-size: contain;
        }
    }
    .goodsList{
        padding: 0.2rem 0;
        position: relative;
        display: flex;
        background: #fff;
        flex-direction: row;
        .goosPic{
            margin-left: 0.8rem;
            width: 2rem;
            height: 2rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .goosDir{
            flex: 1;
            text-align: left;
            padding: 0 0.1rem;
            position: relative;
            p:first-child{
                font-size: 0.32rem;
                display: -webkit-box;
                word-wrap: break-word;
                word-break: break-all;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                margin-bottom: 0.1rem;
            }
            P:nth-child(2){
                color: #999;
                font-size: 0.26rem;
            }
            P:nth-child(3){
                position: absolute;
                bottom: 0;
                color: #f60;
                font-size: 0.32rem;
            }
        }
        .inputNumber{
            position: absolute;
            right: 0.2rem;
            bottom: 0.2rem;
            p{
                border: 0.01rem solid #d3d2d2;
                padding: 0.1rem 0;
            }
            span:first-child,span:nth-child(3){
                border: none;
                background: white;
                padding:0 0.2rem ;
                font-size: 0.45rem;
            }
            span:first-child{
                font-size: 0.45rem;
                border-right: 0.01rem solid #d3d2d2;
                // padding:0 0.1rem ;
            }
            span:nth-child(3){
                border-left: 0.01rem solid #d3d2d2;
                // padding-left: 0.1rem ;
            }
            span:nth-child(2){
                padding: 0 0.2rem;
                font-size: 0.3rem;
            }
        }
    }
    input[type="checkbox"]+label{
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0.3rem;
        margin-top: -0.2rem;
        width: 0.4rem;
        height: 0.4rem;
        border: 0.01rem solid #9a9999;
        // position: relative;
    }
    input[type="checkbox"]:checked+label{
        
        background-color: #f60;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border: 0.01rem solid #f60;
        border-radius: 50%;
        width: 0.4rem;
        height: 0.4rem;
    }
     input[type="checkbox"]:checked+label:after {
        content: "";
        position: absolute;
        width: 0.2rem;
        height: 0.1rem;
        bottom: 0.15rem;
        left: 0.05rem;
        border: 0.05rem solid white;
        border-top-color: transparent;
        border-right-color: transparent; 
        -ms-transform: rotate(-60deg); 
        -moz-transform: rotate(-60deg); 
        -webkit-transform: rotate(-60deg); 
        transform: rotate(-45deg);
    }
    .commodity{
        position: fixed;
        top: 1rem;
        bottom: 1rem;
        overflow-y: scroll;
    }
    .commodity::-webkit-scrollbar{
        display: none;
    }
    .Settlement{
        height: 1rem;
        display: flex;
        background: white;
        flex-direction: row;
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 0.01rem solid #efefef;
        >div:first-child{
            width: 1rem;
            span{
                position: absolute;
                top: 50%;
                margin-top: -0.15rem;
                left: 0.86rem;
                font-size: 0.33rem;
            }
        }
        >div:nth-child(2){
           flex: 1;
           display: flex;
           flex-direction: column;
           justify-content: space-around;
           text-align: right;
           padding-right: 0.2rem;
           font-size: 0.24rem;
           span{
               color: #f60;
               font-size: 0.32rem;
           }
        }
        button{
            height: 100%;
            width: 2rem;
        }
    }
    .btnsty01{
        background: #f60;
        border: none;
        color: white;
    }
    .btnsty02{
        background: #cacaca;
        border: none;
        color: white;
    }
    .toLogin{
        border: 0.01rem solid #f60;
        color: #f60;
        width: 1.5rem;
        margin: auto;
        margin-top: 0.2rem;
        height: 0.5rem;
        font-size: 0.3rem;
        line-height: 0.5rem;
    }
</style>