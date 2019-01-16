import actionCreator from '../../store/all/actionCreator'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupAll = connect(state => state.all,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)


export default GroupAll