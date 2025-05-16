import React from "react";
import products from "../data/product";
import Cart from "./Cart";
import Container from "./Container";
import { Link } from "react-router-dom";
import carts from "../data/cart";

const CartSection = () => {

  return (
    <>
      <div className="flex flex-col gap-4 h-screen">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}

        <Container className="mt-auto">
          <div className="border-t border-black flex justify-end gap-10 py-5">
            <div className="text-right">
              <p className="text-gray-500">Total</p>
              <p className="font-bold">123</p>
            </div>

            <div className="text-right">
              <p className="text-gray-500">Tax(10%)</p>
              <p className="font-bold">123</p>
            </div>

            <div className="text-right">
              <p className="text-gray-500">Net Total</p>
              <p className="text-2xl font-bold">123</p>
            </div>
          </div>
          <div className="text-end mb-5">
            <Link className="border border-black px-10 py-2">Order Now</Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CartSection;
