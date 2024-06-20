import React, { ComponentType } from "react";
import DashBoardWrapper from "../../components/organism/DashBoardWrapper/DashBoardWrapper";

interface Props {
  element: ComponentType<any>;
}

const Public: React.FC<Props> = ({ element: Element }) => {
  return (
    <DashBoardWrapper>
      <Element />
    </DashBoardWrapper>
  );
};

export default Public;
