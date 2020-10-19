import React, { Component } from "react";
import "./App.css";
import HomeComponent from "./Components/HomeComponent";
import ErrorBoundary from "./Components/ErrorBoundary";
import MetaComponents from "./Components/MetaComponents";
import { Route, Router, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndCondition from "./Pages/TermsAndCondition";
import ContactUs from "./Pages/ContactUs";
import InstructorRegistration from "./Pages/InstructorRegistration";
import CourseList from "./Components/CourseList";
import CourseCategory from "./Pages/CourseCategory";
import LatestCourse from "./Components/LatestCourse";

class App extends Component {
  render() {
    return (
      <>
        {/* <>
         <MetaComponents/>
        </> */}
        <ErrorBoundary>
            <Switch>
              <Route exact path={["/", "/home"]} component={HomeComponent} />
              <Route exact path={"/login"} component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/privacy" component={PrivacyPolicy} />
              <Route exact path="/terms" component={TermsAndCondition} />
              <Route exact path="/contact" component={ContactUs} />
              <Route exact path="/insReg" component={InstructorRegistration} />
              <Route exact path="/courseList" component={CourseList} />
              <Route exact path="/courseCategory" component={CourseCategory} />
              <Route exact path="/latestCourse" component={LatestCourse} />
            </Switch>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
