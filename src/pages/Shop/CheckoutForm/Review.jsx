import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const Review = ({ cart, totalItems }) => {

  console.log(cart)
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {Object.entries(cart).map(([productId, item]) => (
          <ListItem style={{ padding: "10px 0" }} key={productId}>
            <ListItemText
              primary={`${item.product.name} | ${item.size}`}
              secondary={`Quantity: ${item.quantity}`}
            />
            <Typography variant="body2">
              ${item.quantity * 25}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {totalItems(cart) * 25}  {/* assuming every item is $25 */}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
