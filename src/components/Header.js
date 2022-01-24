import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSeletor } from "react-redux";
import { useSelector } from "react-redux";
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Wrap2>
      <Logo src="/images/logo.svg" />
      <Links>{cars && cars.map((car, index) => <a href="#">{car}</a>)}</Links>
      <RightMenu>
        <Menu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
        </Menu>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrap>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>

        {cars &&
          cars.map((car, index) => (
            <li>
              <a href="#">{car} 3</a>
            </li>
          ))}
      </BurgerNav>
    </Wrap2>
  );
}

export default Header;
const Wrap2 = styled.div`
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;
const Logo = styled.img`
  display: flex;
  flex-direction: row;
  margin: 15px 40px;
`;

const Links = styled.div`
  a {
    margin: 20px;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1.6px;
  }
  @media (max-width: 1199px) {
    display: none;
  } ;
`;

const Menu = styled.div`
 display:flex:
  justify-content: center;
 align-items:center; 

a {
    margin: 20px;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1.6px;
    padding-right: 20px;
    flex-wrap:nowrap;
  }
    @media (max-width: 1199px) {
    margin-right: 0;
    a {
    
    font-weight: 600;
    font-size: 16px;
    
    padding-right: 20px;
    flex-wrap:nowrap;
  }
  } ;

`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CustomClose = styled(CloseIcon)`
  display: flex;
  align-content: flex-end;
  cursor: pointer;
`;

const CloseWrap = styled.div`
  display: flex;
  justify-content: end;
`;
