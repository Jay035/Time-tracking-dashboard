import './App.css';
import timeData from './components/Data';
import TabContent from './components/TabContent';
import TimeCard from './components/TimeTracker';
import Cards from './components/TimeTracker';

function App() {
  // console.log(timeData)
  // const card = timeData.map(data => {
  //   return(
  //     <Cards
  //       key={data.id}
  //       item={data} 
  //     />
  //   )
  // })

  return (
    <div className="App">
      <TimeCard />
    </div>
  );
}

export default App;
