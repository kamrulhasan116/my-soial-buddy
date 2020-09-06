import React from 'react';
import Button from '@material-ui/core/Button';
import { Card, CardContent, Typography, CardActions, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop: 10,
    },
    postTitle: {
      fontSize: 20,
      color: '#2E4053',
    },
  });


const Post = (props) => {
    const {id,title,body} = props.post;

    const classes = useStyles();


    return (
        <Card className = {classes.root}>

        <CardContent>
            <Typography className = {classes.postTitle} >
                {title}
            </Typography>
            <Typography variant = 'body2' component = 'p' color ='textSecondary'>

            {body}
            </Typography>
            <CardActions>
                {props.homePage && (
                    <Link
                    style={{ color: 'inherit', textDecoration: 'inherit' }}
                    to = {`/postDetail/${id}`}
                    >
                    
                    <Button variant='contained' color='primary'>
                    Detail here
                   </Button>
    
                    </Link>

                )}
                {!props.homePage && <Comments commentId={id}></Comments>}
                

            </CardActions>

        </CardContent>
        </Card>
    );
};

export default Post;