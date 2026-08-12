import { Outlet } from "react-router";
import { useState } from "react";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import RightDrawer from "@/components/RightDrawer";

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <RightDrawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SidebarProvider id="left-sidebar-provider" defaultOpen={true}>
          <SideBar />

          <SidebarInset className="flex flex-col flex-1 overflow-hidden">
            <Navbar />

            <div className="flex flex-1 w-full h-full relative">
              <main className="flex-1 p-6 overflow-y-auto">
                <Outlet />
              </main>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </RightDrawer>{" "}
    </>
  );
}
