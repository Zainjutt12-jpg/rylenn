'use client';
import Items from "@/components/Items/pages";
import { fetchDataWithParams } from "@/integration/getData";
import { useEffect, useState } from 'react';

export default function NewArrivals() {
  const [products, setProducts] = useState<any[]>([]);
  const [newArrivalProducts, setNewArrivalProducts] = useState<any[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchDataWithParams<any[]>('http://127.0.0.1:8000/playground/products/', {
          newArrivals: true
        });
        setProducts(data);
        console.log(data, 'data coming');
        
        const transformed = data.map((d: any) => ({
          img: d?.images?.[0] || ''
        }));
        setNewArrivalProducts(transformed);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <Items title="New Arrival" products={newArrivalProducts} />
  );
}
