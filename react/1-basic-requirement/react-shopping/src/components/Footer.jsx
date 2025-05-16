import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="mx-5 mt-auto bg-black text-center text-center text-white py-2 ">
      <Container>
        © {date.getFullYear()}{" "}
        <a href="https://mms-it.com" className="underline text-gray-400">
          MMS IT
        </a>
        . All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;
