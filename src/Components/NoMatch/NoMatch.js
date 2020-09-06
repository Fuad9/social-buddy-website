import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const NoMatch = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "4em",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Sorry, 404 not found</h1>
    </div>
  );
};

export default NoMatch;
