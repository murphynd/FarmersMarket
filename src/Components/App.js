import React from "react";
import Header from "./Header";
import ProduceControl from "./ProduceControl";
import ScheduleList from "./schedule/ScheduleList.js";


function App() {
  return (
    <React.Fragment>
      <Header />
      <ProduceControl />
      <ScheduleList />
    </React.Fragment>
  );
}

export default App;
