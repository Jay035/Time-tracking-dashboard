# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users are able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./src/assets/Screenshot.png)

### Links

- Solution URL: [Github](https://github.com/Jay035/Time-tracking-dashboard/)
- Live Site URL: [Github Pages](https://jay035.github.io/Time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Google Fonts


### What I learned

I learned how to manipulate functionalities with the use of "useState" and "useEffect" much better


```css
.proudOfThisCSS{
  padding-top: 2.8em;
  margin-block: 2em;
  border-radius: 15px;
  position: relative;
  background-repeat: no-repeat;
  background-position-y: -5%;
  background-position-x: 400px;
}
```
```js
const proudOfThisFunc = () => {
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
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
