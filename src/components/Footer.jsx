import React from "react";
import { Container } from "../styled/footer.styled";
import Credit from "../Credit";

const Footer = () => {
  return (
    <Container>
      <div className="top">
        <h2>Fooddly</h2>
        <div>All rights reserved</div>
      </div>
      <div className="bottom">
        <Credit />
      </div>
    </Container>
  );
};

export default Footer;
