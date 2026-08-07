import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import RightDrawer from "@/components/RightDrawer";
import {  useDrawerLayout } from "./features/useDrawerLayout";
import { DrawerLayoutProvider } from "./features/drawerContext";
import Main from "./Layout/Main";

function AppContent() {
  const { rightSidebarOpen, setRightSidebarOpen } = useDrawerLayout();

  return (
    <>
      <SidebarProvider id="left-sidebar-provider" defaultOpen={true}>
        <SideBar />

        <SidebarInset className="flex flex-col flex-1 overflow-hidden">
          <Navbar />

          <div className="flex flex-1 w-full h-full relative">
            <main className="flex-1 p-6 overflow-y-auto"> 
<Main/>

            </main>

            <RightDrawer
              open={rightSidebarOpen}
              onOpenChange={setRightSidebarOpen}
            />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

function App() {
  return (
    <DrawerLayoutProvider>
      <AppContent />
    </DrawerLayoutProvider>
  );
}

export default App;
