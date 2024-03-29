import React, { Component } from "react";
import "./App.css";
import HomeComponent from "./Components/HomeComponent";
import ErrorBoundary from "./Components/ErrorBoundary";
import MetaComponents from "./Components/MetaComponents";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndCondition from "./Pages/TermsAndCondition";
import Pricing from "./Pages/Pricing";
import ContactUs from "./Pages/ContactUs";
import InstructorRegistration from "./Pages/InstructorRegistration";
import InstructorPortal from "./Pages/InstructorPortal";
import CourseList from "./Components/CourseList";
import CourseCategory from "./Pages/CourseCategory";
import Takecourse from "./Pages/takecourse";
import { latestCourses } from "./mockdata";
import LatestVideos from "./Pages/LatestVideos";
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
            <Route exact path="/price" component={Pricing} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/insReg" component={InstructorRegistration} />
            <Route exact path="/insPortal" component={InstructorPortal} />
            <Route exact path="/courseList" component={CourseList} />
            <Route exact path="/courseCategory" component={CourseCategory} />
            <Route exact path="/latestCourse" component={LatestCourse} />
            <Route exact path="/takecourse" component={Takecourse} />
          </Switch>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
