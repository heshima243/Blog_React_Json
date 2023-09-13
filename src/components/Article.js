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

const Article = ({ classes, post }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  window.scrollTo(0, 0);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <Link className={classes.img} to={`/read/${post.id}`}>
          <CardMedia
            className={classes.cardMedia}
            image={post.image}
            title="image title"
          />
        </Link>
        <CardContent className={classes.CardContent}>
          <Typography variant="h6"  gutterBottom>
            <Link to={`/read/${post.id}`}  className={classes.Link}>{post.title}</Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Article;
