import { set } from "immer/src/internal.js";
import { useEffect, useState } from "react";

interface ProductProps {
    category: string,
}

export const ProductList = ({category} : ProductProps) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]); // Add the depencies of the effect in the array so that any time category is changed it's rerendered
  return <div>ProductList</div>;
};
