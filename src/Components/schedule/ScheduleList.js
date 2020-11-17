import React from 'react';
import Schedule from "./Schedule";
import mastermarketSchedule from "./schedualData";

 function ScheduleList() {
   return (
     <React.Fragment>
        
         {mastermarketSchedule.map((schedule, index) =>
           <Schedule // JSX tags being used props to child component which is the Schedule
             day = {schedule.day}
             location = {schedule.location}
             hours = {schedule.hours}
             booth = {schedule.booth}
             key = {index} />
         )}
     </React.Fragment>
   )
 }

 export default ScheduleList;