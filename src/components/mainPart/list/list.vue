<template>
<div>
  <head-part :title='"项目经验"'></head-part>
  <div class="promList">
      <div class="list" v-for="(v,k) in promList" :key="k">
          <p class="tit">{{v.title}}</p>
          <div class="detail">
              <p class="des fir"><span>项目描述：</span><span>{{v.describe}}</span></p>
              <div class="des">
                <p>使用技术：</p>
                <ul>
                  <li v-for="(i,j) in listArr(v.skill)" :key="j">{{i}}</li>
                </ul>
              </div>
          </div>
      </div>
  </div>
</div>
</template>
<script>
import headPart from '../../header/header'
import promList from '../../../../static/mockData/proms.js'
export default {
  data(){
    return {
      promList:''
    }
  },
  mounted() {
    this.promList=promList.result;
    // console.log(this.promList);
  },
  components:{
    headPart,
  },
  methods:{
    listArr(str){
      // console.log(str)
      var a=  str.split('&&');
      return a;
    }
  }
}
</script>
<style lang='less' scoped>
  .promList{
    padding: 0.4rem 0.4rem 0.2rem 0.4rem;
    position: absolute;
    bottom: 1rem;
    top: 1rem;
    overflow-y: scroll;
    font-size: 0.25rem;
    line-height: 0.34rem;
    >div:last-child{
      border-bottom: 0;
    }
  }
  .promList::-webkit-scrollbar{
    display: none;
  }
  .list{
    margin-bottom: 0.2rem;
    border-bottom: 0.01rem solid orange;
    padding-bottom: 0.2rem;
    .tit{
      font-size: 0.3rem;
      font-weight: 700;
      margin-bottom: 0.2rem;
    }
  }
  .detail{
    padding-left:0.3rem; 
  }
  .des{
    display: flex;
    span:first-child,p{
      width: 1.3rem;
    }
    span:nth-child(2),ul{
      flex: 1;
    }
    &.fir{
      margin-bottom: 0.2rem;
    }
  }
</style>