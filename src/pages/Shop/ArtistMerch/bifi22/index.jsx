import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BiFiRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${location.pathname}/products`)
    // eslint-disable-next-line
  }, [])
  
  return null;  
};

export default BiFiRouter;
