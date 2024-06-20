import { NavLink, useNavigate } from "react-router-dom";
import CustomButton from "../../atom/button";
import { useState } from "react";

interface MenuProps {
  pages: DashboardPage[];
  isDashboardPage: boolean;
}
type DashboardPage = {
  name: string;
  route: string;
};

const Menu: React.FC<MenuProps> = ({ pages, isDashboardPage = true }) => {
  const navigate = useNavigate();
  const [activeSubPage, setActiveSubPage] = useState<string>("gpt-4");

  return (
    <div className="flex w-full">
      <div className="px-3 py-2 rounded-[57px] border border-white border-opacity-20 flex gap-6">
        {isDashboardPage
          ? pages.map((page) => (
              <NavLink key={page.name} to={page.route}>
                {({ isActive }) => (
                  <div key={page.name}>
                    <CustomButton
                      label={page.name}
                      onClick={() => {
                        navigate(page.route);
                      }}
                      backgroundColor={isActive ? "bg-white bg-opacity-25" : ""}
                      borderRadius="rounded-full"
                      className="px-3 py-2"
                    />
                  </div>
                )}
              </NavLink>
            ))
          : pages.map((subPage) => (
              <div key={subPage.name}>
                <CustomButton
                  label={subPage.name}
                  onClick={() => {
                    setActiveSubPage(subPage.route);
                  }}
                  backgroundColor={
                    subPage.route === activeSubPage
                      ? "bg-white bg-opacity-25"
                      : ""
                  }
                  borderRadius="rounded-full"
                  className="px-3 py-2"
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Menu;
