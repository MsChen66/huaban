import * as type from './type'
import axios from 'axios'
const actionCreator = {
    getAllList(num){
        return dispatch => {
         axios
         // http://huaban.com/all?max=2229484169&limit=20&wfl=1
         .get('/huaban/',{
            params: {
                start: 0,
                page: 10,
                limit: num,
            }
        })
         .then(res => {
             
             let action = {
                 type: type.GET_ALLLIST,
                 payLoad: res.data['recommends']
             }
             
             dispatch(action)
         })
         .catch(error => console.log(error))
        }
     }
    
}


export default actionCreator