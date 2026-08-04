import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"; 
// 👆 Look: No styling functions imported here at all! Fast Refresh will be happy.

function Navbar() {
  const navbar = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

  // This is the exact underlying Tailwind configuration Shadcn uses for that menu item
  const itemStyles = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

  return (
    <div className="p-4 border-b"> 
      <NavigationMenu>
        <NavigationMenuList>
          {navbar.map((nav, idx) => (
            <NavigationMenuItem key={idx}> 
              <NavigationMenuLink className={itemStyles}>
                {nav}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
