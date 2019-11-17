import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actionsPosts } from "~store/actions";
import PostItem from "~components/post-item";
import LoadIndicator from "~components/load-indicator";

import styles from "./posts.module.scss";

class Posts extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array,
    loading: PropTypes.bool,
    deletePost: PropTypes.func,
    error: PropTypes.any
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = (posts) => {
    return posts.map((post) => {
      return (
        <div key={post.id} className={styles.postItem}>
          <PostItem post={post} />
          <button
            onClick={() => this.props.deletePost(post.id, posts)}
            type="button"
          >
            DELETE
          </button>
        </div>
      );
    });
  };

  render() {
    const { posts, loading, error } = this.props;

    return (
      <>
        {error ? (
          <p
            style={{ textAlign: "center", marginTop: "50px", fontSize: "30px" }}
          >
            Sorry: {error.message}
          </p>
        ) : (
          <h2 className={styles.title}>Lorem ipsum dolor sit.</h2>
        )}

        {loading ? (
          <LoadIndicator />
        ) : (
          <div className={styles.cards}>{this.renderPosts(posts)}</div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchPosts: actionsPosts.fetchPosts,
      deletePost: actionsPosts.deletePost
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
