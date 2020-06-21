export default (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent : "center",
        alignItems : "center",
        marginTop : "60px",
        zIndex : "100",
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
      },
    paper : {
        [theme.breakpoints.up('lg')] : {
            width : "90vw",
            height : "auto",
            display : "flex",
            flexDirection : "row",
            justifyContent : "space-evenly",
        },
        display : "flex",
        flexDirection : "column",
        width : "90vw",
        height : "auto",

    },
    title : {
        background : "#D58180",
        [theme.breakpoints.up('sm')]: {
            width : "230px",
        },
        width : 'auto',
        height : "auto",
        position: "relative",
        top: "-5%",
        left : "-2.5%",
        padding : "5px",
        textAlign : "center",
        color : "whitesmoke",
    },
    insideContainer : {
        [theme.breakpoints.up('lg')] : {
            width : "40%",
            height : "400px"
        },
        minWidth : "250px",
        marginBottom : "2rem",
    },
    img :{
    position : "fixed",
    borderRadius : "200%",
    marginLeft : "-4%",
    top : "8%",
    left : '50%',
    width : "200px",
    height : "200px"
    },
    typography : {
        color : "black",
        letterSpacing : "0.5px",
        fontFamily: "'Montserrat', sans-serif",
        fontSize : '20px',
        fontWeight : "bold",
        color: theme.palette.secondary,
        [theme.breakpoints.up('md')] : {
            fontSize : "35px",
            fontWeight : "bold",
        }
    },
    typography2 : {
        color : "black",
        letterSpacing : "0.5px",
        fontFamily: "'Montserrat', sans-serif",
        fontSize : '15px',
        fontWeight : "bold",
    },
    content : {
    height : "280px",
    textOverflow: "ellipsis",
    overflow: "scroll",
    },
    contentContainer : {
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-evenly",
    },
    bottomNavigation : { 
            [theme.breakpoints.up('lg')] : {
                width : "90vw",
                height : "auto",
                display : "flex",
                flexDirection : "row",
                justifyContent : "space-evenly",
            },
            display : "flex",
            flexDirection : "column",
            width : "90vw",

    },
    projectsHeader : {
        background : "#D58180",
        [theme.breakpoints.up('sm')]: {
            width : "230px",
        },
        width : 'auto',
        height : "auto",
        position: "relative",
        padding : "5px",
        textAlign : "center",
        color : "whitesmoke",
        fontSpacing : "-0.5px"
    },
    projectsContainer : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center"
    }
})