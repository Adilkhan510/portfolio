import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Button, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      width: "1000px",
      height: "60px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      background: theme.palette.secondary.light
    },
    width: "auto",
    boxShadow: theme.shadows[6]
  },
  icons: {
    fontSize: "35px",
  }
}));

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation elevation={4} value={value} onChange={handleChange} className={classes.root}>
      <Button>
        <a href="https://github.com/Adilkhan510" className={classes.icons}><i className="fab fa-github-square icons" style={{ color: "black" }}></i></a>
      </Button>
      <Button>
        <a href="https://www.linkedin.com/in/adilmuneerkhan/" className={classes.icons}><i className="fab fa-linkedin-in" style={{
          color: "blue"
        }}></i></a>
      </Button>
      <Button>
        <a href="https://drive.google.com/file/d/1EAwDUMBDDdWoWdgdCEVsLrwCrHFNGpbB/view?usp=sharing" className={classes.icons}><i className="fa fa-file" style={{
          color: "#D58180"
        }}></i></a>
      </Button>
    </BottomNavigation>
  );
}
