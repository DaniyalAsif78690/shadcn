import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DashboardScreen from "@/screens/dashboard";
import OrderListHeader from "@/screens/orderList/index"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Layout from "@/Layout/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<DashboardScreen />} />
            <Route path="/orderList" element={<OrderListHeader />} />

    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
