import { steelyeyed, payne_tyler, baguette, math, cropped_ty } from '../assets/products'


const collectionData = [{
    id: 0,
    name: 'Sartorial Spring 2021',
    img: math,
    description: 'Description 1',
    products: [{
        id: 0,
        price: 25,
        type: "T-Shirt",
        img: baguette,
        description: 'Test description number 1, this is a cool picture',
        name: 'baguette',
    },

    {
        id: 1,
        price: 25,
        type: "Hoodie",
        img: payne_tyler,
        description: 'Test description number 2, this is a lame description',
        name: 'a party time',
    }]
},
{
    id: 1,
    name: 'Fall 2020',
    img: cropped_ty,
    description: 'Description 2',
    products: [{
        id: 2,
        price: 25,
        type: "Cropped Hoodie",
        img: cropped_ty,
        description: 'Teagan is silly dumb dumb hehe',
        name: 'cropped',
    }]

}, {
    id: 2,
    name: 'Another',
    img: baguette,
    description: 'Description 3',
    products: [{
        id: 3,
        price: 25,
        type: "Sweatpants",
        img: steelyeyed,
        description: "Tyler is so hot omg",
        name: "mwah"
    }]
}]

export default collectionData;
