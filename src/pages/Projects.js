import { Container, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../components/Styles'


const Projects = function Projects() {
    const classes = useStyles();
    return (
        <Container>
            <Typography
                variant="h3"
                className={classes.title}>
                Check out my Projects !
            </Typography>
        </Container>
    );
}
export default Projects;