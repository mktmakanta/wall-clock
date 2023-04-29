let secondsHand = document.querySelector('.seconds');
let minutesHand = document.querySelector('.minutes');
let hoursHand = document.querySelector('.hour');
let ampm = document.querySelector('.ampm');





setInterval(() =>{
    let day = new Date();

    let hour = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();

    let secondsCon = 6*seconds; 
    let minutesCon = 6 * minutes;
    let hourCon =30 * hour + minutes / 2;

    
    secondsHand.style.transform = `rotate(${secondsCon}deg)`;
    minutesHand.style.transform = `rotate(${minutesCon}deg)`;
    hoursHand.style.transform = `rotate(${hourCon}deg)`;


    if (hour >= 12){
        ampm.innerHTML = "PM";
    
    }else{
        ampm.innerHTML = "AM";
    }


},1000)


































// setInterval(() => {
//     let day = new Date(); 
//   let  hour = day.getHours();
//    let minutes = day.getMinutes();
//   let  seconds = day.getSeconds();
//     hoursHand = 30 * hour+ minutes / 2; //converting current time
//     minutesHand= 6 * minutes;
//     secondsHand = 6 * seconds;

//     hoursHand.style.transform = `rotate(${hoursHand}deg)`;
//     minutesHand.style.transform = `rotate(${minutesHand}deg)`;
//     secondsHand.style.transform = `rotate(${secondsHand}deg)`;
// }, 1000);






