import React, { useState } from 'react';

function withHover(Component) {
  return function (props) {
    const [hovering, setHovering] = useState(false);

    const mouseOver = () => setHovering(true);
    const mouseOut = () => setHovering(false);

    return (
      <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <Component {...props} hovering={hovering} />
      </div>
    );
  };
}

export default withHover;
