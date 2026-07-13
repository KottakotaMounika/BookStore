import SellerLayout from "../../layouts/SellerLayout";

function Orders() {
  return (
    <SellerLayout>
      <h2>My Orders</h2>
      <hr />

      <div className="card shadow p-4">
        <h4>No Orders Yet</h4>
        <p>Orders placed by users will appear here.</p>
      </div>
    </SellerLayout>
  );
}

export default Orders;