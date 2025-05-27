import React from "react";
import Container from "../components/Container";
import Breadcrump from "../components/Breadcrump";
import CartSection from "../components/CartSection";

const MyCart = () => {
  return (
    <>
      <Container className="flex-grow">
        <Breadcrump currentPageTitle="My Cart" />
        <CartSection />
      </Container>
    </>
  );
};

export default MyCart;
