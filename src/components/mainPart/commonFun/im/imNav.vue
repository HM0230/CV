<template>
    <div>
        <x-button mini plain type="primary" @click.native="tolayim">layim</x-button>
    </div>
</template>
<script>
import { XButton } from 'vux'
export default {
    components:{
        XButton
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
