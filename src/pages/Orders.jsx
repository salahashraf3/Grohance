import React, { useEffect, useState } from "react";
import api from "../utils/axios";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import OrderItems from "../components/OrderItems";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      setIsLoading(true);
      const response = await api.get(`orders`, {
        params: {
          page,
          per_page: 10,
        },
      });
      setOrders(response.data);
      setTotalPages(parseInt(response.headers["x-wp-totalpages"]));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.log("error" + error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="order_container">
      <h2>Orders</h2>

      <div className="search_conatainer">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Search by product"
            name="name"
            onChange={(e) => setSearch(e.target.value)}
            id="name"
          />
          <label htmlFor="name" className="form__label">
            Search by product
          </label>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Status</button>
          <div className="dropdown-content">
            <a href="/#" onClick={() => setFilter("")}>
              All
            </a>
            <a href="/#" onClick={() => setFilter("pending")}>
              Pending
            </a>
            <a href="/#" onClick={() => setFilter("processing")}>
              Processing
            </a>
            <a href="/#" onClick={() => setFilter("completed")}>
              Completed
            </a>
          </div>
        </div>
      </div>

      <div className="table_container">
        {isLoading && <Loader />}

        <table id="customers">
          <thead>
          <tr>
            <th>order ID</th>
            <th>Order Date</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Qty</th>
            <th>Order Status</th>
            <th>Total Amount</th>
          </tr>
          </thead>
          <tbody>
          {orders
            .filter((item) => {
              return filter === "" ? item : item?.status === filter;
            })
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item?.billing?.first_name.toLowerCase().includes(search);
            })
            .map((item, index) => {
              return <OrderItems key={index} item={item} setIsLoading={setIsLoading}/>;
            })}
            </tbody>
        </table>
      </div>

      <div className="pagination_container">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Orders;
