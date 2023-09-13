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

const itemsPerPage = 3; // Number of articles to display per page

const PostList = () => {
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
    <Container maxWidth="md">
      {isloading && (
        <Box>
          <Box>
            <CircularProgress color="primary" size={64} thickness={4} />
            <Typography variant="h6" color="primary" mt={2}>
              Loading...
            </Typography>
          </Box>
        </Box>
      )}

<Grid
  container
  spacing={4}
  style={{ marginTop: "20px", marginBottom: "20px" }}
>
  {currentPosts.map((post, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Card style={{ flexGrow: 1 }}>
          <Link to={`/read/${post.id}`}>
            <CardMedia
              component="img"
              height="140"
              image={post.image}
              alt="image title"
            />
          </Link>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <Link
                style={{
                  textDecoration: "none",
                  transition: "transform 0.2s",
                  display: "inline-block",
                }}
                to={`/read/${post.id}`}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                {post.title}
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Grid>
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
