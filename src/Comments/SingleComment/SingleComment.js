import React from 'react';
import { makeStyles, Card, CardHeader, Avatar, CardContent, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      marginTop: 10,
    },
    avatar: {
      backgroundColor:  red[500],
    },
  }));

const SingleComment = (props) => {

    const classes = useStyles();
    const { name, email, body, id } = props.comment;

    let imgId = id;
    if (imgId > 50) {
      imgId = Math.floor(Math.random() * 50) + 1;
    }
    return (
        
        <Card className = {classes.root}>
            <CardHeader avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
               <img
              src={`https://randomuser.me/api/portraits/med/women/${imgId}.jpg`}
              alt=''
            />
          </Avatar>
            }
            title={name.toUpperCase()}
            subheader={email}
          />

            

            <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {body}
            </Typography>
          </CardContent>

        </Card>
    );
};

export default SingleComment;