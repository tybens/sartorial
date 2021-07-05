import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const OldCollection = ({ index, name, img, url, id }) => {
  const classes = useStyles();

  return (
    <Link
      className={classes.collection}
      style={{ backgroundImage: `url(${img})` }}
      to={`${url}/${id}`}
      key={name}
    >
      {name}
    </Link>
  );
};

export default OldCollection;
