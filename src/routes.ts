import { DASHBOARD_PATH, MANAGE_REQUEST, SETTINGS } from "@/constants/paths"
import React from "react"
import { ADMIN_PATH, MANAGE } from "./constants/paths"

const AdminPage = React.lazy(() => import("./pages/admin"))
const ManagePage = React.lazy(() => import("./pages/manage"))
const Dashboard = React.lazy(() => import("./pages/dashboards"))

const routes = [
  {
    path: DASHBOARD_PATH,
    element: Dashboard,
  },
  {
    path: MANAGE_REQUEST,
    element: ManagePage,
  },

  {
    path: SETTINGS,
    element: AdminPage,
  },
]

export default routes
