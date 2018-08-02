<template>
    <div>
        <img src="../../../static/img/icon/back.png" alt="" @click="toUrl">
        <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    props:[
        'title',
        'backUrl'
    ],
    methods:{
        toUrl(){
            this.$router.push({name:this.backUrl})
        }
    }
}
</script>
<style lang='less' scoped>
    div{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: 0.28rem;
        border-bottom: 0.01rem solid #efefef;
        position: relative;
        img{
            position: absolute;
            left: 0.15rem;
            top:0.25rem;
            width: 0.5rem;
            height: 0.5rem;
        }
    }
</style>