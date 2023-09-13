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
import styled from "styled-components";

const itemsPerPage = 3; // Number of articles to display per page

const StyledGridContainer = styled(Grid)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const StyledCardTitle = styled(Typography)`
  && {
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: #1976d2; // Couleur au survol
    }
  }
`;

const StyledCardMedia = styled(CardMedia)`
  object-fit: cover;
`;

const PostList = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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
      {isLoading && (
        <Box>
          <Box>
            <CircularProgress color="secondary" size={64} thickness={4} />
            <Typography variant="h6" color="secondary" mt={2}>
              Loading...
            </Typography>
          </Box>
        </Box>
      )}

      <StyledGridContainer container spacing={4}>
        {currentPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <Link to={`/read/${post.id}`}>
                <StyledCardMedia component="img" height="140" image={post.image} alt="image title" />
              </Link>
              <CardContent>
                <StyledCardTitle variant="h6" gutterBottom>
                  <Link to={`/read/${post.id}`}>{post.title}</Link>
                </StyledCardTitle>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </StyledGridContainer>

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
