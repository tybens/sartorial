import { useState, useEffect, useRef } from "react";

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const refCurr = containerRef;

    if (refCurr.current) observer.observe(refCurr.current);

    return () => {
      if (refCurr.current) observer.unobserve(refCurr.current);
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
};

export default useElementOnScreen;
