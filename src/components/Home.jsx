import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import useStyles from "../style";

import Footer from "./Footer";
import Intro from "./Intro";
import PostList from "./PostList";
import PostForm from "./PostForm";
import About from "./About";


const Home = () => {
  const classes = useStyles();
  return (
    <>
  
      <main style={{backgroundColor:"#edeff2"}}>
        <Intro classes={classes} />
        <PostList classes={classes} />
      </main>
      
    </>
  );
};

export default Home;
