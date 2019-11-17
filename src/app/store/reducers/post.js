import * as actions from "~store/actions/action-types";

const initialState = {
  post: {},
  loading: false,
  error: false
};

const post = (state = initialState, { type, ...payload }) => {
  switch (type) {
    case actions.FETCH_POST_START:
      return {
        ...state,
        post: {},
        loading: true
      };

    case actions.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: payload.post
      };

    case actions.FETCH_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error
      };

    default:
      return state;
  }
};

export default post;
