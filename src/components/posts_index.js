import React , {Component} from 'react'
import {connect} from 'react-redux'

class PostsIndex extends Component {
  render(){
    return <div>Postsindex</div>
  }
}

function mapStateToProps(state){
  return {posts:state.props};
}
export default connect(mapStateToProps)(PostsIndex);
