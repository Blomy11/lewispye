console.log('Hello!');

var firstBox = document.getElementById('first-box');
console.log(firstBox);

firstBox.innerHTML = 'I'
firstBox.style.backgroundColor = 'orange'

var secondBox = document.getElementById('second-box');
console.log(secondBox);

secondBox.innerHTML = 'Love'
secondBox.style.backgroundColor = 'orange'

var thirdBox = document.getElementById('third-box');
console.log(thirdBox);

thirdBox.innerHTML = 'Rins'
thirdBox.style.backgroundColor = 'orange'


function testfunction() {
    console.log('testfunction did work');
    firstBox.style.backgroundColor = 'orange'
}

firstBox.addEventListener('click', testfunction);

function onMouseOver() {
    secondBox.style.backgroundColor = 'black';
}

secondBox.addEventListener('mouseover', onMouseOver);

function onMouseOut() {
    secondBox.style.backgroundColor = 'orange'
}

secondBox.addEventListener('mouseout', onMouseOut);

var ListOfItems = document.getElementsByClassName('item');
console.log(ListOfItems); 

function crossOutItem( event) {
    var item = event.target;
    if(item.style.textDecoration =='line-through') {
        item.style.textDecoration = 'none';
    } else {
        item.style.textDecoration = 'line-through';
    }
}
for(var count=0;count<ListOfItems.length;count++) {
    console.log('loop ran', count);
    var item = ListOfItems[count];
    console.log(item);
    item.addEventListener('click', crossOutItem);
}

var timeBetweenUpdates = 1000;

var hoursBox = getElementById('hours')
var minutesBox = getElementById('minutes')
var secondsBox = getElementById('seconds')

function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hoursBox.innerHTML = hours;
    minutesBox.innerHTML = minutes;
    secondsBox.innerHTML = seconds;

    console.log('the time is...', date);  
    console.log(hours, minutes, seconds);  
}

var clockTimer = setInterval(displayTime, timeBetweenUpdates);


