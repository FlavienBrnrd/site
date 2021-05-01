import React from 'react';
import { Container, Button, Typography, TextField } from '@material-ui/core';
import useStyles from '../components/Styles'


const Contact = function Contact() {
    const classes = useStyles();
    return (
        <Container>
            <Typography
                variant="h3"
                className={classes.title}>
                Thanks for visiting !
            </Typography>

            <Typography
                variant="p"
                className={classes.description}>
                If you have any questions, feel free to send me a message
            </Typography>


            <Container
            className={classes.formContainer}>
                <form noValidate autoComplete="off">
                    <TextField
                        label="First name"
                        variant="standard"
                        required
                        className={classes.formField} />
                    <TextField
                        label="Last name"
                        variant="standard"
                        required
                        className={classes.formField} />
                    <TextField
                        label="E-mail"
                        variant="standard"
                        required
                        className={classes.formField} />

                    <TextField
                        label="Message"
                        variant="outlined"
                        required
                        fullWidth
                        multiline
                        rows={5}
                        className={classes.formMessage} />

                    <Button
                        onClick={() => { console.log("Cliked") }}
                        className={classes.btn}>
                        Send
                    </Button>
                </form>
            </Container>
        </Container>
    );
}
export default Contact;