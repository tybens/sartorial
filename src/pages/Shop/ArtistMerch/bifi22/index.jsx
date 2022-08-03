import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const BiFiRouter = ({ history }) => {
  useEffect(() => {
    history.push(`${history.location.pathname}/products`)
    // eslint-disable-next-line
  }, [])
  
  return null;  
};

export default withRouter(BiFiRouter);
