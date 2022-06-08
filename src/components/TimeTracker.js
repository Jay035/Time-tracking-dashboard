import ellipsis from '../assets/icon-ellipsis.svg';
import playIcon from '../assets/icon-play.svg';
import exerciseIcon from '../assets/icon-exercise.svg';
import studyIcon from '../assets/icon-study.svg';
import workIcon from '../assets/icon-work.svg';
import selfCareIcon from '../assets/icon-self-care.svg';
import socialIcon from '../assets/icon-social.svg';
import UserInfo from './UserInfo';
import Time from './Time';
import TabContent from './TabContent';

export default function TimeCard(){
    return(
        <div className="tracker" >
            <div className="timeList">
                <UserInfo />
                <Time />
            </div>

            <div className="time--div flex justify-between tabContainer">
                <TabContent tab="Daily" className="tabContent active" />
                <TabContent tab="Weekly" className="tabContent" />
                <TabContent tab="Monthly" className="tabContent" />
            </div>

            {/* <div className="card">
                <div className="top--info flex justify-between align-center">
                        <p className="card--title">{item.title}</p>
                        <img src={ellipsis} alt="ellipsis icon" className="ellipsis" />
                </div>
                <div className="bottom--info flex justify-between align-center">
                    <h1 className="time">
                        {item.timeframes.daily.current}hrs
                    </h1>
                    <p> {time} - {item.timeframes.daily.previous}hrs</p>
                </div>
            </div> */}
        </div>
    )
}