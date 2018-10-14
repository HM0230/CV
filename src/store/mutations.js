const mutations={
    hideBigImg(state){
        state.ifshowBigImg=false;
    },
    showBigImg(state){
        state.ifshowBigImg=true;
    },
    setBigImgIndex(state,data){
        state.BigImgIndex=data;
    }
}
export default mutations;