import React , {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import _ from 'lodash'
import {Link} from 'react-router-dom'

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPost(){
    return _.map(this.props.posts, (post) => {
      const linkTo = `/posts/${post.id}`
      return (
        <div key={post.id}>
          <li className="list-group-title">
            <Link to={linkTo}>{post.title}</Link>
          </li>
        </div>
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
export default connect(mapStateToProps,{fetchPosts})(PostsIndex);
