// useIntersection.js
import { useEffect, useRef } from "react";

const useIntersection = (setBgColor, color = "bg-white", threshold = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgColor(color);
        } else {
          setBgColor("bg-white"); // Vuelve al color blanco al salir de la vista
        }
      },
      { threshold, rootMargin: "0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [color, setBgColor]);

  return ref;
};

export default useIntersection;