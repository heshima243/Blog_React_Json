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

const EditPost = () => {
  const { id } = useParams(); // Récupère l'ID de la route
  const posts = useSelector((state) => state.postReducer.posts);
  const user = useSelector((state) => state.userReducer);

  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [EditAuthor, setEditAuthor] = useState("");
  const [EditImage, setEditImage] = useState(true);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  // Recherchez l'article avec l'ID correspondant
  const post = posts.find((post) => post.id === parseInt(id));

  window.scrollTo(0, 0);

  const handleEdit = async (e) => {
    e.preventDefault();

    const postData = {
      author: EditAuthor,
      image: EditImage,
      title: editTitle,
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
    <div>
      <FormContainer onSubmit={(e) => handleEdit(e)}>
        <Typography variant="h4" color="initial">
          Edith a Content
        </Typography>

        <InputField
          label="author"
          variant="outlined"
          fullWidth
          required
          name="author"
          defaultValue={post.author}
          onChange={(e) => setEditAuthor(e.target.value)}
          helperText="Ce champ est obligatoire"
        />

        <InputField
          label="copy adress image like that https://i.pinimg.com/564x/804e602ac2a29.jpg"
          variant="outlined"
          fullWidth
          required
          name="image"
          defaultValue={post.image}
          onChange={(e) => setEditImage(e.target.value)}
          helperText="Ce champ est obligatoire"
        />

        <InputField
          label="Titre du post"
          variant="outlined"
          fullWidth
          required
          name="title"
          defaultValue={post.title}
          onChange={(e) => setEditTitle(e.target.value)}
          helperText="Ce champ est obligatoire"
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
          helperText="Ce champ est obligatoire"
        />

        <SubmitButton type="submit" variant="contained" color="success">
          Envoyer
        </SubmitButton>
      </FormContainer>
    </div>
  );
};

export default EditPost;
