import {fade} from "@material-ui/core";

const style= theme => ({
    root:{
        flexGrow:1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    navBar:{
        backgroundColor:theme.palette.secondary.dark
    },
    home:{
        color:theme.palette.common.white
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.30),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.50),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width : '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 20),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

export default style;
