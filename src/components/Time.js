import {Component} from 'react';
import Tabs from '../js/tabs';

class Time extends Component{
    componentDidMount(){
        Tabs();
    }
    changeActiveTab = (e) => {
        let tabs = document.getElementsByClassName("tab");
        for(let i = 0; i < tabs.length; i++){
            tabs[i].classList.remove("active");
        }
        e.target.classList.add("active");
        console.log(e.target)
        Tabs();
    }
    render(){
        return(
            <div className="time">
                <ul className="tabs">
                    <li data-tab="daily" className="tab active" onClick={e => this.changeActiveTab(e)}>Daily</li>
                    <li data-tab="weekly" className="tab" onClick={e => this.changeActiveTab(e)}>Weekly</li>
                    <li data-tab="monthly" className="tab" onClick={e => this.changeActiveTab(e)}>Monthly</li>
                </ul>
            </div>
        )
    }
}

export default Time;