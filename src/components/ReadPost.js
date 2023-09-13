import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActions,
  CircularProgress,
  Container,
  Paper,
} from "@mui/material";
import { deletePost, getPost } from "../reduxComponent/actions/post.action";
import { CardMedia } from "@mui/material";
import isEmpty from "./Utils";

const ReadPost = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    if (posts.length === 0) {
      window.scrollTo(0, 0);
      dispatch(getPost());
    }
    //setIsLoading(false);
  }, [dispatch, posts]);
  window.scrollTo(0, 0);

  const handleDelete = () => {
    dispatch(deletePost(post.id));
    navigate("/");
  };

  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <Container>
      {post ? (
        <Paper
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
           borderRadius:"none"
          }}
        >
          <Typography variant="h4" style={{ textAlign: "justify" }}>
            {post.title}
          </Typography>
          <img
            src={post.image}
            style={{
              height: "400px",
              width: "300px",
              margin: "auto",
              display: "block",
            }}
            alt={post.title}
          />
          <Typography variant="body1" style={{ textAlign: "justify" }}>
            {post.body}
          </Typography>

          <CardActions>
            {!isEmpty(post.author) && post.author === post.author && (
              <div>
                <Button
                  onClick={handleDelete}
                  variant="outlined"
                  color="error"
                  style={{ marginRight: "5px" }}
                >
                  Delete
                </Button>
                <Button variant="outlined" color="secondary">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/edith/${post.id}`}
                  >
                    Edit
                  </Link>
                </Button>
              </div>
            )}
          </CardActions>
        </Paper>
      ) : (
        <div>
          {isLoading && (
            <Box
              style={{
                textAlign: "center",
                backgroundColor: "#edeff2",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
              }}
            >
              <CircularProgress color="primary" size={64} thickness={4} />
              <Typography variant="h6" color="primary" mt={2}>
                Loading...
              </Typography>
            </Box>
          )}
        </div>
      )}
    </Container>
  );
};

export default ReadPost;
