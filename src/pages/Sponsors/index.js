import React, { useEffect } from "react";
import FunctionCaller from "components/FunctionCaller";

const Sponsors = ({ setNavColors }) => {
  const showFunctionCaller = false;

  useEffect(() => {
    const navColorsSponsors = { background: "black", color: "white" };
    const navColors = { background: "white", color: "black" };

    setNavColors(navColorsSponsors);
    return () => {
      setNavColors(navColors);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="view">
      <h1>Sponsors</h1>
      <div className="media" id="media">
        <div className="content--inner" id="content--inner">
          <p className="content--excerpt" id="content--excerpt">
            Your business here:
          </p>
          {showFunctionCaller && <FunctionCaller />}
        </div>
        <div className="content--inner" id="content--inner">
          <p className="content--excerpt" id="content--excerpt"></p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
