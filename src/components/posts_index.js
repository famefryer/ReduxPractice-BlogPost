import React , {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions'
import _ from 'lodash'
import {Link} from 'react-router-dom'

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPost();
  }

  renderPost(){
    return _.map(this.props.posts, (post) => {
      return (<li className="list-group-title" key={post.id}>
        {post.title}
      </li>
      )
    });
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPost()}</ul>
      </div>)
  }
}

function mapStateToProps(state){
  return {posts:state.posts}
}
//like dispatch function
export default connect(mapStateToProps,{fetchPost})(PostsIndex);
