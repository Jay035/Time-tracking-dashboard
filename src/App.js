import { useEffect, useState } from 'react';
import './App.css';
import { TabList } from './components/TabList';
import { TimeCard } from './components/TimeCard';
import UserInfo from './components/UserInfo';
import { DailyData, WeeklyData, MonthlyData } from './components/Data';


function App() {
  const [data, setData] = useState([]),
        [selected, setSelected] = useState("weekly"),
        tabList = [
          {
            id: "daily",
            time: "Daily"
          },
          {
            id: "weekly",
            time: "Weekly"
          },
          {
            id: "monthly",
            time: "Monthly"
          }
        ];
        useEffect(() => {
          switch(selected){
            case "daily" :
              setData(DailyData);
              break;
            case "weekly" :
              setData(WeeklyData);
              break;
            case "monthly" :
              setData(MonthlyData);
              break;
              default:
                setData(WeeklyData)
          }
        }, [selected])

  return (
    <div className="App">
      <section className=''>
        {/* user-profile */}
        <UserInfo />
        <ul className='time--div flex justify-between'>
          {tabList.map(item => {
            return(
              <TabList 
                id={item.id}
                key={item.id} 
                time={item.time}
                active={selected === item.id}
                setSelected={setSelected}
              />
            )
            })}
        </ul>
      </section>
      <section className='cards'>
        {
          data.map(item => {
            return(
              <TimeCard item={item} key={item.id} id={item.id} />
            )
          })
        }
      </section>
    </div>
  );
}

export default App;
