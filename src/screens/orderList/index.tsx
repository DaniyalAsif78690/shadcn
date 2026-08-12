import OrderListFooter from "./sections/orderListFooter";
import OrderListHeader from "./sections/orderListHeader";
import OrderListMain from "./sections/orderListMain";

export default function OrderListScreen() {
  return (
    <div className="order-list-screen space-y-6 px-0 py-0">
      <OrderListHeader />
      <OrderListMain />
      <OrderListFooter />
    </div>
  );
}
