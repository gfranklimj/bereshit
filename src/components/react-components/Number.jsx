import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";

export default function Numbers({ id, item }) {
  const itemRef = useRef(null);

  const { start, pauseResume } = useCountUp({
    ref: itemRef,
    ...item.options,
  });

  useEffect(() => {
    if (start && pauseResume) {
      start();
      pauseResume();
    }
  }, [start, pauseResume]);

  return (
    <>
      <div className="text-center">
        <h2
          className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1"
          ref={itemRef}
        >
          {item.defaultText}
        </h2>
        <p className="mt-2 text-heading-3">{item.title}</p>
      </div>
    </>
  );
}
