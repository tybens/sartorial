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
    marginBottom: "20px"
  },

  description: {
    margin: "calc(10% + 20px)",
  },

  artistPhoto: {
    padding: "10px",
    backgroundPosition: "center",
    backgroundImage: "url('https://res.cloudinary.com/habitatsartorial/image/upload/v1657591105/2022/Contracts/Henryd/Screen_Shot_2022-07-11_at_18.57.54_afvfik.png')",
    backgroundSize: "contain",
    minHeight: "calc(20vh + 8rem)",
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
      "url('https://res.cloudinary.com/habitatsartorial/image/upload/v1657588036/2022/Contracts/Henryd/Screen_Shot_2022-07-11_at_18.06.07_ytuwnq.png')",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    "&:hover": {
      transform: "scale(1.05)"
    },
  },

  intro: {
    padding: "0 10vw",
  },

  image: {
    position: "absolute",
    zIndex: "0",
  },

  trioContainer: {
    minHeight: "25vh",
    marginTop: "calc(2vw + 20px)"
  },

  productsContainer: {
    border: "dotted black",
    borderWidth: "3px 0 3px 0",
  },
}));