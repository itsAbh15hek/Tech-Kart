import React, { useState } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router";
import Filters from "../components/Filters";
import Products from "../components/Products";

const Categories = () => {
  const [filters, setFilters] = useState({
    delivery: false,
    inStock: false,
    expensive: false,
  });
  const Location = useLocation();
  const { categoryData, otherCategoryData } = Location.state;
  const categoryId = categoryData.id;

  return (
    <div>
      <Header
        categoryData={categoryData}
        otherCategoryData={otherCategoryData}
      />
      <div className="categories">
        <Filters filters={filters} setFilters={setFilters} />
        <div className="scroll">
          <Products filters={filters} categoryId={categoryId} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
