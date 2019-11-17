import * as actions from "./action-types";

import { typicode } from "~services/axios";

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStart());

  try {
    const res = await typicode.get("/posts");

    dispatch(fetchPostsSuccess(res.data));
  } catch (err) {
    dispatch(fetchPostsError(err));
  }
};

export const fetchPostsStart = () => {
  return {
    type: actions.FETCH_POSTS_START
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: actions.FETCH_POSTS_SUCCESS,
    posts
  };
};

export const fetchPostsError = (error) => {
  return {
    type: actions.FETCH_POSTS_ERROR,
    error
  };
};

export const deletePost = (id, posts) => async (dispatch) => {
  await typicode.delete(`/posts/${id}`);

  const newPosts = posts.filter((post) => post.id !== id);

  dispatch({ type: actions.POSTS_DELETE_POST, posts: newPosts });
};
