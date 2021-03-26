import { baguette, payne_tyler } from './assets/products'

/*  Yo, this file is not automated, so it will need to be updated by hand, 
the necessary object structure of a product is below

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
const products = [
    
    {
        id: 0,
        price: 25,
        img: baguette,
        description: 'Test description number 1, this is a cool picture',
        name: 'baguette',
    },

    {
        id: 1,
        price: 25,
        img: payne_tyler,
        description: 'Test description number 2, this is a lame description',
        name: 'a party time',
    },
]

export default products;