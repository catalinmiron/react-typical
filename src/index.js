
import React, { useRef, useEffect, memo } from "react";
import { type, type as loopedType } from "@camwiegert/typical";

import styles from './styles.css'

const Typical = ({ steps, loop, className, wrapper = "p" }) => {
  const typicalRef = useRef(null);
  const Component = wrapper;
  const classNames = [styles.typicalWrapper];
  
  if (className) {
    classNames.unshift(className);
  }

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

  return <Component ref={typicalRef} className={classNames.join(' ')}/>;
}

export default memo(Typical)
