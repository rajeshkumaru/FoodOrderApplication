import { Fragment } from "react";

import mealImage from "../../assets/indian-food.jpg";
import HeaderCartButton from "../Cart/HeaderCartButton";

import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Order Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
