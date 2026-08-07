"use client"

import * as React from "react"
import { DrawerLayoutContext, type DrawerLayoutContextValue } from "./drawerLayoutContext"

export  function DrawerLayoutProvider({ children }: { children: React.ReactNode }) {
  const [rightSidebarOpen, setRightSidebarOpen] = React.useState(false)

  const toggleRightSidebar = React.useCallback(() => {
    setRightSidebarOpen((prev) => !prev)
  }, [])

  const value = React.useMemo<DrawerLayoutContextValue>(
    () => ({
      rightSidebarOpen,
      setRightSidebarOpen,
      toggleRightSidebar,
    }),
    [rightSidebarOpen, toggleRightSidebar]
  )

  return (
    <DrawerLayoutContext.Provider value={value}>
      {children}
    </DrawerLayoutContext.Provider>
  )
}

