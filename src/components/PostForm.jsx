import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// material ui
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addPost, getPost } from "../reduxComponent/actions/post.action";
import Typography from "@mui/material/Typography";

import edithPost from "../css material ui/edithPost";

const PostForm = () => {
  const { FormContainer, InputField, SubmitButton } = edithPost;

  const form = useRef();
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  // const [body, setBody] = useState("");
  // const [title, setTitle] = useState("");
  // const [image, setImage] = useState('');
  // const [author, setAuthor] = useState('');

  const [fullname, setfullname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  let navigate = useNavigate();

  window.scrollTo(0, 0);
  
  const handleForm = async (e) => {
    e.preventDefault();

    // const tmp_date = new Date().toISOString().split('T');
    // const date =`${tmp_date[0]} ${tmp_date[1]}`;

    // const title = form.current.title.value;


    const postData = {
      // date:date,
      // author: author,
      // image: image,
      // title: title,
      // body: body, 
      // likes: 0,
      fullname: fullname,
      email:email,
      password:password
    };

    await dispatch(addPost(postData));
    dispatch(getPost());
    // form.current.reset();
    // setBody("");
    // setTitle("");
    // setAuthor("")
    // navigate("/");
    setfullname('');
    setemail('');
    setpassword('')
    alert('post add successfull')
  };

  return (
    <div>
      <FormContainer ref={form} onSubmit={(e) => handleForm(e)}>
        <Typography variant="h4" color="initial">
          Post a Content
        </Typography>
        <InputField
          style={{ marginBottom: "16px" }}
          label="your full name"
          variant="outlined"
          fullWidth
          required
          value={fullname}
          onChange={(e)=>setfullname(e.target.value)}
        />
        <InputField
          style={{ marginBottom: "16px" }}
          label="your email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />
        <InputField
          style={{ marginBottom: "16px" }}
          label="your password"
          variant="outlined"
          fullWidth
          required
          name="title"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          // value={post.title}
        />
        {/* <TextField
          label="body of your article"
          variant="outlined"
          multiline
          rows={10}
          fullWidth
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        /> */}
        <SubmitButton
          style={{ marginTop: "16px" }}
          type="submit"
          variant="contained"
          color="success"
        >
          Envoyer
        </SubmitButton>
      </FormContainer>
    </div>
  );
};

export default PostForm;
