import { useEffect } from "react";

const useIntersectionObserver = (ref, { onEnter, threshold = [0, 1] }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onEnter && onEnter();
          }
        });
      },
      {
        threshold,
        rootMargin: "0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, onEnter, threshold]);
};

export default useIntersectionObserver;
