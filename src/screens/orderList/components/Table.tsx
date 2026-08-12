import { CalendarDays } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

const orders = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusClass: "text-violet-700 bg-violet-100",
    selected: false,
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "1 minute ago",
    status: "Complete",
    statusClass: "text-emerald-700 bg-emerald-100",
    selected: false,
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusClass: "text-sky-700 bg-sky-100",
    selected: false,
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusClass: "text-amber-700 bg-amber-100",
    selected: false,
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2026",
    status: "Rejected",
    statusClass: "text-slate-700 bg-slate-100",
    selected: false,
  },
];

export function TableOrder() {
  return (
    <div className="overflow-hidden border border-muted/20">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-13 px-4 py-3 text-left text-[12px] leading-4 uppercase tracking-[0.25em] text-muted-foreground">
              <Checkbox />
            </TableHead>
            <TableHead className="w-30 py-3 text-left text-[12px] leading-4 uppercase tracking-[0.25em] text-muted-foreground">
              Order ID
            </TableHead>
            <TableHead className="py-3 text-left text-[12px] leading-4 uppercase tracking-[0.25em] text-muted-foreground">
              User
            </TableHead>
            <TableHead className="py-3 text-left text-[12px] leading-4 uppercase tracking-[0.25em] text-muted-foreground">
              Project
            </TableHead>
            <TableHead className="py-3 text-left text-[12px] leading-4 uppercase tracking-[0.25em] text-muted-foreground">
              Address
            </TableHead>
            <TableHead className="py-3 text-left text-[12px] leading-4 uppercase tracking-[0.25em] text-muted-foreground">
              Date
            </TableHead>
            <TableHead className="py-3 text-left text-[12px] leading-4 uppercase tracking-[0.25em] text-muted-foreground">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              className={
                "group " +
                (order.selected ? "bg-muted/20" : "hover:bg-muted/20")
              }
            >
              <TableCell className="px-4 py-3">
                <div
                  className={
                    order.selected
                      ? "opacity-100"
                      : "opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  }
                >
                  <Checkbox defaultChecked={order.selected} />
                </div>
              </TableCell>
              <TableCell className="font-medium text-[12px] leading-4 text-foreground py-3">{order.id}</TableCell>
              <TableCell className="py-3">
                <div className="flex items-center gap-3 text-[12px] leading-4 text-foreground">
                  <Avatar className="relative z-10 h-8 w-8 rounded-full">
                    <AvatarImage src={order.avatar} />
                    <AvatarFallback>{order.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{order.user}</span>
                </div>
              </TableCell>
              <TableCell className="py-3 text-[12px] leading-4 text-foreground">{order.project}</TableCell>
              <TableCell className="py-3 text-[12px] leading-4 text-foreground">{order.address}</TableCell>
              <TableCell className="py-3 text-[12px] leading-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {order.date}
                </div>
              </TableCell>
              <TableCell className="py-3">
                <span className={`inline-flex rounded-full px-3 py-1 text-[12px] leading-4 font-semibold ${order.statusClass}`}>
                  {order.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
