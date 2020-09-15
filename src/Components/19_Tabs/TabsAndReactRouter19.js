import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Contact from "./Contact";
import About from "./About";
const TabsAndReactRouter19 = (props) => {
  const {match , history} = props;
  const {params } = match;
  const {page} = params


  const tabNametoIndex = {
    0: "about",
    1: "contact",
  };
  const IndextoTabName = {
    about: 0,
    contact: 1,
  };

  const [selectedTab, setSelectedTab] = React.useState(IndextoTabName[page]);
  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNametoIndex[newValue]}`);
    setSelectedTab(newValue);
  };
  return (
    <>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="About" />
          <Tab label="Contact Us" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <About></About>}
      {selectedTab === 1 && <Contact></Contact>}
    </>
  );
};

export default TabsAndReactRouter19;
