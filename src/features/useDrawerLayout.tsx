import * as React from "react"
import { DrawerLayoutContext } from "./drawerLayoutContext"

export function useDrawerLayout() {
  const context = React.useContext(DrawerLayoutContext)

  if (!context) {
    throw new Error("useDrawerLayout must be used within a DrawerLayoutProvider")
  }

  return context
}
