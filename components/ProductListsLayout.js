import React from "react";
import Container from "./Container";
import Banner from "./Banner";
import styled from "styled-components";
import Footer from "./Footer";

function ProductListsLayout({ children }) {
  return (
    <Wrapper>
      <Banner></Banner>
      <Container>
        <div className="filterMenu">Filter Menu</div>
        <div className="mainContent">{children}</div>
      </Container>
      <Footer />
    </Wrapper>
  );
}

export default ProductListsLayout;

const Wrapper = styled.div`
  .filterMenu {
    background-color: #efefef;
    padding: 1rem;
    flex: 1;
    min-width: 16rem;
    margin-top: 2.4rem;
  }

  .mainContent {
    flex: 4;
    margin-top: 2.4rem;
  }
`;
