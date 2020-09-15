import React from "react";
import "./App.css";
// import HomePage2 from "./Components/2_Grid/2HomePage";
// import HomePage3 from "./Components/6_Theme/HomePage3";
import TabsAndReactRouter19 from "./Components/19_Tabs/TabsAndReactRouter19";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  
  return (
    <div>
      <Switch>
        {/* <Route
          exact
          path="/"
          render={(props) => <TabsAndReactRouter19 {...props} />}
        /> */}
        <Redirect exact from="/home" to="/home/about" />
        <Route
          exact
          path="/home/:page?"
          render={(props) => <TabsAndReactRouter19 {...props} />}
        />
      </Switch>

      {/* <HomePage2 /> */}
      {/* <HomePage3 cool={cool}/> */}
      {/* <TabsAndReactRouter19></TabsAndReactRouter19> */}
    </div>
  );
}

export default App;
