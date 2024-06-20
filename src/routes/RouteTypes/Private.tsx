import React, { ComponentType } from "react";

interface Props {
  element: ComponentType<any>;
}

const Private: React.FC<Props> = ({ element: Element }) => {
  return <Element />;
};

export default Private;
