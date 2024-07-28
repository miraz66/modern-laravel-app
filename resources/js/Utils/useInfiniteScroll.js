import { useRef, useCallback } from "react";

const useInfiniteScroll = (callback) => {
  const observer = useRef();

  console.log("I am working!");

  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      });

      if (node) observer.current.observe(node);
    },
    [callback]
  );

  return [lastElementRef];
};

export default useInfiniteScroll;
