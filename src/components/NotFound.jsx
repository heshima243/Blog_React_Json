import { Container, Typography} from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { makeStyles } from "@mui/styles";
// import { makeStyles } from "@mui/styles";
import makeStyles from '@mui/styles/makeStyles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    centerContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh", 
      textAlign:"center"
    },
  }));


const NotFound = () => {

    const classes = useStyles();

  return (
    <Container className={classes.centerContent}>
      <Typography color='error' variant="h4">Ouups!! Page Not Found</Typography>
      <Link to='/'>Return Home page</Link>
    </Container>
  );
};

export default NotFound;
