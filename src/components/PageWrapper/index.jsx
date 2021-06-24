import React, { useEffect } from "react";

const PageWrapper = (props) => {
  useEffect(() => {
    document.title = props.title ? `Habitat Sartorial | ${props.title} for a cause` : "Habitat Sartorial | Fashion for a cause";
  }, []);

  return props.children;
};

export default PageWrapper;
