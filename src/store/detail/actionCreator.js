import * as type from './type'
import axios from 'axios'
const actionCreator = {
    getDetail(id){
       return dispatch => {
           axios
            .get('/dt/napi/blog/detail/',{
                params: {
                    include_fields: 'top_like_users,top_forward_users,top_like_users,tags,top_comments,related_albums,extra_links,related_albums.covers,root_album,share_links,share_info,atest_events,extra_html',
                    blog_id: id
                }
            })
            .then(
                res => {
                    // console.log('====================================');
                    // console.log(res);
                    // console.log('====================================');
                    let action = {
                        type: type.GET_DETAIL_DATA,
                        payLoad: res.data.data
                    }
                    dispatch(action)
                }
            )
            .catch(error => console.log( error ))
       }
    },
}


export default actionCreator