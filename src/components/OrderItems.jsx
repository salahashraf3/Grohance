import React, { useState, useEffect } from "react";
import formatDate from "../helper/formatDate";
import getCurrencySymbol from "../helper/getCurrencySymbol";
import api from "../utils/axios";

const OrderItems = ({ item }) => {
  const [lineItems, setLineItems] = useState(item.line_items);
  const [total, setTotal] = useState(item.total);

  useEffect(() => {
    const newTotal = lineItems.reduce((acc, item) => acc + item.total * item.quantity,0);
    setTotal(newTotal.toFixed(2));
  }, [lineItems]);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = lineItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );

    setLineItems(updatedItems);
  };

  const updateOrder = async () => {
    try {
      const updatedLineItems = lineItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      }));

      const updatedOrder = {
        line_items: updatedLineItems,
      };

      await api.put(`orders/${item.id}`, updatedOrder);

      alert("Order updated successfully");
    } catch (error) {
      console.error("Error updating order:", error);
      alert("Failed to update order");
    }
  };

  return (
    <tr key={item?.id}>
      <td>#{item?.id}</td>
      <td>{formatDate(item?.date_created)}</td>
      <td>{item?.billing?.first_name}</td>
      <td className="items_td">
        {lineItems.map((lineItem, index) => (
          <div key={lineItem.id} style={{ marginTop: "26px" }}>
            <span>
              {index + 1}. {lineItem.name}
            </span>
          </div>
        ))}
      </td>
      <td>
        {lineItems.map((lineItem) => (
          <div key={lineItem.id} className="qty_container">
            {item?.status === "processing" || item?.status === "completed" ? (
              <input type="number" disabled value={lineItem?.quantity} />
            ) : (
              <>
                <input
                  type="number"
                  value={lineItem.quantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      lineItem.id,
                      parseInt(e.target.value, 10)
                    )
                  }
                />
                <i className="bx bx-check bx-sm" onClick={updateOrder}></i>
                {/* <button onClick={updateOrder}>Save</button> */}
              </>
            )}
          </div>
        ))}
      </td>
      <td>
        <button
          className="status_btn"
          style={{
            backgroundColor:
              item?.status === "pending"
                ? "#dc3545"
                : item?.status === "processing"
                ? "#ffc107"
                : item?.status === "completed"
                ? "#198754"
                : "#0d6efd",
          }}
        >
          {item?.status}
        </button>
      </td>
      <td style={{ textAlign: "end" }}>
        {getCurrencySymbol(item?.currency)}
        {total}
      </td>
    </tr>
  );
};

export default OrderItems;
