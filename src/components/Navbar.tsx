import StarIcon from "@/assets/star.svg"
import SearchIcon from "@/assets/SearchIcon.svg"
import SunIcon from "@/assets/sun.svg"
import HistoryIcon from "@/assets/history.svg"
import BellIcon from "@/assets/notification.svg"
import LeftSidebarIcon from "@/assets/leftsidebar.svg"
import { Input } from "./ui/input"
import { SidebarTrigger } from "./ui/sidebar"
import { DrawerTrigger } from "@/components/ui/drawer"

function Navbar() {
   
  return (
    <div className="p-4 border-b flex flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <StarIcon className="h-4 w-4 text-muted-foreground" />
        <div className="text-sm leading-none flex flex-row gap-2 items-center">
          <p className="text-muted-foreground text-[12px]">Dashboards /</p>
          <p className="text-[12px]  font-normal">Default</p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-3">
        <div className="min-w-55">
          <Input
            type="search"
            placeholder="Search"
            prefixIcon={<SearchIcon className="h-4 w-4" />}
            suffixIcon={
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center rounded border bg-muted/50 px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span>/</span>
              </kbd>
            }
          />
        </div>

        <button className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground" type="button">
          <SunIcon className="h-4 w-4" />
        </button>
        <button className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground" type="button">
          <HistoryIcon className="h-4 w-4" />
        </button>
        <button className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground" type="button">
          <BellIcon className="h-4 w-4" />
        </button>
        <DrawerTrigger
          type="button"
          aria-label="Open notifications drawer"
          className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground"
        >
          <LeftSidebarIcon className="h-4 w-4" />
        </DrawerTrigger>
      </div>
    </div>
  );
}

export default Navbar;
