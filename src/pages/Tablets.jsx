import React, { useState } from "react";
import Product from "../components/Product";
import { Images } from "../Constants/imageConstant";
import { orderBy } from "lodash";

export default function Tablets() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Xiaomi Pad 6",
      imageUrl: Images.tablets,
      description: "Xiaomi Pad 6| Qualcomm Snapdragon 870|",
      price: 55459,
      qty: 1,
    },
    {
      id: 2,
      name: "Lenovo Tab P12 Pro AMOLED",
      imageUrl: Images.tablets,
      description:
        "Lenovo Tab P12 Pro AMOLED (12.6 inch (32 cm), 8 GB, 256 GB, Wi-fi Only), Storm Grey with Precision Pen 3",
      price: 48459,
      qty: 1,
    },
    {
      id: 3,
      name: "Samsung Galaxy Tab A8",
      imageUrl: Images.tablets,
      description:
        "Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)",
      price: 65459,
      qty: 1,
    },
    {
      id: 4,
      name: "Samsung Galaxy 15.6 inch",
      imageUrl: Images.tablets,
      description:
        "Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet,",
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
