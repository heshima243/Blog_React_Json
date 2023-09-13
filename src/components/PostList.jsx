import React, { useState } from "react";
import { useSelector } from "react-redux";
import isEmpty from "./Utils";
import Article from "./Article";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const itemsPerPage = 6; // Number of articles to display per page

const PostList = ({ classes }) => {
  const posts = useSelector((state) => state.postReducer.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isloading, setIsloading] = useState(false);

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  // Calculate the start and end indices for articles on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
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

      <Grid container spacing={4}>
        {currentPosts.map((post, index) => (
          
          <Article classes={classes} post={post} key={index} />
        ))}
      </Grid>
      <div className="pagination">
        <Button
          variant="contained"
          color="error"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span style={{ color: "green", fontSize: "19px", margin: "12px" }}>
          {currentPage}
        </span>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default PostList;
