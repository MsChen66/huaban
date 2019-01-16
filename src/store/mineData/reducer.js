import state from './state'
import * as type from './type'
const reducer = (previousState = state,action) => {
    let new_state = {...previousState }

    //用户辨识
    switch (action.type) {
        case type.TEMPLATE:
                //用户操作
            break;
        case type.CHANGE_USERINFO:
            new_state.userInfo = {
                username: action.username
            }
            break;
        case type.EXIT_USERINFO:
            new_state.userInfo = action.userInfo
            break;
        default:
            break;
    }

    return new_state
}

export default reducer