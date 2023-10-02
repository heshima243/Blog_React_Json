import axios from "axios";


export const GET_POSTS="GET_POSTS"
export const ADD_POST="GET_POST"
export const EDIT_POST="EDIT_POST"
//export const ADD_POST_LIKE="EADD_POST_LIKE"
export const DELETE_POST="DELETE_POST"

// Action type


// Action creator
export const getPost = () => {
  return (dispatch) => {
    // Effectuez la requête HTTP à l'URL de l'API
    return axios.get("https://json-julio.onrender.com/posts?_sort=id&_order=desc")
      .then((res) => {
        // Une fois les données récupérées, dispatchez l'action avec les données
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((error) => {
        // Gérez les erreurs ici si nécessaire
        console.error("Error fetching posts:", error);
      });
  };
};
export const addPost =(data)=>{
    return (dispatch)=>{
        return axios.post("https://crudmongo-28tp.onrender.com/logup",data)
        .then((res)=>{
           dispatch({type:ADD_POST, payload:data})
           console.log('success');
        }
    )
    .catch((error) => {
      // Gérez les erreurs ici si nécessaire
      console.error("Error logup posts:", error);
    });
  }
}

export const editPost =(data)=>{
    return (dispatch)=>{
        return axios.put(`https://json-julio.onrender.com/posts/${data.id}`,data)
        .then((res)=>{
           dispatch({type:EDIT_POST, payload:data})
        }
    )}
}

export const deletePost =(postId)=>{
    return (dispatch)=>{
        return axios.delete(`https://json-julio.onrender.com/posts/${postId}`)
        .then((res)=>{
           dispatch({type:DELETE_POST, payload:postId})
        }
    )}
}
