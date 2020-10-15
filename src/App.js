import React, { Component } from "react";
import "./App.css";
import HomeComponent from "./Components/HomeComponent";
import ErrorBoundary from "./Components/ErrorBoundary";
import MetaComponents from "./Components/MetaComponents";

class App extends Component {
  render() {
    return (
      <div>
        {/* <>
         <MetaComponents/>
        </> */}
        <ErrorBoundary>
          <HomeComponent />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
