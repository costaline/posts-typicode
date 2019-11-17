import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./post-item.module.scss";

const PostItem = (props) => {
  const { title, body, id } = props.post;

  const BODY_LENGTH = 75;

  const shortBody = (body) => body.substr(0, BODY_LENGTH);

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{shortBody(body)}...</p>
      <Link className={styles.link} to={`/posts/${id}`}>
        MORE
      </Link>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object,
  title: PropTypes.string,
  body: PropTypes.string
};

export default PostItem;
