import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// material ui
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  addPost,
  editPost,
  getPost,
} from "../reduxComponent/actions/post.action";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const FormContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%", // Largeur de 50%
  margin: "0 auto", // Centrer horizontalement
  padding: "16px", // Espacement intérieur
});
const InputField = styled(TextField)({
  marginBottom: "16px",
});
const SubmitButton = styled(Button)({
  marginTop: "16px",
});

const EditPost = ({ classes }) => {
  const { id } = useParams(); // Récupère l'ID de la route
  const posts = useSelector((state) => state.postReducer.posts);
  const user = useSelector((state) => state.userReducer);

  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  // Recherchez l'article avec l'ID correspondant
  const post = posts.find((post) => post.id === parseInt(id));

  window.scrollTo(0, 0);
  
  const handleEdit = async (e) => {
    e.preventDefault();

    const postData = {
      title: editTitle,
      author: user.pseudo,
      likes: post.likes,
      id: post.id,
      body: editBody,
    };
    await dispatch(editPost(postData));
    dispatch(getPost());
    navigate("/");
  };

  if (!post) {
    return <Typography>NO article found</Typography>;
  }

  return (
    <div style={{backgroundColor:"#edeff2",}}>
      <FormContainer  onSubmit={(e) => handleEdit(e)}>
        <Typography variant="h4" color="initial">
          Edith a Content
        </Typography>
        <InputField
          label="Titre du post"
          variant="outlined"
          fullWidth
          required
          name="title"
          defaultValue={post.title}
          onChange={(e)=> setEditTitle(e.target.value)}
        />
        <TextField
          label="Corps du post"
          variant="outlined"
          multiline
          rows={10}
          fullWidth
          required
          defaultValue={post.body}
          onChange={(e) => setEditBody(e.target.value)}
        />
        <SubmitButton type="submit" variant="contained" color="success">
          Envoyer
        </SubmitButton>
      </FormContainer>
    </div>
  );
};

export default EditPost;
