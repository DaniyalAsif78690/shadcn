import AddIcon from "@/assets/Add.svg";
import FunnelSimpleIcon from "@/assets/FunnelSimple.svg";
import UpDownIcon from "@/assets/updown.svg";
import SearchIcon from "@/assets/SearchIcon.svg";
import { Input } from "@/components/ui/input";

export default function OrderListHeader() {
  return (
    <div className="w-full flex flex-col gap-4   items-start  justify-start">
      <div>
        <h1 className="text-lg font-semibold tracking-[-0.01em]">
          
          Order List
        </h1>
      </div>

      <div className=" w-full flex flex-row justify-between  px-2 items-center bg-[#f9f9fa] rounded-2xl p-0.5 ">
        <div className=" flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-muted/20 bg-transparent text-muted-foreground transition hover:bg-muted/10"
          >
            <AddIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-muted/20 bg-transparent text-muted-foreground transition hover:bg-muted/10"
          >
            <FunnelSimpleIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-muted/20 bg-transparent text-muted-foreground transition hover:bg-muted/10"
          >
            <UpDownIcon className="h-5 w-5" />
          </button>
        </div>

        <div>
          <Input
            type="search"
            placeholder="Search"
            className="max-w-55 h-fit"
            prefixIcon={
              <SearchIcon className="h-4 w-4 text-muted-foreground" />
            }
          />
        </div>
      </div>
    </div>
  );
}
