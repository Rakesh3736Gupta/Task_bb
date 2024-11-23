import React, { useState, useEffect } from "react";

function Count({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, 100);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [target]);

  return (
    <div className="flex items-center justify-center">
      <span className="text-5xl font-bold text-blue-900">{count}</span>
      <span className="text-5xl font-bold text-blue-900">{suffix}</span>
    </div>
  );
}

export default Count;
