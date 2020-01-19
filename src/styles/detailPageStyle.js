const style= theme => ({
    appWrapper: {
        padding:'0px',
        margin:'0px',
        backgroundColor:theme.palette.secondary.light,
        minHeight:'100vh'
    },
    detailContainer:{
        display:'flex',
        flexGrow:4,
        justifyContent:'space-between',
        marginTop:theme.spacing(8),
        flexWrap:'wrap',
        padding:theme.spacing(4)
    },
    commonText:{
        color:theme.palette.common.white
    },
    title:{
        flexBasis: '20%'
    },
    descriptionContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        flexWrap: "wrap",
        maxWidth:theme.spacing(70),
        maxHeight:theme.spacing(40)
    },
    youtubeWrapper:{
        marginTop:theme.spacing(4),
        flexBasis:'100%'
    },
    youtubePlayer:{
        width: '100%',
        height: theme.spacing(65)
    },
    card:{
        padding:'0px',
        '&:last-child': {
            paddingBottom: '0px'
        }
    },
    cardImage:{
        backgroundSize:'contain',
        width:theme.spacing(20),
        height:theme.spacing(30),
    },
    gridItem:{
        marginTop:theme.spacing(8),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(4),
            width: 'auto'
        }
    }
});

export default style;
