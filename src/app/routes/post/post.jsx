import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actionsPost } from "~store/actions";
import LoadIndicator from "~components/load-indicator";

import styles from "./post.module.scss";

const Post = (props) => {
  useEffect(() => {
    const id = props.match.params.id;

    props.fetchPost(id);
  }, []);

  const post = (
    <div className={styles.post}>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>
  );

  return <>{props.loading ? <LoadIndicator /> : post}</>;
};

const mapStateToProps = (state) => {
  return {
    post: state.post.post,
    loading: state.post.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPost: actionsPost.fetchPost }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
