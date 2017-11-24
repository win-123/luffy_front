
const judge = 'judge'
const GETIMG = 'GETIMG'
import state from './state';
export default {
  [judge] (state) {
    if(state.login_state){
      return false;
    }else {
      return true;
    }
  },
  // [GETIMG] (state, userImg) {
  //   if(userImg == "") {
  //     state.userImg = localStorage.getItem('userImg')
  //   } else {
  //     state.userImg = userImg
  //   }
  // },
}
