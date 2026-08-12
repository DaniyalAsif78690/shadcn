import {
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenu,
  SidebarMenuItem,
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
import { ChevronDownIcon } from "lucide-react";
import OverviewIcon from "@/assets/overview.svg"
import ShoppingIcon from "@/assets/ShoppingBagOpen.svg"
import ProjectIcon from "@/assets/project.svg"
import UserIcon from "@/assets/user.svg"
import AccountIcon from "@/assets/Acc.svg"
import CorporateIcon from "@/assets/corporate.svg"
import BlogIcon from "@/assets/blog.svg"
import SocialIcon from "@/assets/social.svg"
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
function SideBar() {
  return (
    <>
        <Sidebar className="bg-white">
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
              <SidebarGroupLabel className="text-[#00000066]/40">Favorites</SidebarGroupLabel>
              <SidebarGroupLabel  className="text-[#00000066]/40 text-[12px] font-normal" >Recently</SidebarGroupLabel>
            </SidebarGroup>
            <SidebarGroup>
              <ul className="list-disc list-inside flex flex-col marker:text-[#00000033]/100  gap-2">
                <SidebarGroupLabel>
                  <li className="text-[#000000] text-[14px] font-normal">Overview</li>
                </SidebarGroupLabel>
                <SidebarGroupLabel>
                  <li className="text-[#000000] text-[14px] font-normal">Projects</li>
                </SidebarGroupLabel>
              </ul>
            </SidebarGroup>
            {/* overview */}
            <SidebarGroup className="flex flex-col gap-2">
              <SidebarGroupLabel className="text-[#00000033] text-[14px] font-normal">Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link to="/" className="flex w-full items-center gap-3 px-3 py-2">
                        <OverviewIcon className="h-5 w-5" />
                        <span className="text-[#000000] text-[14px] font-normal ">Overview</span>
                      </Link>
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
                        <ShoppingIcon className="h-5 w-5 shrink-0 text-[#000000]" />

                        {/* Text Label */}
                        <span  className="text-[#000000] text-[14px] font-normal ">
                          Ecommerce
                        </span>
                      </Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <SidebarMenuItem>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem className="text-[#000000] text-[14px] font-normal ">Products</SidebarMenuSubItem>
                          <SidebarMenuSubItem className="text-[#000000] text-[14px] font-normal ">
                            <Link to="/orderList">Orders</Link>
                          </SidebarMenuSubItem>
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

                        {/* Project Icon */}
                        <ProjectIcon className="h-5 w-5 shrink-0 text-[#000000]" />

                        {/* Text Label */}
                        <span className="text-[#000000] text-[14px] font-normal ">
                          Projects
                        </span>
                      </Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <SidebarMenuItem>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Products</SidebarMenuSubItem>
                          <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Orders</SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup className="flex flex-col gap-2">
              <SidebarGroupLabel className="text-[#00000033] text-[14px] font-normal">Pages</SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  <Collapsible className="rounded-md data-open:bg-muted">
                    <CollapsibleTrigger>
                      <Button variant="default" className="w-full    group/btn">
                        {/* Chevron on the far left */}
                        <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/btn:rotate-90" />

                        {/* User Icon */}
                        <UserIcon className="h-5 w-5 shrink-0 text-[#000000]" />

                        {/* Text Label */}
                        <span  className="text-[#000000] text-[14px] font-normal ">
                          User Profile
                        </span>
                      </Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                      <SidebarMenuItem>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Products</SidebarMenuSubItem>
                          <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Orders</SidebarMenuSubItem>
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
                      <Link
                        to="/overview"
                        className="flex w-full items-center px-3 py-2 text-sm font-medium"
                      >
                        <span className="text-[#000000] text-[14px] font-normal ">Overview</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* 2. Projects */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link
                        to="/projects"
                        className="flex w-full items-center px-3 py-2 text-sm font-medium"
                      >
                        <span className="text-[#000000] text-[14px] font-normal ">Projects</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* 3. Campaigns */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link
                        to="/campaigns"
                        className="flex w-full items-center px-3 py-2 text-sm font-medium"
                      >
                        <span  className="text-[#000000] text-[14px] font-normal ">Campaigns</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* 4. Documents */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link
                        to="/documents"
                        className="flex w-full items-center px-3 py-2 text-sm font-medium"
                      >
                        <span  className="text-[#000000] text-[14px] font-normal ">Documents</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* 5. Followers */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link
                        to="/followers"
                        className="flex w-full items-center px-3 py-2 text-sm font-medium"
                      >
                        <span  className="text-[#000000] text-[14px] font-normal ">Followers</span>
                      </Link>
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

                    <AccountIcon className="h-5 w-5 shrink-0 text-[#000000]" />

                    <span  className="text-[#000000] text-[14px] font-normal ">
                      Accounts
                    </span>
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Profile</SidebarMenuSubItem>
                      <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Billing</SidebarMenuSubItem>
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

                    <CorporateIcon className="h-5 w-5 shrink-0 text-[#000000]" />

                    <span  className="text-[#000000] text-[14px] font-normal ">
                      Corporate
                    </span>
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Company</SidebarMenuSubItem>
                      <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Teams</SidebarMenuSubItem>
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

                    <BlogIcon className="h-5 w-5 shrink-0 text-[#000000]" />

                    <span  className="text-[#000000] text-[14px] font-normal ">
                      Blog
                    </span>
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Posts</SidebarMenuSubItem>
                      <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Categories</SidebarMenuSubItem>
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

                    <SocialIcon className="h-5 w-5 shrink-0 text-[#000000]" />

                    <span  className="text-[#000000] text-[14px] font-normal ">
                      Social
                    </span>
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Messages</SidebarMenuSubItem>
                      <SidebarMenuSubItem  className="text-[#000000] text-[14px] font-normal ">Communities</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
     </>
  );
}

export default SideBar;
