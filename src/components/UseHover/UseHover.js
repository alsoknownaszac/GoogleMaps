import { useState } from "react";

export const useHover = () => {
  const [hovering, setHovering] = useState(false);
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
    onClick: () => setHovering(false),
  };
  // const onClickProps = {  };
  return [hovering, onHoverProps];
};
