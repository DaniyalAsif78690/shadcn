import * as React from "react"

export type DrawerLayoutContextValue = {
  rightSidebarOpen: boolean
  setRightSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleRightSidebar: () => void
}

export const DrawerLayoutContext = React.createContext<DrawerLayoutContextValue | null>(null)
