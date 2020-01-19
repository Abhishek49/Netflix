const style= theme => ({
    appWrapper: {
        padding:'0px',
        margin:'0px',
        backgroundColor:theme.palette.secondary.light,
        minHeight:'100vh'
    },
    gridContainer:{
        flexGrow:1,
        marginTop:theme.spacing(8),
        flexWrap:'wrap',
        padding:theme.spacing(4),
        [theme.breakpoints.down('md')]: {
            justifyContent:'space-around'
        }
    },
    gridItem:{
        marginTop:theme.spacing(8),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(4),
            width: 'auto'
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2)
        }

    }
});

export default style;
