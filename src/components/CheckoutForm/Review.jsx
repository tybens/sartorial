import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import products from '../../products'

const Review = ({ cart }) => {


  function sum(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }

  function thisProduct(productId) {
    var thisProd;
    products.forEach((prod) => {
      if (parseInt(prod.id) === parseInt(productId)) {
        thisProd = prod;
      }
    })
    return thisProd;
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {Object.entries(cart).map(([productId, quantity]) => (
          <ListItem style={{ padding: "10px 0" }} key={productId}>
            <ListItemText
              primary={thisProduct(productId).name}
              secondary={`Quantity: ${quantity}`}
            />
            <Typography variant="body2">
              ${quantity * 25}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {sum(cart) * 25}  {/* assuming every item is $25 */}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
