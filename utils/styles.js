import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#FFFFFF',
            marginLeft: 10,
        }
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    grow:{
        flexGrow: 1,
    },
    main: {
        minHeight: '80vh',
    },
    footer: {
        textAlign: 'center',
        marginTop: 40,
    },
    section: {
        marginTop: 20,
        marginBOttom: 20,
    },
    form: {
        maxWidth: 800,
        margin: '0 auto',
    },
})

export default useStyles;