import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

const FunctionCaller = () => {
  //   const [codes, setCodes] = useState([]);
  const localFunction = true;

  const functionUrl = localFunction
    ? "http://localhost:5001/sartorial-indy/us-central1/addDataToFirestore"
    : "https://us-central1-sartorial-indy.cloudfunctions.net/addDataToFirestore";
    
  const handleClick = () => {
    axios.post(
      functionUrl,
      { body: "haha" },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // setCodes(data);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Generate Codes
      </Button>
      {/* {codes.map(({ code }) => (
        <Typography variant="body1" color="primary">
          {code}
        </Typography>
      ))} */}
    </div>
  );
};

export default FunctionCaller;
