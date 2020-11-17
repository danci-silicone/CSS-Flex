import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./Home";

import Sidebar from "./components/Sidebar";
import {
  DisplayOrder,
  FlexDirectionFlexGrow,
  FlexWrapFlexShrink,
  FlexFlowFlexBasis,
  JustifyContentFlex,
  AlignItemsAlignSelf,
  AlignContent,
} from "./pages";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={DisplayOrder} />
          <Route
            path="/flexdirectionflexgrow"
            component={FlexDirectionFlexGrow}
          />
          <Route path="/flexwrapflexshrink" component={FlexWrapFlexShrink} />
          <Route path="/flexflowflexbasis" component={FlexFlowFlexBasis} />
          <Route path="/justifycontentflex" component={JustifyContentFlex} />
          <Route path="/alignitemsalignself" component={AlignItemsAlignSelf} />
          <Route path="/aligncontent" component={AlignContent} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
