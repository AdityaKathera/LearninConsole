import React, { Component } from "react";
import NavBarTitle from "./NavBarTitle";
import Overlay from "./Overlay";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <header className="header header-horizontal header bg-grey uk-light">
          <NavBarTitle />
        </header>
        <Overlay />
      </>
    );
  }
}
