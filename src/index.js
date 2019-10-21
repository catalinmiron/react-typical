
import React, { useRef, useEffect } from "react";
import { type, type as loopedType } from "@camwiegert/typical";

import styles from './styles.css'

export default function Typical({ steps, loop, className, wrapper = "p" }) {
  const typicalRef = useRef(null);
  const Component = wrapper;

  useEffect(() => {
    if (loop === Infinity) {
      type(typicalRef.current, ...steps, loopedType);
    } else if (typeof loop === "number") {
      type(
        typicalRef.current,
        ...Array(loop)
          .fill(steps)
          .flat()
      );
    } else {
      type(typicalRef.current, ...steps);
    }
  });

  return <Component ref={typicalRef} className={styles.typicalWrapper}/>;
}