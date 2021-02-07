import logo from './logo.svg';
import './App.css';

import {Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent} from '@syncfusion/ej2-react-schedule'

function App() {
  return (
    <div className="App">
      <ScheduleComponent currentView='Day'>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default App;
