//真正统一管理分片的reducer
import { combineReducers } from 'redux';
import home from './home/reducer'
import list from './list/reducer'
import detail from './detail/reducer'
import mineData from './mineData/reducer'
const reducer = combineReducers({
    home,list,detail,mineData
})

export default reducer
