import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Button, Container } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  root: {
    [theme.breakpoints.up('lg')] : {
        width: "1000px",
        height : "60px",
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-evenly",
        alignItems : "center",
    },
    width : "auto"
  },
  icons: {
      fontSize: "35px",
      color : "blue"
  }
}));

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <Button>
            <a className={classes.icons}><i className="fab fa-github-square icons"></i></a>
        </Button>
        <Button>
            <a className={classes.icons}><i className="fab fa-linkedin-in" style={{
                color: "blue"
            }}></i></a>
        </Button>
        <Button>
            <a className={classes.icons}><i className="fa fa-file" style={{
                color : "grey"
            }}></i></a>
        </Button>
    </BottomNavigation>
  );
}
