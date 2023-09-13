import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_POSTS,
} from "../actions/post.action";

const initialState = { posts: [] };

export default function postReducer(state = initialState, action) {
  // switch
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.id) {
            // Ensure post.content is an array and concatenate the new content
            const newContent = Array.isArray(post.content) ? post.content : [];
            return {
              ...post,
              content: [action.payload.body, ...newContent],
            };
          } else {
            return post;
          }
        }),
      };
    case DELETE_POST:
      const postIdToDelete = action.payload;
      const updatedPosts = state.posts.filter(
        (post) => post.id !== postIdToDelete
      );
      return { ...state, posts: updatedPosts };
    default:
      return state;
  }
}
