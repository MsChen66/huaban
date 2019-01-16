import * as type from './type'
import axios from 'axios'
const actionCreator = {
    getNavs(){
       return dispatch => {
       axios.get(
            '/dt/napi/category/detail/',
            // /dt/napi/category/detail/?app_version=14&app_code=mdt&category_id=5017d172705cbe10c0000008
            {
                params: {
                    app_version: 14,
                    app_code: 'mdt',
                    category_id: '5017d172705cbe10c0000008'
                }
            }
        ).then(
             res => {
                let action = {
                    type: type.GET_NAVS,
                    payLoad: res.data.data['sub_cates']
                }
                dispatch(action)
             }
         ).catch(error => console.log( error ))
       }
    },
    getContent(id,path){
       return dispatch => {
       axios.get(
            '/dt/napi/blog/list/by_category/',
            {
                params: {
                    start: 0,
                    include_fields: 'sender,album,like_count,msg',
                    limit: 24,
                    cate_key: id,
                    path: path,
                    _: Date.now()
                }
            }
        ).then(
             res => {
                 console.log('====================================');
                 console.log(res);
                 console.log('====================================');
                let action = {
                    type: type.GET_CONTENT,
                    payLoad: res.data.data['object_list']
                }
                dispatch(action)
             }
         ).catch(error => console.log( error ))
       }
    },
}


export default actionCreator