import * as actions from "~store/actions/action-types";

const initialState = {
  posts: [],
  loading: false,
  error: false
};

const posts = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case actions.FETCH_POSTS_START:
      return {
        ...state,
        loading: true
      };

    case actions.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: payload.posts
      };

    case actions.FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error
      };

    case actions.POSTS_DELETE_POST:
      return {
        ...state,
        posts: payload.posts
      };

    default:
      return state;
  }
};

export default posts;
