import { Typography } from "@mui/material";

const Footer = ({ classes }) => {
  return (
    <footer>
      <Typography variant="h6" align="center" gutterBottom>
        Heshima inc
      </Typography>
      <Typography variant="subtitle1" color="paper" align="center">
      &copy; 2023 Heshima_Lunyungu_Julien Tous droits réservés
      </Typography>
    </footer>
  );
};

export default Footer;
