<<<<<<< HEAD
import { slide as Menu } from "react-burger-menu";
import React from "react";
=======
import React from "react";
import { slide as Menu } from "react-burger-menu";
>>>>>>> 8aaf7efbfc3b5b57d22171e7d971f07d009fbc3a

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "50px",
    top: "36px",
    marginLeft: "50px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    position: "absolute",
    top: "10px",
    height: "24px",
    width: "24px",
    right: "50px",
  },
  bmCross: {
    background: "#bdc3c7",
    display: "none",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "100px",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    display: "flex",
    flexDirection: "column",
    color: "#b8b7ad",
    padding: "0.8em",
    textAlign: "center",
  },
  bmItem: {
    display: "inline-block",
    color: "#e0e0e0",
    textDecoration: "none",
    fontFamily: "Montserrat",
    fontWeight: "700",
    padding: "20px",
    outline: "none",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: "100px",
  },
};

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right width={"100%"} styles={styles}>
        <a id="calculator" className="menu-item" href="/calculator">
          Калькулятор
        </a>
<<<<<<< HEAD
        <a id="dairy" className="menu-item" href="/dairy">
=======
        <a id="diary" className="menu-item" href="/diary">
>>>>>>> 8aaf7efbfc3b5b57d22171e7d971f07d009fbc3a
          Дневник
        </a>
      </Menu>
    );
  }
}

export default BurgerMenu;
