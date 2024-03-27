import React from "react";

export default function ProductCard() {
  return (
    <div className="card max-w-96 flex-grow bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Nike Air Max Dn</h2>
        <p>Men&apos;s Shoes</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">$160</button>
        </div>
      </div>
    </div>
  );
}
