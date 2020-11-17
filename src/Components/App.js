import React from "react";
import Header from "./Header";
import ScheduleList from "./ScheduleList";
import ProduceList from "./ProduceList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ScheduleList />
      <ProduceList />
    </React.Fragment>
  );
}

export default App;
