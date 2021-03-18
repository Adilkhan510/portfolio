const styles = (theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary,
  },
  title: {
    flexGrow: 1,
    color: "#ffffff",
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  tab: {
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: "700",
    minWidth: "10",
    color: "theme.palette.secondary,",
  },
  img: {
    borderRadius: "100px",
    height: "60px",
    width: "60px",
    padding: "5px",
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  link: {
    textTransform: "none",
    fontSpacing: "-0.5px",
    fontWeight: "800",
    color: "white",
    fontSize: "1rem",
    margin: "0 0.5rem",
    fontFamily: "'Montserrat'",
    "&:hover": {
      cursor: "pointer",
    },
  },
  links: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
  },
  typography: {
    letterSpacing: "-0.5px",
    color: "white",
    letterSpacing: "0.5px",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1rem",
    fontWeight: "400",
  },
});

export default styles;
