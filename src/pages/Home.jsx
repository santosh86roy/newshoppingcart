import React, { useState } from "react";
import Product from "../components/Product";
import { Images } from "../Constants/imageConstant";
import { orderBy } from "lodash";
import { FaFilter } from "react-icons/fa";

export default function Home() {
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
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      price: 48459,
      qty: 1,
    },
    {
      id: 3,
      name: "MSI Laptop 15.6 inch",
      imageUrl: Images.msi,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
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
      name: "Xiaomi Pad 6",
      imageUrl: Images.tablets,
      description: "Xiaomi Pad 6| Qualcomm Snapdragon 870|",
      price: 55459,
      qty: 1,
    },
    {
      id: 6,
      name: "Lenovo Tab P12 Pro AMOLED",
      imageUrl: Images.tablets,
      description:
        "Lenovo Tab P12 Pro AMOLED (12.6 inch (32 cm), 8 GB, 256 GB, Wi-fi Only), Storm Grey with Precision Pen 3",
      price: 48459,
      qty: 1,
    },
    {
      id: 7,
      name: "Samsung Galaxy Tab A8",
      imageUrl: Images.tablets,
      description:
        "Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)",
      price: 65459,
      qty: 1,
    },
    {
      id: 8,
      name: "Samsung Galaxy 15.6 inch",
      imageUrl: Images.tablets,
      description:
        "Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet,",
      price: 52459,
      qty: 1,
    },
    {
      id: 9,
      name: "Apple iPhone 14",
      imageUrl: Images.mobiles,
      description: "Apple iPhone 14 (128 GB) - Blue",
      price: 55459,
      qty: 1,
    },
    {
      id: 10,
      name: "Apple iPhone 11",
      imageUrl: Images.mobiles,
      description: "Apple iPhone 11 (64GB) - White",
      price: 48459,
      qty: 1,
    },
    {
      id: 11,
      name: "Apple iPhone 13",
      imageUrl: Images.mobiles,
      description: "Apple iPhone 13 (128GB) - Blue",
      price: 65459,
      qty: 1,
    },
    {
      id: 12,
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
