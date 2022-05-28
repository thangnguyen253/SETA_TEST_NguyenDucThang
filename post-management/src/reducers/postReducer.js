const initState = {
  post: [],
};
const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_POST': {
      return {
        ...state,
        post: action.payload,
      };
    }

    case 'ADD_POST': {
      const newPost = [...state.post];
      newPost.push(action.payload);

      return {
        ...state,
        post: newPost,
      };
    }

    default:
      return state;
  }
};

export default PostReducer;
