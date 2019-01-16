import * as type from './type'
import axios from 'axios'
const actionCreator = {
    getList(num){
        return dispatch => {
         axios
         // http://huaban.com/?limit=12&page=2
         .get('/huaban/',{
             params: {
                 start: 0,
                 page: 10,
                 limit: num,
             }
         })
         .then(res => {
             let action = {
                 type: type.GET_LIST,
                 payLoad: res.data['recommends']
             }
             dispatch(action)
         })
         .catch(error => console.log(error))
        }
     }
    
}


export default actionCreator