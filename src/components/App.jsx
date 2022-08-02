import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import upcomingEvent from '../upcoming-events.json';


export const App = () => {
  return (
    <div>
      <PageTitle text="24th Core Words Coalition Conference" />
      <EventBoard events={upcomingEvent}/>
    </div>
  );
};
