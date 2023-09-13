import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

import {
  Box,
  Button,
  CardActions,
  CircularProgress,
  Container,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { deletePost, getPost } from "../reduxComponent/actions/post.action";
import { CardMedia } from "@mui/material";
import isEmpty from "./Utils";
import useStyles from "../style";

const ReadPost = () => {
  const { id } = useParams(); // Récupère l'ID de la route
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();
  const [isloading, setIsloading] = useState(true);

  // Recherchez l'article avec l'ID correspondant

  useEffect(() => {
    if (posts.length === 0) {
      window.scrollTo(0, 0);
      dispatch(getPost());
    }
    setIsloading(false);
  }, [dispatch, posts]);

  window.scrollTo(0, 0);

  const classes = useStyles();

  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <Container className={classes.centerContent}>
      {isloading && (
        <Box className={classes.isloadingbox1}>
          <Box className={classes.isloadingbox2}>
            <CircularProgress color="primary" size={64} thickness={4} />
            <Typography variant="h6" color="primary" mt={2}>
              Loading...
            </Typography>
          </Box>
        </Box>
      )}
      {post ? (
        <Paper className={classes.content}>
          <Typography variant="h4" style={{ textAlign: "justify" }}>
            {post.title}
          </Typography>
          <img
            src={post.image}
            style={{ height: "400px",
            idth:"200px",
            justifyContent: "center",
            alignContent: "center",
            margin: "auto",
            alignItems:"center",
            display:"flex"}}
            alt={post.title}
          />
          <Typography variant="body1" style={{ textAlign: "justify" }}>
            {post.body}
          </Typography>

          <CardActions>
            {!isEmpty(post.author) && post.author === post.author && (
              <div>
                <Button
                  onClick={() => dispatch(deletePost(post.id))}
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
        <Typography variant="h1" color="initial">
          Article not found
        </Typography>
      )}
    </Container>
    
  );
};

export default ReadPost;
