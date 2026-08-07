import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Bug, UserPlus, Radio } from "lucide-react";

const notifications = [
  {
    id: "n1",
    title: "You fixed a bug.",
    time: "Just now",
    type: "bug",
  },
  {
    id: "n2",
    title: "New user registered.",
    time: "59 minutes ago",
    type: "user",
  },
  {
    id: "n3",
    title: "You fixed a bug.",
    time: "12 hours ago",
    type: "bug",
  },
  {
    id: "n4",
    title: "Andi Lane subscribed to you.",
    time: "Today, 11:59 AM",
    type: "subscribe",
  },
];

const activities = [
  {
    id: "a1",
    title: "Changed the style.",
    time: "Just now",
    avatar: `https://randomuser.me/api/portraits/men/`,
  },
  {
    id: "a2",
    title: "Released a new version.",
    time: "59 minutes ago",
    avatar: `https://randomuser.me/api/portraits/men/`,
  },
  {
    id: "a3",
    title: "Submitted a bug.",
    time: "12 hours ago",
    avatar: `https://randomuser.me/api/portraits/men/`,
  },
  {
    id: "a4",
    title: "Modified A data in Page X.",
    time: "Today, 11:59 AM",
    avatar: `https://randomuser.me/api/portraits/men/`,
  },
  {
    id: "a5",
    title: "Deleted a page in Project X.",
    time: "Feb 2, 2026",
    avatar:`https://randomuser.me/api/portraits/men/`,
  },
];

const contacts = [
  {
    id: "c1",
    name: "Natali Craig",
    avatar: `https://randomuser.me/api/portraits/men/`,
  },
  {
    id: "c2",
    name: "Drew Cano",
    avatar: `https://randomuser.me/api/portraits/men/`,
  },
  {
    id: "c3",
    name: "Andi Lane",
    avatar: `https://randomuser.me/api/portraits/men/`,
  },
  {
    id: "c4",
    name: "Koray Okumus",
    avatar: `https://randomuser.me/api/portraits/men/`,
  },
  {
    id: "c5",
    name: "Kate Morrison",
    avatar: `https://randomuser.me/api/portraits/men/`,
  },
  {
    id: "c6",
    name: "Melody Macy",
    avatar: `https://randomuser.me/api/portraits/men/`,
  },
];

function NotificationIcon({ type }: { type: string }) {
  if (type === "bug") {
    return <Bug className="size-3.5" />;
  }

  if (type === "user") {
    return <UserPlus className="size-3.5" />;
  }

  if (type === "subscribe") {
    return <Radio className="size-3.5" />;
  }

  return null;
}

interface DashboardDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RightDrawer({
  open,
  onOpenChange,
}: DashboardDrawerProps) {
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
     >
      <DrawerContent
        className="
          fixed
          right-0
          top-0
          bottom-0
          mt-0
          h-screen
          w-[320px]
          max-w-[85vw]
          rounded-none
          border-l
        "
      >
        <DrawerHeader className="px-5 pb-2 pt-5">
          <DrawerTitle className="text-sm font-medium">
            Dashboard
          </DrawerTitle>
        </DrawerHeader>

        <div className="overflow-y-auto px-5 pb-6">
          {/* Notifications */}
          <section className="mb-7">
            <h3 className="mb-3 text-xs font-medium text-foreground">
              Notifications
            </h3>

            <div className="space-y-4">
              {notifications.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3"
                >
                  <div
                    className="
                      flex
                      size-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-muted
                      text-muted-foreground
                    "
                  >
                    <NotificationIcon type={item.type} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium leading-4 text-foreground">
                      {item.title}
                    </p>

                    <p className="mt-0.5 text-[10px] leading-3 text-muted-foreground">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Activities */}
          <section className="mb-7">
            <h3 className="mb-3 text-xs font-medium text-foreground">
              Activities
            </h3>

            <div className="relative space-y-4">
              {/* Timeline line */}
              <div
                
              />

              {activities.map((item,idx) => (
                <div
                  key={item.id}
                  className="relative flex items-start gap-3"
                >
                  <Avatar className="relative z-10 size-6 shrink-0 border-2 border-background">
                    <AvatarImage
                      src={`${item.avatar}${idx}.jpg`}
                      alt={item.title}
                    />

                    <AvatarFallback className="text-[8px]">
                      {item.title.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0">
                    <p className="text-xs font-medium leading-4 text-foreground">
                      {item.title}
                    </p>

                    <p className="mt-0.5 text-[10px] leading-3 text-muted-foreground">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contacts */}
          <section>
            <h3 className="mb-3 text-xs font-medium text-foreground">
              Contacts
            </h3>

            <div className="space-y-3">
              {contacts.map((contact , i) => (
                <div
                  key={contact.id}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-md
                    py-0.5
                    transition-colors
                    hover:bg-muted
                    cursor-pointer
                  "
                >
                  <Avatar className="size-6 shrink-0">
                    <AvatarImage
                      src={`${contact.avatar}${i + 5}.jpg`}

                      alt={contact.name}
                    />

                    <AvatarFallback className="text-[8px]">
                      {contact.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <span className="text-xs font-medium">
                    {contact.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </DrawerContent>
    </Drawer>
  );
}