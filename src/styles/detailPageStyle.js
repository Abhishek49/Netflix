const style= theme => ({
    appWrapper: {
        padding:'0px',
        margin:'0px',
        backgroundColor:theme.palette.secondary.light,
        minHeight:'100vh'
    },
    detailContainer:{
        display:'flex',
        flexGrow:1,
        justifyContent:'space-between',
        marginTop:theme.spacing(8),
        flexWrap:'wrap',
        padding:theme.spacing(4)
    },
    commonText:{
        color:theme.palette.common.white,
        [theme.breakpoints.down('md')]: {
            fontSize:24
        }
    },
    title:{
        flexBasis: '10%'
    },
    descriptionContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        flexWrap: "wrap",
        flexBasis: '40%',
        [theme.breakpoints.down('md')]: {
            flexBasis: '100%'
        },
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
    }
});

export default style;
