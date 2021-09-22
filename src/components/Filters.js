import React from "react";

const Filters = ({ filters, setFilters }) => {
  const { delivery, inStock, expensive } = filters;
  return (
    <div className="filter">
      <div>
        <label htmlFor="delivery">
          <input
            type="checkbox"
            onChange={() =>
              setFilters({
                delivery: !delivery,
                inStock: inStock,
                expensive: expensive,
              })
            }
          />
          <span> Delivery</span>
        </label>
        <label htmlFor="in-stock">
          <input
            type="checkbox"
            onChange={() =>
              setFilters({
                delivery: delivery,
                inStock: !inStock,
                expensive: expensive,
              })
            }
          />
          <span> Only In-Stock</span>
        </label>
        <label htmlFor="expensive">
          <input
            type="checkbox"
            onChange={() =>
              setFilters({
                delivery: delivery,
                inStock: inStock,
                expensive: !expensive,
              })
            }
          />
          <span> Expensive</span>
        </label>
      </div>
    </div>
  );
};

export default Filters;
