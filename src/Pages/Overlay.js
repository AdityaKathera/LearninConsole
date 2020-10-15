import React, { Component } from "react";

export default class Overlay extends Component {
  render() {
    return (
      <>
        <div
          className="nav-overlay uk-navbar-left uk-position-relative uk-flex-1 bg-grey uk-light p-2"
          hidden
          style={{ zIndex: 10000 }}
        >
          <div
            className="uk-navbar-item uk-width-expand"
            style={{ minHeight: "60px" }}
          >
            <form className="uk-search uk-search-navbar uk-width-1-1">
              <input
                className="uk-search-input"
                type="search"
                placeholder="Search..."
                autoFocus
              />
            </form>
          </div>
          <a
            className="uk-navbar-toggle"
            uk-close="true"
            uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
            href="#"
          ></a>
        </div>
      </>
    );
  }
}
