import React from "react";
import {
  logo,
  sideMenuIcon1,
  sideMenuIcon2,
  sideMenuIcon3,
  sideMenuIcon4,
  sideMenuIcon5,
} from "../../../assets/icon";
import CustomButton from "../../atom/button";
import Menu from "../Menu/Menu";
import { DashboardPages } from "../../../utils/routes";

type Props = {
  children: React.ReactNode;
};

const DashBoardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className=" h-screen mx-auto ">
      {/* Header */}
      <div className=" flex justify-between items-center p-4 bg-[#161616]">
        <div className="flex items-center gap-6 ">
          <img src={logo} alt="logo" />
          <div className="w-px h-[63px] bg-white opacity-20"></div>
          <p className="text-[24px] font-bold">Pro Plans</p>
        </div>

        <div className=" flex justify-center items-center  ">
          <Menu pages={DashboardPages} isDashboardPage />
        </div>
        <div className="mr-10">
          <CustomButton
            label="X Close"
            backgroundColor="bg-[#1E1E1E]"
            onClick={() => {}}
          />
        </div>
      </div>
      {/* SideBar */}
      <div className="flex ">
        <div className="py-6 px-4 m-4 w-1/10 min-h-96 bg-[#161616] flex flex-col gap-20 rounded-[30px] ">
          <div className="flex flex-col gap-4">
            <img src={sideMenuIcon1} alt="side-menu-icon" />
            <img src={sideMenuIcon2} alt="side-menu-icon" />
            <img src={sideMenuIcon3} alt="side-menu-icon" />
            <img src={sideMenuIcon4} alt="side-menu-icon" />
            <img src={sideMenuIcon5} alt="side-menu-icon" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={sideMenuIcon1} alt="side-menu-icon" />
            <img src={sideMenuIcon2} alt="side-menu-icon" />
            <img src={sideMenuIcon3} alt="side-menu-icon" />
            <img src={sideMenuIcon4} alt="side-menu-icon" />
            <img src={sideMenuIcon5} alt="side-menu-icon" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={sideMenuIcon1} alt="side-menu-icon" />
            <img src={sideMenuIcon2} alt="side-menu-icon" />
            <img src={sideMenuIcon3} alt="side-menu-icon" />
            <img src={sideMenuIcon4} alt="side-menu-icon" />
            <img src={sideMenuIcon5} alt="side-menu-icon" />
          </div>
        </div>
        <div className=" p-4 w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashBoardWrapper;
