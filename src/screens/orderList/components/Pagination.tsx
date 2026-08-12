 
import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

function OrderListPagination() {
  return (
    <div className="order-list-pagination flex justify-center py-4">
      <UIPagination className="flex items-center gap-2 px-0 py-0">
        <PaginationContent className="flex items-center gap-2">
        
          {[1, 2, 3, 4, 5].map((page) => (
            <PaginationItem className="border rounded-2xl w-40 flex justify-center items-center" key={page}>
              <PaginationLink
                href="#"
                isActive={page === 1}
                className={
                  "inline-flex h-7 min-w-12 items-center justify-center rounded-full border text-sm font-medium " +
                  (page === 1
                    ? "border-muted/30 bg-muted/10 text-foreground"
                    : "border-muted/20 bg-transparent text-muted-foreground")
                }
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
           <PaginationItem>
            <PaginationPrevious
              href="#"
              text=""
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-muted/20 bg-transparent p-0 text-muted-foreground"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text=""
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-muted/20 bg-transparent p-0 text-muted-foreground"
            />
          </PaginationItem>
           
        </PaginationContent>
      </UIPagination>
    </div>
  );
}

export default OrderListPagination;
