import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button}>
        Swiss Stories
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Events
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        About Us
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Blog
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Contact
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);