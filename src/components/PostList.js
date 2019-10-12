//Imports
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

//Component
class PostList extends React.Component {
    //Lifecycle
    componentDidMount() {
        this.props.fetchPosts();
    }

    //Render
    render() {
        return (
            <div>Post List</div>
        )
    }
}

//Export
export default connect(null, { fetchPosts })(PostList);