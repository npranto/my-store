import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div
      className={`${styles["heroComponent"]} hero rounded-md min-h-screen bg-base-200`}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Find the perfect gift for everyone on your list
          </h1>

          <p className="py-6">
            Our online store has everything you need this holiday season. From
            the latest gadgets and electronics to fashion, home goods, toys and
            more, we make gift giving easy.
          </p>

          <button className="btn btn-primary">Start Shopping</button>
        </div>
      </div>
    </div>
  );
}
