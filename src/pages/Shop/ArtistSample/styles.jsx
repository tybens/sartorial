import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    minHeight: "60vh",
  },

  containerInner: {
    zIndex: 3,
    background: "white",
    borderRadius: 10,
    border: "2px solid black",
    maxWidth: 500,
    width: "calc(75% - 0.5em)",
    margin: "0.25em",
    minWidth: 280,
    minHeight: 200,
    padding: 30,
  },

  noMargin: {
    marginTop: 0,
  },

  titleContainer: {
    margin: "20px 0",
  },

  subTitle: {
    fontWeight: "bold",
  },

  artistPhoto: {
    padding: "10px",
    backgroundPosition: "center",
    backgroundImage: "url('https://res.cloudinary.com/habitatsartorial/image/upload/v1629326307/Fall%20Winter%202021%20Classics%20Product%20Shots/6%20-%20SP/DSC08706_2_qngolt.jpg')",
    backgroundSize: "contain",
  },

  productsLink: {
    fontSize: "calc(2vw + 25px)",
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "0.125s ease-in-out",
    padding: "10vh",
    width: "50vw",
    margin: "10vh 0",
    minWidth: "100px",
    backgroundImage:
      "url('https://res.cloudinary.com/habitatsartorial/image/upload/v1629430012/Summer%202021%20Music%20Collection/thumb_notext_2_wc7zfz.png')",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    "&:hover": {
      transform: "scale(1.05)"
    },
  },

  image: {
    position: "absolute",
    zIndex: "0",
  },

  trioContainer: {
    minHeight: "25vh",
  },

  productsContainer: {
    border: "dotted black",
    borderWidth: "3px 0 3px 0",
  },
}));
