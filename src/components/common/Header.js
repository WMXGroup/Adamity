import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

export default function Header() {
  return (
    <AppBar position="fixed" color="primary">
    <Toolbar>
      <Button color="inherit" href={'/'}>
        <Typography variant="h6" color="inherit">
          Adamity
        </Typography>
      </Button>
      <Grid
        container
        justify="flex-end">
        <Button color="inherit" href={'/#/about'}>About</Button>
        <Button color="inherit" href={'/#/terms'}>Terms</Button>
      </Grid>
    </Toolbar>
    </AppBar>
  )
}

