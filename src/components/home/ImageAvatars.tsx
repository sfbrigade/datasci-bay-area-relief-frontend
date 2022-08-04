import React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import rocio from "../../assets/avatars/rocio.jpg";
import emily from "../../assets/avatars/emily.jpg";
import alex from "../../assets/avatars/alexkerr.jpg";
import adam from "../../assets/avatars/adam.jpg";
import chuhui from "../../assets/avatars/chuhui.jpg";
import david from "../../assets/avatars/david.jpg";
import joel from "../../assets/avatars/joel.png";
import herman from "../../assets/avatars/herman.jpg";

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
          <Grid item xs={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar alt="Rocio" src={rocio} className={classes.large} />
              <Typography>Rocio Ng</Typography>
              <Typography variant="body2">Project Lead</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar alt="Emily" src={emily} className={classes.large} />
              <Typography>Emily Kasa</Typography>
              <Typography variant="body2">Data Jam Lead</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar alt="Adam" src={adam} className={classes.large}/>
              <Typography>Adam Cobb</Typography>
              <Typography variant="body2">Engineer Lead</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar alt="Alex" src={alex} className={classes.large}/>
              <Typography>Alex Kerr</Typography>
              <Typography variant="body2">Engineer</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar alt="ChuHui" src={chuhui} className={classes.large}/>
              <Typography>ChuHui Fu</Typography>
              <Typography variant="body2">Engineer</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar alt="David" src={david} className={classes.large}/>
              <Typography>David Hay</Typography>
              <Typography variant="body2">Engineer</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar alt="Herman" src={herman} className={classes.large}/>
              <Typography>Herman Chiu</Typography>
              <Typography variant="body2">Engineer</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar alt="Joel" src={joel} className={classes.large}/>
              <Typography>Joel Reinecke</Typography>
              <Typography variant="body2">Engineer</Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </StyledBox>
  );
}
