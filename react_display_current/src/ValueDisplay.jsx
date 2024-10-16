import React, { useRef, useEffect } from "react";

function ValueDisplay({ value }) {
  const prevValueRef = useRef("");

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  const prevValue = prevValueRef.current;

  return (
    <div className="value-display">
      <p>Текущее значение: {value}</p>
      <p>Предыдущее значение: {prevValue}</p>
    </div>
  );
}

export default ValueDisplay;
