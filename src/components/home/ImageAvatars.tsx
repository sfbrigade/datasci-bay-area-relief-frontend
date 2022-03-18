import React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import rocio from '../../assets/avatars/rocio.jpg';
import emily from '../../assets/avatars/emily.jpg';

const PREFIX = 'ImageAvatars';

const classes = {
  root: `${PREFIX}-root`,
  large: `${PREFIX}-large`
};

const StyledBox = styled(Box)((
  {
    theme
  }
) => ({
  [`& .${classes.root}`]: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  [`& .${classes.large}`]: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  }
}));

export default function ImageAvatars() {


  return (
    <StyledBox component="section" mt={8} mb={8}>
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
    </StyledBox>
  );
}