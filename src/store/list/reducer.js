import state from './state'
import * as type from './type'
const reducer = (previousState = state,action) => {
    let new_state = {...previousState }

    //用户辨识
    switch (action.type) {
        case type.GET_NAVS:
                new_state.listNavs = action.payLoad
            break;
        case type.GET_CONTENT:
                new_state.listContent = action.payLoad
            break;
    
        default:
            break;
    }

    return new_state
}

export default reducer