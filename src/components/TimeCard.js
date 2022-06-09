import ellipsis from '../assets/icon-ellipsis.svg';

export const TimeCard = ({item}) => {
  
  return (
    <div>
          <div id={item.id} className='bg'>
            <img className='card--img' src={item.image} alt="" />
            <div className="card">
              <div className="flex justify-between align-center">
                <p className='card--title'>{item.title}</p>
                <img className='ellipsis' src={ellipsis} alt="ellipsis" />
              </div>
              <div className="time flex justify-between align-center">
                <h1>{item.timeframes.current}hrs</h1>
                <p>{item.timeframes.time} - {item.timeframes.previous}hrs</p>
              </div>
            </div>
          </div>
    </div>
  )
}
