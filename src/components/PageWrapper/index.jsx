import { useEffect } from "react";

const PageWrapper = (props) => {
  useEffect(() => {
    document.title = props.title ? `Habitat Sartorial | ${props.title} for a cause` : "Habitat Sartorial | Fashion for a cause";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return props.children;
};

export default PageWrapper;
