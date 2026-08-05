import {
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Folder,
  User,
  CreditCard,
  BriefcaseBusiness,
  FileText,
  MessageCircle,
   ChartPie,
  ShoppingBag,
  ChevronDownIcon,
} from "lucide-react";
 import { Button } from "@/components/ui/button";
function SideBar() {
  return (
    <>
      <SidebarProvider>
        <Sidebar>
          {/* Sidebar Header */}
          <SidebarHeader className="flex items-center justify-between  px-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <div className="rounded-full bg-slate-100 p-1">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="">
                    <span className="text-[#000000] text-sm font-medium">
                      ByeWind
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          {/* {<SidebarContent />} */}

          <SidebarContent>
            <SidebarGroup className="flex flex-row gap-2">
              <SidebarGroupLabel>Favorites</SidebarGroupLabel>
              <SidebarGroupLabel>Recently</SidebarGroupLabel>
            </SidebarGroup>
            <SidebarGroup>
              <ul className="list-disc list-inside flex flex-col marker:text-[#00000033]  gap-2">
                <SidebarGroupLabel>
                  <li className="text-[#000000]">Overview</li>
                </SidebarGroupLabel>
                <SidebarGroupLabel>
                  <li className="text-[#000000]">Projects</li>
                </SidebarGroupLabel>
              </ul>
            </SidebarGroup>
            {/* overview */}
            <SidebarGroup className="flex flex-col gap-2">
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <span>
                      <ChartPie />
                    </span>
                    <span className="text-[#000000]">Overview</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarGroupContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <Collapsible className="rounded-md data-open:bg-muted">
                    <CollapsibleTrigger>
                      <Button variant="default" className="w-full    group/btn">
                        {/* Chevron on the far left */}
                        <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/btn:rotate-90" />

                        {/* Shopping Icon */}
                        <ShoppingBag className="h-4 w-4 shrink-0 text-[#000000]" />

                        {/* Text Label */}
                        <span className="truncate font-medium text-sm text-[#000000]">
                          Ecommerce
                        </span>
                      </Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <SidebarMenuItem>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>Products</SidebarMenuSubItem>
                          <SidebarMenuSubItem>Orders</SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <Collapsible className="rounded-md data-open:bg-muted">
                    <CollapsibleTrigger>
                      <Button variant="default" className="w-full    group/btn">
                        {/* Chevron on the far left */}
                        <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/btn:rotate-90" />

                        {/* Shopping Icon */}
                        <Folder className="h-4 w-4 shrink-0 text-[#000000]" />

                        {/* Text Label */}
                        <span className="truncate font-medium text-sm text-[#000000]">
                          Projects
                        </span>
                      </Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <SidebarMenuItem>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>Products</SidebarMenuSubItem>
                          <SidebarMenuSubItem>Orders</SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup className="flex flex-col gap-2">
              <SidebarGroupLabel>Pages</SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  <Collapsible className="rounded-md data-open:bg-muted">
                    <CollapsibleTrigger>
                      <Button variant="default" className="w-full    group/btn">
                        {/* Chevron on the far left */}
                        <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/btn:rotate-90" />

                        {/* Shopping Icon */}
                        <User className="h-4 w-4 shrink-0 text-[#000000]" />

                        {/* Text Label */}
                        <span className="truncate font-medium text-sm text-[#000000]">
                          User Profile
                        </span>
                      </Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <SidebarMenuItem>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>Products</SidebarMenuSubItem>
                          <SidebarMenuSubItem>Orders</SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <a
                        href="/overview"
                        className="flex w-full items-center px-3 py-2 text-sm font-medium"
                      >
                        <span className="text-[#000000]">Overview</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* 2. Projects */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <a
                        href="/projects"
                        className="flex w-full items-center px-3 py-2 text-sm font-medium"
                      >
                        <span className="text-[#000000]">Projects</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* 3. Campaigns */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <a
                        href="/campaigns"
                        className="flex w-full items-center px-3 py-2 text-sm font-medium"
                      >
                        <span className="text-[#000000]">Campaigns</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* 4. Documents */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <a
                        href="/documents"
                        className="flex w-full items-center px-3 py-2 text-sm font-medium"
                      >
                        <span className="text-[#000000]">Documents</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* 5. Followers */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <a
                        href="/followers"
                        className="flex w-full items-center px-3 py-2 text-sm font-medium"
                      >
                        <span className="text-[#000000]">Followers</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <Collapsible className="rounded-md data-open:bg-muted">
                <CollapsibleTrigger>
                  <Button variant="default" className="w-full group/btn">
                    <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/btn:rotate-90" />

                    <CreditCard className="h-4 w-4 shrink-0 text-[#000000]" />

                    <span className="truncate font-medium text-sm text-[#000000]">
                      Accounts
                    </span>
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>Profile</SidebarMenuSubItem>
                      <SidebarMenuSubItem>Billing</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
            <SidebarGroup>
              <Collapsible className="rounded-md data-open:bg-muted">
                <CollapsibleTrigger>
                  <Button variant="default" className="w-full group/btn">
                    <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/btn:rotate-90" />

                    <BriefcaseBusiness className="h-4 w-4 shrink-0 text-[#000000]" />

                    <span className="truncate font-medium text-sm text-[#000000]">
                      Corporate
                    </span>
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>Company</SidebarMenuSubItem>
                      <SidebarMenuSubItem>Teams</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
            <SidebarGroup>
              <Collapsible className="rounded-md data-open:bg-muted">
                <CollapsibleTrigger>
                  <Button variant="default" className="w-full group/btn">
                    <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/btn:rotate-90" />

                    <FileText className="h-4 w-4 shrink-0 text-[#000000]" />

                    <span className="truncate font-medium text-sm text-[#000000]">
                      Blog
                    </span>
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>Posts</SidebarMenuSubItem>
                      <SidebarMenuSubItem>Categories</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
            <SidebarGroup>
              <Collapsible className="rounded-md data-open:bg-muted">
                <CollapsibleTrigger>
                  <Button variant="default" className="w-full group/btn">
                    <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/btn:rotate-90" />

                    <MessageCircle className="h-4 w-4 shrink-0 text-[#000000]" />

                    <span className="truncate font-medium text-sm text-[#000000]">
                      Social
                    </span>
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>Messages</SidebarMenuSubItem>
                      <SidebarMenuSubItem>Communities</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </>
  );
}

export default SideBar;
