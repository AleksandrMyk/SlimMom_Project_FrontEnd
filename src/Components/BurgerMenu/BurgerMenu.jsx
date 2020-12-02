import React from "react";
import { slide as Menu } from "react-burger-menu";

const styles = {
  bmBurgerButton: {
    position: "relative",
    width: "30px",
    height: "22px",
    right: "20px",
    // top: "30px",
    marginLeft: "50px",
  },
  bmBurgerBars: {
    height: "10%",
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
    top: "80px",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    overflow: "hidden",
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
      <Menu
        customCrossIcon={<img src="img/cross.svg" />}
        right
        width={"100%"}
        styles={styles}
      >
        <a id="calculator" className="menu-item" href="/dashboard">
          Калькулятор
        </a>
        <a id="diary" className="menu-item" href="/diary">
          Дневник
        </a>
      </Menu>
    );
  }
}

export default BurgerMenu;

{
  /* <Menu customBurgerIcon={ <img src="img/icon.svg" /> } />
<Menu customCrossIcon={ <img src="img/cross.svg" /> } /> */
}
