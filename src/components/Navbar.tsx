 import { Star, Sun, RotateCcwClock, Bell,Search  } from "lucide-react";
import { Input } from "./ui/input";
import { SidebarTrigger } from "./ui/sidebar";
import {useDrawerLayout} from "@/features/useDrawerLayout"; 
import { PanelLeftIcon } from "lucide-react"

function Navbar() {
const {rightSidebarOpen, setRightSidebarOpen} = useDrawerLayout();
  
  return (
    <div className="p-4 border-b flex flex-row justify-between gap-4">
      {/* 1. Put the trigger outside the menu layout for clean spacing */}

      <div >
        <div className="flex flex-row justify-center items-center gap-4">
          <div>
             <SidebarTrigger/>
          </div>
           <div>
           

            <Star size={18} />
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <div>
 <Input
        type="search"
        placeholder="Search"
        // 1. Pass the search icon to the left side
        prefixIcon={<Search className="h-4 w-4" />} 
        // 2. Pass the custom keyboard shortcut badge to the right side
        suffixIcon={
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center rounded border bg-muted/50 px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span>/</span>
          </kbd>
        }
      />        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <Sun size={18} />
          <RotateCcwClock size={18}/>
          <Bell size={18} />
          
          <PanelLeftIcon size={18} onClick={() => setRightSidebarOpen(!rightSidebarOpen)} />
          </div>
         
      </div>
    </div>
  );
}

export default Navbar;
