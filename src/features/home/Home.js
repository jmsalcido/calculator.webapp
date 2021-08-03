import React from 'react';
import { Container, Typography } from '@material-ui/core';

import materialUiStyles from '../../app/styles';

export default function Home() {
    const classes = materialUiStyles();
    return (
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Calculator Service
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Simple calculator web app. Log-in for more usages.
        </Typography>
      </Container>
    );
}