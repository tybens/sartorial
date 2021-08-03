import henryVid from "assets/vids/henryvid.mp4";

const defaultPost = {
    imgSrc: "https://i.ibb.co/YLmzhgp/construction-4445367-1920-2.jpg",
    imgDesc: "Example image description",
    types: [
      {
        name: "Construction",
        bgColor: "#fcb941",
      },
      {
        name: "Market",
        bgColor: "#FC6042",
      },
    ],
    date: "14 Jan 2021",
    author: "Tyler Benson",
    title: "TOP 5 Ways to Choose Bricks made from manufactured stone",
    text: "Brampton Brick® Select Series is a cost-effective clay brick product series...",
    id: "0",
    vidSrc: henryVid,
    vidDesc: "Example video description",
  };

const postsData = [
    defaultPost,
    defaultPost,
    defaultPost,
    defaultPost
]

export default postsData;