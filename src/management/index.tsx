// OrderManagement.tsx
import React, { useState, useEffect } from "react";
import OrdersTable from "../components/table/table";
import OrdersFilter from "../filter/index";
import useGet from "../hooks/useGet";

interface Order {
  id: number;
  customerName: string;
  status: string;
  date: string;
  amount: number;
  details: string;
}

const OrderManagement: React.FC = () => {
  const { data, isLoading } = useGet("/orders");
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (data) {
      setFilteredOrders(data);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleFilter = (
    status: string,
    startDate: string,
    endDate: string,
    search: string
  ) => {
    let filtered = data || [];

    if (status) filtered = filtered.filter((order) => order.status === status);
    if (startDate)
      filtered = filtered.filter((order) => order.date >= startDate);
    if (endDate) filtered = filtered.filter((order) => order.date <= endDate);
    if (search)
      filtered = filtered.filter(
        (order) =>
          order.customerName.toLowerCase().includes(search.toLowerCase()) ||
          order.id.toString().includes(search)
      );

    setFilteredOrders(filtered);
  };

  return (
    <div className="container">
      <OrdersFilter onFilter={handleFilter} />
      <OrdersTable orders={filteredOrders} />
    </div>
  );
};

export default OrderManagement;
