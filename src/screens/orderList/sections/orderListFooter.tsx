import OrderListPagination from "@/screens/orderList/components/Pagination";

function orderListFooter() {
  return (
    <div className="order-list-footer mt-6     ">
      <OrderListPagination />
    </div>
  );
}

export default orderListFooter