import { Routes as DomRoutes, Navigate, Route } from "react-router-dom";
import Public from "./RouteTypes/Public";
import Private from "./RouteTypes/Private";
import { RouteDataType } from "./types";
import { ROUTES } from "../utils/routes";
import AnnualPlan from "../screens/plans/annualPlan";
import MonthlyPlan from "../screens/plans/monthlyPlan";

export const RoutesData: { [key: string]: RouteDataType } = {
  monthlyplan: {
    path: ROUTES.monthlyplan,
    component: MonthlyPlan,
    isPrivate: false,
    exact: true,
  },

  annualPlan: {
    path: ROUTES.annualPlan,
    component: AnnualPlan,
    isPrivate: false,
    exact: false,
  },
};

export default function WebRoutes() {
  return (
    <DomRoutes>
      {Object.keys(RoutesData).map((route) => {
        let item: RouteDataType = RoutesData[route];
        return (
          <Route
            key={`web-route-${item.path}`}
            path={item.path}
            element={
              item.isPrivate ? (
                <Private element={item.component} />
              ) : (
                <Public element={item.component} />
              )
            }
          />
        );
      })}
      <Route path="/" element={<Navigate to="/monthly-plan" />} />
    </DomRoutes>
  );
}
