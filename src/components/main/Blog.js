import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const styles = (theme) => ({
  spacer: {
    height: '75px',
  },
  headingSpacer: {
    marginTop: '25px',
    marginBottom: '40px',
  },
})

class Blog extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Grid container className={classes.spacer}>
        </Grid>
        <Grid
          container
          justify="center"
          className={classes.headingSpacer}
          >
          <Typography variant="h2" color="inherit" align="center">
            Coming Soon!
          </Typography>
        </Grid>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Blog);