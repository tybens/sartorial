import collectionsData from './collections-data'

/*  This parses through collections-data and compiles all of the products into one array

products is an array of objects
products = [
    {
        id: <int> unique integer id,
        price: <float> in dollars, no dollar sign (datatype float),
        img: <source?> imported js object, needs to be exported from assets/product-img.js
        description: <string> description of this product / specific design,
        name: <string> short title of design,
    },
]

*/
const theseProducts = []
collectionsData.forEach(({products}) => products.forEach((prod) => (theseProducts.push(prod))))


export default theseProducts;