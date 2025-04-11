'use client';
import Items from "@/components/Items/pages";


export default function NewArrivals() {
    const newArrivalProducts = [
      { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" ,router:'/info',id:0},
      { name: "Blood Arc ", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00",id:1 },
      { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" ,id:2},
      { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00",id:3 },
      { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" ,id:4},
      { name: "Blood Arc ", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00" ,id:5},
      { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00",id:6 },
      { name: "Blood Arc", img: "https://www.awkwardxstore.com/cdn/shop/files/nyjets_football_streetwear_oversize_hoodie_awkwardxstore_pakistan_1.png?v=1731770765&width=700", price: "3500.00",id:7 }

    ];
  
    return (
     <Items   title="New Arrival" 
     products={newArrivalProducts} />
    );
  }
  