import React, { useState } from "react";
import Product from "../components/Product";
import { Images } from "../Constants/imageConstant";
import { orderBy } from "lodash";
import { FaFilter } from "react-icons/fa";

export default function Laptops() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dell Laptop 15.6 inch",
      imageUrl: Images.dell,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: 55459,
      qty: 1,
    },
    {
      id: 2,
      name: "Lenovo Laptop 15.6 inch",
      imageUrl: Images.lenovo,
      description: "'Lenovo IdeaPad Slim 5 Intel Core i5 12450H 14",
      price: 48459,
      qty: 1,
    },
    {
      id: 3,
      name: "MSI Laptop 15.6 inch",
      imageUrl: Images.msi,
      description: "Xiaomi [Smartchoice] Notebookpro",
      price: 65459,
      qty: 1,
    },
    {
      id: 4,
      name: "Hp Laptop 15.6 inch",
      imageUrl: Images.hp,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: 52459,
      qty: 1,
    },
    {
      id: 5,
      name: "Apple MacBook Air Laptop",
      imageUrl: Images.laptops,
      description:
        "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display,",
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
      <div className="md:px-8 md:py-6 px-0 py-0">
        <div className="flex justify-between items-center px-2">
          <label htmlFor="dropdown" className="font-medium">
            <FaFilter />
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
        <div className="grid md:grid-cols-3 grid-cols-1">
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
