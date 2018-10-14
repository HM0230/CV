import axios from 'axios'
const actions={
    hideBigImg({commit}){
        commit("hideBigImg");
    },
    showBigImg({commit}){
        commit("showBigImg");
    },
    setBigImgIndex({commit},data){
        commit("setBigImgIndex",data);
    }
}
export default actions;