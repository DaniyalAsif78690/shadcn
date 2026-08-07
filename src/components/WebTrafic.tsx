import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Indicator } from "@/components/Indicator";

const trafficData = [
  {
    id: "google",
    name: "Google",
    indicator: [8, 5, 5],
  },
  {
    id: "youtube",
    name: "YouTube",
    indicator: [17, 17, 5],
  },
  {
    id: "instagram",
    name: "Instagram",
    indicator: [10, 5, 5],
  },
  {
    id: "pinterest",
    name: "Pinterest",
    indicator: [23, 23, 23],
  },
  {
    id: "facebook",
    name: "Facebook",
    indicator: [8, 5, 5],
  },
  {
    id: "twitter",
    name: "Twitter",
    indicator: [13, 8, 5],
  },
];

export function TrafficByWebsite() {
  return (
    <Card className=" bg-[#F9F9FA] w-[270px] h-[400px]">
      <CardHeader>
        <h3 className="text-sm font-semibold">
          Traffic by Website
        </h3>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          {trafficData.map((website) => (
            <div
              key={website.id}
              className="flex items-center justify-between"
            >
              <span className="text-xs text-foreground">
                {website.name}
              </span>

              <Indicator values={website.indicator} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}