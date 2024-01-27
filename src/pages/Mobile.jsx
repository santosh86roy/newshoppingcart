import React, { useState } from "react";
import Product from "../components/Product";
import { Images } from "../Constants/imageConstant";
import { orderBy } from "lodash";

export default function Mobiles() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple iPhone 14",
      imageUrl: Images.mobiles,
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 55459,
      qty: 1,
    },
    {
      id: 2,
      name: "Apple iPhone 11",
      imageUrl: Images.mobiles,
      description: "Apple iPhone 11 (64GB) - White",
      price: 48459,
      qty: 1,
    },
    {
      id: 3,
      name: "Apple iPhone 13",
      imageUrl: Images.mobiles,
      description: "Apple iPhone 13 (128GB) - Blue",
      price: 65459,
      qty: 1,
    },
    {
      id: 4,
      name: "Apple iPhone 15",
      imageUrl: Images.mobiles,
      description: "Apple iPhone 15 (128GB) - Black",
      price: 52459,
      qty: 1,
    },
  ]);

  const [selectedSortByValue, setSelectedSortByValue] = useState("");

  const handleDropdownChange = (event) => {
    const newValue = event.target.value;
    setSelectedSortByValue(newValue);
    sortBy(newValue);
  };

  const sortBy = (order) => {
    console.log(order);
    const sortedProducts = orderBy(products, ["price"], order);
    console.log(sortedProducts);
    setProducts(sortedProducts);
  };

  return (
    <>
      <div className="px-8 py-6">
        <div className="flex justify-end">
          <label htmlFor="dropdown" className="font-medium">
            Sort By
          </label>
          <select
            id="dropdown"
            value={selectedSortByValue}
            onChange={handleDropdownChange}
          >
            <option value="asc">Price Low to High</option>
            <option value="desc">Price High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-3">
          {products.map((product) => {
            return (
              <div className="p-4" key={product.id}>
                <Product product={product}></Product>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
