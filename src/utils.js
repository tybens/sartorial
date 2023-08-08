export function calculateOrderAmountWithTax(obj) {
  var sum = 0;
  const taxes = 1.07;
  for (var el in obj) {
    if (
      obj.hasOwnProperty(el) &&
      obj[el].hasOwnProperty("quantity") &&
      obj[el].hasOwnProperty("price")
    ) {
      let thisSum = parseFloat(obj[el].quantity) * parseFloat(obj[el].price);
      if (
        obj[el].hasOwnProperty("data") &&
        obj[el].data.hasOwnProperty("collection") &&
        obj[el].data.collection !== "donation"
      ) {
        sum += thisSum * taxes;
      } else {
        sum += thisSum;
      }
    }
  }
  return sum;
}

export function calculateOrderAmountNoTax(cart) {
    var sum = 0;
    for (var el in cart) {
      if (
        cart.hasOwnProperty(el) &&
        cart[el].hasOwnProperty("quantity") &&
        cart[el].hasOwnProperty("price")
      ) {
        sum += parseFloat(cart[el].quantity) * parseFloat(cart[el].price);
      }
    }
    return sum;
  }


