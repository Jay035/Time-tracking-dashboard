const Tabs = () => {
    const tabs = document.getElementsByClassName('tab');
    const tabContent = document.getElementsByClassName('tabContent');

    for(let i = 0; i < tabs.length; i++){
        if(tabs[i].classList.contains("active")){
            let dataTab = tabs[i].getAttribute("data-tab");
            for(let j= 0; j < tabContent.length; j++){
                if(tabContent[j].id === dataTab){
                    tabContent[j].classList.add("active")
                }
            }
        }
    }
}

export default Tabs;