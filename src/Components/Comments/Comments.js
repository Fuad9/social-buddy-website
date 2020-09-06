import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CommentIcon from "@material-ui/icons/Comment";

const Comments = (props) => {
  const id = props.posts;
  const [comments, setComments] = useState([]);

  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=1`)
      .then((response) => setImages(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
      display: "flex",
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      marginTop: theme.spacing(3),
    },
    comment: {
      display: "flex",
      alignItems: "center",
      color: "blue",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.comment}>
        <CommentIcon color="secondary" />
        <h3>Comments</h3>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className={classes.root}>
          {images.map((image) => (
            <Avatar
              alt=""
              src={image.picture.medium}
              className={classes.avatar}
              key={image.location.postcode}
            />
          ))}
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {comment.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {comment.email}
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  {comment.body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Comments;
