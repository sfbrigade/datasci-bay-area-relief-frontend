import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import rocio from '../../assets/avatars/rocio.jpg';
import emily from '../../assets/avatars/emily.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Box component="section" mt={0} mb={0}>
      <Typography variant="h3">Meet the Team</Typography>
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box display="flex"  
          flexDirection="column"
          alignItems="center"
          justifyContent="center">
        <Avatar alt="Rocio" src={rocio} className={classes.large} />
        <Typography>Rocio Ng</Typography>
        <Typography variant="body2">Project Lead</Typography>
        </Box>
        </Grid>
        <Grid item xs={6}>
        <Box display="flex"  
          flexDirection="column"
          alignItems="center"
          justifyContent="center">
        <Avatar alt="Emily" src={emily} className={classes.large} />
        <Typography>Emily Kasa</Typography>
        <Typography  variant="body2">Data Jam Lead</Typography>
        </Box>
        </Grid>
      </Grid>
    </div>
    </Box>
  );
}