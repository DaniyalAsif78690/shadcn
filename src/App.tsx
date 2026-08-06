import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
 function App() {

  return (
    // 1. The outer provider manages your Left Sidebar
   <>
   
    <SidebarProvider id="left-sidebar-provider" defaultOpen={true}
     
    >
      <SideBar
     
      ></SideBar>

      {/* Your left sidebar component */}
 
      {/* 2. SidebarInset ensures main content scales correctly when left collapses */}
      <SidebarInset className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        
        {/* 3. The inner provider manages your Right Sidebar independent of the left */}
           <div className="flex flex-1 w-full h-full relative">
            
            {/* Main content area */}
            <main className="flex-1 p-6 overflow-y-auto">
              Content goes here
            </main>

            {/* Your second sidebar component configured for the right side */}
 
          </div>
      </SidebarInset>
              </SidebarProvider>

   </>
   );
}

export default App;
