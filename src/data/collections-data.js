import {
  steelyeyed,
  // payne_tyler,
  baguette,
  cropped_ty,
} from "../assets/products";

const productsImageManip = "q_auto:best";
const collectionData = [
  {
    id: "fw21-classics",
    name: "Fall/Winter 2021 Classics",
    img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629236884/Summer%202021%20Photos/DSC08620_is6dwa.jpg",
    description: "Description 1",
    products: [
      {
        id: 0,
        price: 19,
        type: "Tee",
        img: `https://res.cloudinary.com/habitatsartorial/image/upload/${productsImageManip}/v1629324137/Fall%20Winter%202021%20Classics%20Product%20Shots/SS%20-%200/DSC08500_2_u1dt0e.jpg`,
        images: [
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629324137/Fall%20Winter%202021%20Classics%20Product%20Shots/SS%20-%200/DSC08500_2_u1dt0e.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629324138/Fall%20Winter%202021%20Classics%20Product%20Shots/SS%20-%200/DSC08807_j8lcm9.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629324140/Fall%20Winter%202021%20Classics%20Product%20Shots/SS%20-%200/DSC08757_qdmmhb.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629324142/Fall%20Winter%202021%20Classics%20Product%20Shots/SS%20-%200/DSC08936_2_izcls5.jpg",
        ],
        description: [
          '"HA317AT" Logo at center of chest',
          "100% 6.1oz ringspun cotton",
          "Preshrunk, soft-washed, garment dyed fabric",
          "Color: Faded khaki green",
        ],
        name: '"HA317AT" Tee',
      },

      {
        id: 1,
        price: 24,
        type: "LS Tee",
        img: `https://res.cloudinary.com/habitatsartorial/image/upload/${productsImageManip}/v1629324480/Fall%20Winter%202021%20Classics%20Product%20Shots/LS%20-%201/DSC08800_mcy0aw.jpg`,
        images: [
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629324480/Fall%20Winter%202021%20Classics%20Product%20Shots/LS%20-%201/DSC08800_mcy0aw.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629324483/Fall%20Winter%202021%20Classics%20Product%20Shots/LS%20-%201/DSC08938_2_xja236.jpg",
        ],
        description: [
          '"HA317AT" Logo at center of chest',
          "100% 6.1oz ringspun cotton",
          "Preshrunk, soft-washed, garment dyed fabric",
          "Color: Faded khaki green",
        ],
        name: '"HA317AT" Longsleeve Tee',
      },

      {
        id: 2,
        price: 26,
        type: "Mockneck Tee",
        img: `https://res.cloudinary.com/habitatsartorial/image/upload/${productsImageManip}/v1629325542/Fall%20Winter%202021%20Classics%20Product%20Shots/3%20-%20MN/DSC08533_2_ix4l9s.jpg`,
        images: [
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629325542/Fall%20Winter%202021%20Classics%20Product%20Shots/3%20-%20MN/DSC08533_2_ix4l9s.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629325547/Fall%20Winter%202021%20Classics%20Product%20Shots/3%20-%20MN/DSC08994_2_bc5pcb.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629325546/Fall%20Winter%202021%20Classics%20Product%20Shots/3%20-%20MN/DSC08990_2_fnlyrm.jpg",
        ],
        description: [
          '"HA317AT" Logo at right-center of collar',
          "Rotary logo at bottom-left of back",
          "100% 6.1oz ringspun cotton",
          "Color: White",
        ],
        name: '"HA317AT" Mockneck Tee',
      },

      {
        id: 3,
        price: 36,
        type: "Cropped Hoodie",
        img: `https://res.cloudinary.com/habitatsartorial/image/upload/${productsImageManip}/v1629324723/Fall%20Winter%202021%20Classics%20Product%20Shots/CH%20-%202/DSC08719_fpdael.jpg`,
        images: [
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629324723/Fall%20Winter%202021%20Classics%20Product%20Shots/CH%20-%202/DSC08719_fpdael.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629324720/Fall%20Winter%202021%20Classics%20Product%20Shots/CH%20-%202/DSC08628_miltm1.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629324723/Fall%20Winter%202021%20Classics%20Product%20Shots/CH%20-%202/DSC08732_ctt4wa.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629324723/Fall%20Winter%202021%20Classics%20Product%20Shots/CH%20-%202/DSC08943_2_giyn3r.jpg",
        ],
        description: [
          '"100%" logo at center of chest',
          '"Habitat Sartorial" logo at top of back',
          "7 oz. fabric: 52% combed ringspun cotton, 48% poly fleece",
          "Drop-shoulder, raw cut hem",
          "Color: Black",
        ],
        name: '"100%" Cropped Hooded Sweatshirt',
      },

      {
        id: 4,
        price: 36,
        type: "Hoodie",
        img: `https://res.cloudinary.com/habitatsartorial/image/upload/${productsImageManip}/v1629325109/Fall%20Winter%202021%20Classics%20Product%20Shots/H%20-%203/DSC08502_cehedf.jpg`,
        images: [
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629325109/Fall%20Winter%202021%20Classics%20Product%20Shots/H%20-%203/DSC08502_cehedf.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629325113/Fall%20Winter%202021%20Classics%20Product%20Shots/H%20-%203/DSC08943_2_hhdhnt.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629325118/Fall%20Winter%202021%20Classics%20Product%20Shots/H%20-%203/DSC08953_2_egj3v1.jpg",
        ],
        description: [
          '"100%" logo at center of chest',
          '"Habitat Sartorial" logo at top of back',
          "7.2 oz. 100% ringspun cotton",
          "Raglan sleeves, kangaroo pocket",
          "Color: Black",
        ],
        name: '"100%" Hooded Sweatshirt',
      },

      {
        id: 5,
        price: 31,
        type: "Sweatshorts",
        img: `https://res.cloudinary.com/habitatsartorial/image/upload/${productsImageManip}/v1629325982/Fall%20Winter%202021%20Classics%20Product%20Shots/5%20-%20S/DSC08502_v2y4fz.jpg`,
        images: [
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629325982/Fall%20Winter%202021%20Classics%20Product%20Shots/5%20-%20S/DSC08502_v2y4fz.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629325808/Fall%20Winter%202021%20Classics%20Product%20Shots/5%20-%20S/DSC08800_jaqdyp.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629325808/Fall%20Winter%202021%20Classics%20Product%20Shots/5%20-%20S/DSC08757_vvwhc0.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629325812/Fall%20Winter%202021%20Classics%20Product%20Shots/5%20-%20S/DSC08958_2_wzrpxs.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629325813/Fall%20Winter%202021%20Classics%20Product%20Shots/5%20-%20S/DSC08963_2_wyfkqe.jpg",
        ],
        description: [
          '"HA317AT" logo across front',
          '"100%" logo on left of back',
          "5.5 inch inseam",
          "8.5 oz. fabric: 52% ringspun cotton, 48% poly fleece",
          "Elastic waistband with drawcord",
          "Back and side pockets",
          "Sewn eyelets",
          "Raw cut hem",
          "Color: Grey",
        ],
        name: '"HA317AT" Sweatshorts',
      },

      {
        id: 6,
        price: 36,
        type: "Sweatpants",
        img: `https://res.cloudinary.com/habitatsartorial/image/upload/${productsImageManip}/v1629326307/Fall%20Winter%202021%20Classics%20Product%20Shots/6%20-%20SP/DSC08706_2_qngolt.jpg`,
        images: [
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629326307/Fall%20Winter%202021%20Classics%20Product%20Shots/6%20-%20SP/DSC08706_2_qngolt.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629326310/Fall%20Winter%202021%20Classics%20Product%20Shots/6%20-%20SP/DSC08807_il98z4.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629326310/Fall%20Winter%202021%20Classics%20Product%20Shots/6%20-%20SP/DSC08628_f0qj42.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629326306/Fall%20Winter%202021%20Classics%20Product%20Shots/6%20-%20SP/DSC08533_2_jrkogu.jpg",
          "https://res.cloudinary.com/habitatsartorial/image/upload/v1629326311/Fall%20Winter%202021%20Classics%20Product%20Shots/6%20-%20SP/DSC08732_t9huw2.jpg",
        ],
        description: [
          '"100%" logo on left of back',
          "Tapered fit, ankle cuffs",
          "8.5 oz. fabric: 52% ringspun cotton, 48% poly fleece",
          "Elastic waistband with drawcord",
          "Back and side pockets",
          "Sewn eyelets",
          "Color: Grey",
        ],
        name: '"100%" Sweatpants',
      },
    ],
  },
  {
    id: "s21-music",
    name: "Summer 2021 Music Collection",
    img: "https://res.cloudinary.com/habitatsartorial/image/upload/v1629430012/Summer%202021%20Music%20Collection/thumb_notext_2_wc7zfz.png",
    description: "Description 2",
    products: [
      {
        id: "Cropped Hoodie",
        price: 36,
        type: "Cropped Hoodie",
        img: cropped_ty,
        images: [baguette, steelyeyed],
        description: "Teagan is silly dumb dumb hehe",
        name: "cropped",
      },
    ],
  },
  // {
  //   id: 2,
  //   name: "Another",
  //   img: baguette,
  //   description: "Description 3",
  //   products: [
  //     {
  //       id: 3,
  //       price: 25,
  //       type: "Sweatpants",
  //       img: steelyeyed,
  //       images: [baguette, steelyeyed],
  //       description: "Tyler is so hot omg",
  //       name: "mwah",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   name: "Third",
  //   img: payne_tyler,
  //   description: "Description 4",
  //   products: [
  //     {
  //       id: 3,
  //       price: 25,
  //       img: steelyeyed,
  //       images: [baguette, steelyeyed],
  //       description: "Woah",
  //       name: "yessir",
  //     },
  //   ],
  // },
];

export default collectionData;
