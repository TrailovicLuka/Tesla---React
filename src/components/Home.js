import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home(title, description, LeftButton, RightButton, backgroundImg) {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        LeftButton="Custom Order"
        RightButton="Existing Inventory"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        LeftButton="Custom Order"
        RightButton="Existing Inventory"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        LeftButton="Custom Order"
        RightButton="Existing Inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        LeftButton="Custom Order"
        RightButton="Existing Inventory"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        LeftButton="Order Now"
        RightButton="Learn More"
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Solar Roof"
        description="Order Online for Touchless Delivery"
        LeftButton="Custom Order"
        RightButton="Existing Inventory"
        backgroundImg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        LeftButton="Shop Now"
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
