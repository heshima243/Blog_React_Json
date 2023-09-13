import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"; // Assurez-vous d'importer la bonne dépendance
import { createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import useStyles from "./style";
import PostForm from "./components/PostForm";
import EditPost from "./components/EditPost";
import ReadPost from "./components/ReadPost";
import NotFound from "./components/NotFound";
import About from './components/About'
import Projects from "./components/Projects";




const theme = createTheme({
  // Your theme configuration here
});

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/post" element={<PostForm/>} /> 
        <Route path="/edith/:id" classes={classes} element={<EditPost/>} /> 
        <Route path="/read/:id" classes={classes} element={<ReadPost/>} /> 
        <Route path="/projects"  element={<Projects/>} /> 
        <Route path="*" classes={classes} element={<NotFound/>} /> 
        </Routes>
        <About/>
        <Footer classes={classes}/>
      </Router>
      
  
    </ThemeProvider>
  );
};

export default App;
