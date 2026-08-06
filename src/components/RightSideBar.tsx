import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarGroupContent, 
  SidebarProvider
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bug, UserPlus, Radio } from "lucide-react"
 export default  function RightSideBar() {
  // Helper to match notification icons from dataset strings
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "bug": return <Bug className="h-4 w-4 text-zinc-500" />;
      case "user": return <UserPlus className="h-4 w-4 text-zinc-500" />;
      case "subscribe": return <Radio className="h-4 w-4 text-zinc-500" />;
      default: return null;
    }
  };
    const sidebarData = {
  notifications: [
    { id: "n1", title: "You fixed a bug.", time: "Just now", type: "bug" },
    { id: "n2", title: "New user registeRed.", time: "59 minutes ago", type: "user" },
    { id: "n3", title: "You fixed a bug.", time: "12 hours ago", type: "bug" },
    { id: "n4", title: "Andi Lane subscribed to you.", time: "Today, 11:59 AM", type: "subscribe" }
  ],
  activities: [
    { id: "a1", title: "Changed the style.", time: "Just now", avatar: "/avatars/user1.jpg" },
    { id: "a2", title: "Released a new version.", time: "59 minutes ago", avatar: "/avatars/user2.jpg" },
    { id: "a3", title: "Submitted a bug.", time: "12 hours ago", avatar: "/avatars/user3.jpg" },
    { id: "a4", title: "Modified A data in Page X.", time: "Today, 11:59 AM", avatar: "/avatars/user4.jpg" },
    { id: "a5", title: "Deleted a page in Project X.", time: "Feb 2, 2026", avatar: "/avatars/user5.jpg" }
  ],
  contacts: [
    { id: "c1", name: "Natali Craig", avatar: "/avatars/natali.jpg" },
    { id: "c2", name: "Drew Cano", avatar: "/avatars/drew.jpg" },
    { id: "c3", name: "Andi Lane", avatar: "/avatars/andi.jpg" },
    { id: "c4", name: "Koray Okumus", avatar: "/avatars/koray.jpg" },
    { id: "c5", name: "Kate Morrison", avatar: "/avatars/kate.jpg" },
    { id: "c6", name: "Melody Macy", avatar: "/avatars/melody.jpg" }
  ]
};


  return (
    <SidebarProvider defaultOpen={false}>
    <Sidebar  side="right" className="w-80 border-r bg-white">
      <SidebarContent className="gap-6 p-4">
        
        {/* ================= NOTIFICATIONS SECTION ================= */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-foreground px-0 mb-2">
            Notifications
          </SidebarGroupLabel>
          <SidebarGroupContent className="space-y-4">
            {sidebarData.notifications.map((item) => (
              <div key={item.id} className="flex items-start gap-3 text-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  {getNotificationIcon(item.type)}
                </div>
                <div className="space-y-0.5">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</p>
                  <p className="text-xs text-zinc-400">{item.time}</p>
                </div>
              </div>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        {/* ================= ACTIVITIES SECTION ================= */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-foreground px-0 mb-2">
            Activities
          </SidebarGroupLabel>
          <SidebarGroupContent className="relative space-y-4 before:absolute before:bottom-2 before:left-[15px] before:top-2 before:w-[1px] before:bg-zinc-200 dark:before:bg-zinc-800">
            {sidebarData.activities.map((item) => (
              <div key={item.id} className="relative flex items-start gap-3 text-sm">
                <Avatar className="h-8 w-8 shrink-0 border-2 border-background z-10">
                  <AvatarImage src={item.avatar} alt="User" />
                  <AvatarFallback>{item.title[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</p>
                  <p className="text-xs text-zinc-400">{item.time}</p>
                </div>
              </div>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        {/* ================= CONTACTS SECTION ================= */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-foreground px-0 mb-2">
            Contacts
          </SidebarGroupLabel>
          <SidebarGroupContent className="space-y-3">
            {sidebarData.contacts.map((item) => (
              <div key={item.id} className="flex items-center gap-3 text-sm py-0.5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 rounded-md transition-colors cursor-pointer">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarImage src={item.avatar} alt={item.name} />
                  <AvatarFallback>{item.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.name}</span>
              </div>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
    </SidebarProvider>
  )
}
