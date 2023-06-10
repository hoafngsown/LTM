import { DASHBOARD_PATH, MANAGE_LOCATION, SETTINGS } from "@/constants/paths";
import React from "react";

const AdminPage = React.lazy(() => import("./pages/admin"));
const ManageLocationPage = React.lazy(() => import("./pages/manage"));
const Dashboard = React.lazy(() => import("./pages/dashboards"));

const routes = [
  {
    path: DASHBOARD_PATH,
    element: Dashboard,
  },
  {
    path: MANAGE_LOCATION,
    element: ManageLocationPage,
  },

  {
    path: SETTINGS,
    element: AdminPage,
  },
];

export default routes;
