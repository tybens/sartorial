import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

import useStyles from "./styles";

const Product = ({ history, product }) => {
  const classes = useStyles();

  const handleClick = () => {
    history.push(`${history.location.pathname}/${product.id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={product.img}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${product.price}
            </Typography>
          </div>
          {/* {product.description.map((text, id) => (
            <Typography
              variant="body2"
              color="textSecondary"
              align="left"
              component="p"
              key={id}
            >
              {text}
            </Typography>
          ))} */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(Product);
