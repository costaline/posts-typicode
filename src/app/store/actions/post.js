import * as actions from "./action-types";

import { typicode } from "~services/axios";

export const fetchPost = (id) => {
  return async (dispatch) => {
    dispatch(fetchPostStart());

    try {
      const res = await typicode.get(`/posts/${id}`);

      dispatch(fetchPostSuccess(res.data));
    } catch (err) {
      dispatch(fetchPostError(err));
    }
  };
};

export const fetchPostStart = () => {
  return {
    type: actions.FETCH_POST_START
  };
};

export const fetchPostSuccess = (post) => {
  return {
    type: actions.FETCH_POST_SUCCESS,
    post
  };
};

export const fetchPostError = (error) => {
  return {
    type: actions.FETCH_POST_ERROR,
    error
  };
};
