import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../reduxComponent/actions/post.action";
import isEmpty from "./Utils";

const Article = ({ post }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  window.scrollTo(0, 0);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Link  to={`/read/${post.id}`}>
          <CardMedia
            
            image={post.image}
            title="image title"
          />
        </Link>
        <CardContent>
          <Typography variant="h6"  gutterBottom>
            <Link to={`/read/${post.id}`}>{post.title}</Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Article;
