import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        fontFamily: 'Manrope',
        fontWeight: 'bold',
        backgroundColor: '#fdfffc',  
        margin: 10,
        '&:hover':{
            backgroundColor: '#2ec4b6',
        }
    },
    title: {
        fontFamily: 'Manrope',
        margin: 50,
        color: '#011627'
    },
    description: {
        fontFamily: 'Manrope',
        fontSize: 20,
        paddingTop: 20,
        margin: 20
    },
    formField: {
        display: 'flex',
        left: '50%',
        width: 200,
        transform: 'translateX(-50%)',
        padding: 10,
        fontFamily: 'Manrope',
        justifyContent: 'center',
        color: '#ff9f1c'
    },
    formMessage: {
        display: 'flex',
        left: '50%',
        width: '75%',
        transform: 'translateX(-50%)',
        padding: 10,
        fontFamily: 'Manrope',
        justifyContent: 'center',
        color: '#ff9f1c'
    }
})

export default useStyles;