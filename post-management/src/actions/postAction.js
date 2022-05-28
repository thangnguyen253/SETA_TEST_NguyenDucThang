export const getPost = (payload) => {
  return {
    type: 'GET_POST',
    payload: payload,
  };
};

export const addPost = (payload) => {
  return {
    type: 'ADD_POST',
    payload: payload,
  };
};
