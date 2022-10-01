import * as React from 'react';

const TileTransparentLayer = ({ color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 225 315"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    {...props}
  >
    <path
      d="M150 383.225V83.173v57.799-57.799 300.052ZM0 315V131.02h.138c2.931 25.065 52.116 45.008 112.362 45.008s109.431-19.943 112.362-45.008H225V315H0Z"
      fill={color}
    />
  </svg>
);

export default TileTransparentLayer;
